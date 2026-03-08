import sharp from 'sharp';
import { readdir, readFile, copyFile } from 'fs/promises';
import { join, parse } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dir = join(__dirname, '..', 'public', 'Afbeeldingen');

const files = await readdir(dir);
const pngs = files.filter((f) => f.endsWith('.png'));

for (const name of pngs) {
  const input = join(dir, name);
  const { name: baseName } = parse(name);
  const webpOut = join(dir, baseName + '.webp');

  const pngLen = (await readFile(input)).length;

  await sharp(input).webp({ quality: 80 }).toFile(webpOut);
  const webpLen = (await readFile(webpOut)).length;

  const saved = ((1 - webpLen / pngLen) * 100).toFixed(0);
  console.log(
    `${name}: PNG ${(pngLen / 1024).toFixed(0)} KB → WebP ${(webpLen / 1024).toFixed(0)} KB (−${saved}%)`,
  );
}

console.log('Klaar.');
