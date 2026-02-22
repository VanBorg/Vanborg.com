import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dir = join(__dirname, '..', 'public', 'Afbeeldingen');

const files = await readdir(dir);
const pngs = files.filter((f) => f.endsWith('.png'));

for (const name of pngs) {
  const input = join(dir, name);
  const tmp = join(dir, name + '.tmp');
  const { readFile, rename, unlink } = await import('fs/promises');
  const beforeLen = (await readFile(input)).length;
  await sharp(input)
    .png({ compressionLevel: 9 })
    .toFile(tmp);
  await unlink(input);
  await rename(tmp, input);
  const afterLen = (await readFile(input)).length;
  console.log(`${name}: ${(beforeLen / 1024).toFixed(1)} KB → ${(afterLen / 1024).toFixed(1)} KB`);
}

console.log('Klaar.');
