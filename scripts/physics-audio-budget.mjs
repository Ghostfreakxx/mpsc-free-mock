import fs from 'node:fs/promises';
import path from 'node:path';

export const budgetLimitUsd = 10;
// Internal allocations, not provider-reported charges or an account-wide cap.
export const ttsReservationUsd = 0.20;
const centsFor = amount => Math.ceil(Number((amount * 100).toFixed(8)));
export function alignmentReservationUsd(seconds) {
  if (!Number.isFinite(seconds) || seconds <= 0) throw new Error('Invalid alignment duration');
  return Math.ceil(seconds / 60) * 0.02;
}

export async function reserveAudioBudget(root, { lesson, chapter, kind, amount }, { uncapped = process.env.PHYSICS_AUDIO_UNCAPPED === '1' } = {}) {
  if (!['tts', 'alignment'].includes(kind) || !Number.isInteger(chapter) || chapter < 1 || !/^[a-z0-9-]+$/.test(lesson) || !Number.isFinite(amount) || amount <= 0) throw new Error('Invalid budget reservation');
  const directory = path.join(root, 'tmp', 'physics-audio-budget');
  await fs.mkdir(directory, { recursive: true });
  const lockPath = path.join(directory, 'ledger.lock');
  let lock;
  try { lock = await fs.open(lockPath, 'wx'); }
  catch { throw new Error('Audio budget is locked; inspect active generation before retrying'); }
  try {
    const file = path.join(directory, 'ledger.json');
    let ledger;
    try { ledger = JSON.parse(await fs.readFile(file, 'utf8')); }
    catch (error) {
      if (error.code !== 'ENOENT') throw new Error('Unreadable audio budget ledger; generation stopped');
      ledger = { version: 1, limitUsd: budgetLimitUsd, reservations: [] };
    }
    if (ledger.version !== 1 || ![5, budgetLimitUsd].includes(ledger.limitUsd) || !Array.isArray(ledger.reservations) || ledger.reservations.some(entry => !Number.isFinite(entry.amount) || entry.amount <= 0)) throw new Error('Invalid audio budget ledger; generation stopped');
    const usedCents = ledger.reservations.reduce((total, entry) => total + centsFor(entry.amount), 0);
    if (!uncapped && usedCents > ledger.limitUsd * 100) throw new Error('Ledger exceeds its prior approved limit; generation stopped');
    if (ledger.limitUsd === 5 && budgetLimitUsd === 10) {
      ledger.limitChanges = [...(ledger.limitChanges ?? []), { fromUsd: 5, toUsd: 10, approvedOn: '2026-10-09' }];
      ledger.limitUsd = budgetLimitUsd;
    }
    const cents = centsFor(amount);
    if (!uncapped && usedCents + cents > budgetLimitUsd * 100) throw new Error('Remaining Physics audio budget exceeded; no API request sent');
    if (uncapped && !ledger.capLifted) ledger.capLifted = { authorizedOn: '2026-10-10', reason: 'User explicitly lifted the previous total cap and authorized continued Marin generation.' };
    ledger.reservations.push({ lesson, chapter, kind, amount: cents / 100, reservedAt: new Date().toISOString() });
    const temporary = `${file}.pending`;
    await fs.writeFile(temporary, JSON.stringify(ledger, null, 2) + '\n');
    await fs.rename(temporary, file);
    return { reservedUsd: (usedCents + cents) / 100, remainingUsd: uncapped ? null : (budgetLimitUsd * 100 - usedCents - cents) / 100 };
  } finally {
    await lock.close();
    await fs.unlink(lockPath);
  }
}
