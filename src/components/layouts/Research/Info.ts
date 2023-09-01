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
    "Virtual Reality",
    "Cross Reality",
    "Cybersickness",
    "Locomotion",
    "Deep Learning",
    "Time Series Analysis",
    "Eye Tracking",
    "Teleoperation",
    "HCI",
];

function createData(
    title: string,
) {
    return { title };
}

export const Journals = [
    createData('S. Shimada, P. Pannattee, Y. Ikei, N. Nishiuchi, and V. Yem, "High-Frequency Cybersickness Prediction Using Deep Learning Techniques with Eye-Related Indices,"  in IEEE Access, 2023. (to appear) [査読あり]'),
];

export const Conferences = [
    createData('S.Shimada, Y.Ikei, N.Nishiuchi, and V.Yem. "Study of cybersickness prediction in real time using eye tracking data", IEEE Conference on Virtual Reality and 3D User Interfaces (IEEE VR), March 25-29, 2023, Shanghai, China. DOI: 10.1109/vrw58643.2023.00278 [査読あり] '),

    createData('S.Shimada, Y.Ojima, Y.Kikuchi, Y.Ikei, and V.Yem. "Comparative evaluation of joystick and leaning-based locomotion in immersive telepresence with body motion feedback", Association for Computing Machinery, Augmented Humans (ACM AHs), March 12-14, 2023, Glasgow, United Kingdom. DOI: 10.1145 / 3582700.3583696[査読あり] '),

    createData('島田匠悟, 西内信之 "VR空間におけるドラッグ&ドロップ操作のインタフェース評価に関する研究", 日本人間工学会 第63回大会, July 30-31, 2022, Hiroshima, Japan. [査読なし] '),
];

export const Exhibitions = [
    createData('V.Yem, Y.Ojima, S.Shimada, and Y.Ikei. "Real time multispace experience", Laval Virtual 2023, April 12-16, 2023, Laval in France.'),
];
