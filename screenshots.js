import captureWebsite from 'capture-website';

const options = {
	width: 1200,
	height: 900,
    time: 99,
    delay: 30
};

const items = [
	['https://sindresorhus.com', 'sindresorhus'],
	['https://github.com', 'github']
];

const work = [
    [
        "https://www.neumos.com/",
        "neumos"
    ],
]

await Promise.all(work.map(([url, filename]) => {
	return captureWebsite.file(url, `${filename}-thumb.jpg`, options);
}));
