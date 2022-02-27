import captureWebsite from 'capture-website';

const options = {
	width: 1200,
	height: 900,
    time: 99,
    delay: 30
};

const work = [
    [
        "https://5e62651c3e94f3a9ac1706cd--nifty-mestorf-c2ddb0.netlify.app/",
        "utatsxsw2020"
    ],
]

await Promise.all(work.map(([url, filename]) => {
	return captureWebsite.file(url, `${filename}-thumb.jpg`, options);
}));
