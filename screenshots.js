import captureWebsite from 'capture-website';

const options = {
	width: 1200,
	height: 900,
    time: 15,
    delay: 20
};

const items = [
	['https://sindresorhus.com', 'sindresorhus'],
	['https://github.com', 'github']
];

const work = [
    [
        "https://jcelestelay.com/",
        "celeste"
    ],
    [
        "https://amityworrel.com/",
        "amityworrel"
    ],
    [
        "https://www.innealtacapital.com/",
        "innealtacapital"
    ],
    [
        "https://www.naocon.org/",
        "naocon"
    ],
    [
        "https://www.neumos.com/",
        "neumos"
    ],
    [
        "https://tallerdeharrington.art/",
        "tallerharrington"
    ],
    [
        "https://prochoicetexas.org/",
        "naraltx"
    ],
    [
        "https://avowtexas.org/",
        "avow"
    ],
    [
        "https://diversity.utexas.edu/",
        "ddce"
    ],
    [
        "https://womenandtheirwork.org",
        "womenwork"
    ],
    [
        "https://sarajunebk.com/",
        "sarajune"
    ],
    [
        "https://atxbookarts.org/",
        "atxbookarts"
    ],
    [
        "https://unquietthings.com/",
        "unquietthings"
    ],
    [
        "https://sculptureforge.com/",
        "colinmcintyre"
    ],
    [
        "https://firstgeneration.utexas.edu/",
        "firstgenlonghorns"
    ],
    [
        "https://president.utexas.edu/",
        "ootpresident"
    ],
    [
        "https://everyminutestronger.com/",
        "everyminute"
    ],
    [
        "https://www.chamberlainmchaney.com/",
        "chamberlainmchaney"
    ],
    [
        "https://mondofuzz.com/",
        "mondofuzz"
    ],
    [
        "https://ardorwoodfarm.com/",
        "ardorfarm"
    ],
    [
        "https://asociacioninternacionaldehispanistas.org/",
        "aidh"
    ],
    [
        "https://43quai.com/",
        "43quai"
    ],
    [
        "https://bluerockrepair.com/",
        "bluerockrepair"
    ],
    [
        "https://rachelandtad.netlify.app/",
        "racheltad"
    ],
    [
        "https://5f43d10364e2fc0007cd8868--ut-communication-awards.netlify.app/submissions-list/",
        "commawards"
    ],
    [
        "https://tower.utexas.edu/",
        "uttower"
    ],
    [
        "https://inthegardenfarm.org/",
        "inthegarden"
    ],
    [
        "https://needabortion.org/",
        "needabortion"
    ],
    [
        "http://repropowertx.org/",
        "repropower"
    ],
    [
        "https://rosieslaw.org/",
        "rosieslaw"
    ],
    [
        "https://www.novahaircollective.com/",
        "novahair"
    ],
    [
        "https://impact.utexas.edu/",
        "tximpact"
    ],
    [
        "https://rbuildersllc.com/",
        "rbuildersllc"
    ],
    [
        "https://asher-blair.com/",
        "asherblaircomm"
    ],
    [
        "https://eastside-ar.netlify.app/",
        "eastsunrise",
    ],
    [
        "https://news.utexas.edu/",
        "utnews"
    ]
]

await Promise.all(work.map(([url, filename]) => {
	return captureWebsite.file(url, `${filename}-thumb.jpg`, options);
}));
