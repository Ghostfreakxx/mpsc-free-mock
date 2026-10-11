import fs from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';

const root = path.resolve(import.meta.dirname, '..');
const fresh = new Set(['dual-nature-applications', 'atomic-nuclear-applications', 'electronics-applications', 'experimental-applications']);
const snapshot = path.join(root, 'tmp', process.argv[3] ?? 'final-physics-preservation.json');
const digest = bytes => createHash('sha256').update(bytes).digest('hex');
if (process.argv[2] === 'snapshot') {
  const files = {};
  for (const folder of await fs.readdir(path.join(root, 'public/lectures'), { withFileTypes: true })) {
    if (!folder.isDirectory() || (!process.argv[3] && fresh.has(folder.name))) continue;
    for (const file of await fs.readdir(path.join(root, 'public/lectures', folder.name))) {
      if (!/\.(mp3|vtt)$/.test(file)) continue;
      const relative = `public/lectures/${folder.name}/${file}`;
      files[relative] = digest(await fs.readFile(path.join(root, relative)));
    }
  }
  await fs.writeFile(snapshot, JSON.stringify(files, null, 2), { flag: 'wx' });
  console.log(`Preservation snapshot: ${Object.keys(files).length} existing audio/caption files.`);
} else if (process.argv[2] === 'verify') {
  const files = JSON.parse(await fs.readFile(snapshot, 'utf8'));
  for (const [relative, hash] of Object.entries(files)) {
    if (digest(await fs.readFile(path.join(root, relative))) !== hash) throw new Error(`Existing recording changed: ${relative}`);
  }
  console.log(`Preserved all ${Object.keys(files).length} existing audio/caption files byte-for-byte.`);
} else throw new Error('Choose snapshot or verify');
