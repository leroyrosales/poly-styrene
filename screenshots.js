import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import captureWebsite from 'capture-website';

const __dirname = dirname(fileURLToPath(import.meta.url));
const site = JSON.parse(readFileSync(join(__dirname, 'src/data/site.json'), 'utf8'));

const options = {
	width: 1280,
	height: 800,
	timeout: 99,
	delay: 30,
};

const importedSites = site.work;

setTimeout(async () => {
	importedSites.forEach((entry) => {
		captureWebsite.file(
			entry.link,
			`${entry.title.toLowerCase().replace(' ', '-')}-thumb.jpg`,
			options,
		);
	});
}, 1000);
