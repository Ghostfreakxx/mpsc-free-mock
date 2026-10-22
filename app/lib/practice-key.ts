// 32-bit FNV-1a hash of a saved-response key ("category::question"). The dashboard compares
// hashes instead of full question text, so it does not need the question bank in the browser.
export function practiceKeyHash(key: string): number {
  let hash = 0x811c9dc5;
  for (let index = 0; index < key.length; index += 1) {
    hash ^= key.charCodeAt(index);
    hash = Math.imul(hash, 0x01000193) >>> 0;
  }
  return hash;
}
