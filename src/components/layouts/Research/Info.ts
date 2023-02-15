export type ResearchImagesType = {
    "original": string,
    "thumbnail": string,
}

export const ResearchImages = [
    {
        original: '/static/images/ResearchSlide/ResearchSlide1.png',
        thumbnail: '/static/images/ResearchSlide/ResearchSlide1.png',
    },
    {
        original: '/static/images/ResearchSlide/ResearchSlide1.png',
        thumbnail: '/static/images/ResearchSlide/ResearchSlide1.png',
    },
    {
        original: '/static/images/ResearchSlide/ResearchSlide1.png',
        thumbnail: '/static/images/ResearchSlide/ResearchSlide1.png',
    },
    {
        original: '/static/images/ResearchSlide/ResearchSlide1.png',
        thumbnail: '/static/images/ResearchSlide/ResearchSlide1.png',
    },
    {
        original: '/static/images/ResearchSlide/ResearchSlide1.png',
        thumbnail: '/static/images/ResearchSlide/ResearchSlide1.png',
    },
]

export const ResearchWords = [
    "統計的機械学習",
    "深層学習",
    "時系列分析",
    "VR空間",
    "VR酔い",
    "Cybersickness",
    "臨場感",
    "眼球運動",
    "視線追跡",
    "HCI",
    "UX",
    "ユーザビリティ",
    "電気刺激",
    "ロボットアーム",
    "遠隔作業",
];

function createData(
    title: string,
) {
    return { title };
}


export const Publications = [
    createData('S.Shimada, Y.Ikei, N.Nishiuchi, and V.Yem. "Study of cybersickness prediction in real time using eye tracking data", IEEEVR, March 25-29, 2023, Shanghai China. (Accepted with peer review) '),
    createData('S.Shimada, Y.Ojima, Y.Kikuchi, Y.Ikei, and V.Yem. "Comparative evaluation of joystick and leaning-based locomotion in immersive telepresence with body motion feedback", Augmented Humans, March 12-14, 2023, Glasgow, United Kingdom. (Accepted with peer review) '),
    createData('島田匠悟, 西内信之 "VR空間におけるドラッグ&ドロップ操作のインタフェース評価に関する研究", 日本人間工学会 第63回大会, July 30-31, 2022, Hiroshima, Japan. (Without peer review) '),
];
