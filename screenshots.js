import captureWebsite from 'capture-website';
import site from "./src/data/site.json" assert { type: "json" };

const options = {
	width: 1280,
	height: 800,
    timeout: 99,
    delay: 30
};

let importedSites = site.work;

setTimeout( async () => {
    importedSites.forEach( site => {
        captureWebsite.file(site.link, `${site.title.toLowerCase().replace(" ", "-")}-thumb.jpg`, options);
    });
}, 1000 );
