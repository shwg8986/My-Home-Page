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
    "眼球運動",
    "視線追跡",
    "HCI",
    "UX",
    "ユーザビリティ",
    "遠隔作業",
];

function createData(
    title: string,
) {
    return { title };
}


export const Publications = [
    createData('S.Shimada, Y.Ikei, N.Nishiuchi, and V.Yem. "Study of cybersickness prediction in real time using eye tracking data", IEEE Conference on Virtual Reality and 3D User Interfaces (IEEE VR), March 25-29, 2023, Shanghai in China. [With peer review] '),
    createData('S.Shimada, Y.Ojima, Y.Kikuchi, Y.Ikei, and V.Yem. "Comparative evaluation of joystick and leaning-based locomotion in immersive telepresence with body motion feedback", Association for Computing Machinery, Augmented Humans (ACM AHs), March 12-14, 2023, Glasgow in United Kingdom. [With peer review] '),
    createData('島田匠悟, 西内信之 "VR空間におけるドラッグ&ドロップ操作のインタフェース評価に関する研究", 日本人間工学会 第63回大会, July 30-31, 2022, Hiroshima in Japan. [Without peer review] '),
];

export const Exhibitions = [
    createData('V.Yem, Y.Ojima, S.Shimada, and Y.Ikei. "Real time multispace experience", Laval Virtual 2023, April 12-16, 2023, Laval in France.'),
];
