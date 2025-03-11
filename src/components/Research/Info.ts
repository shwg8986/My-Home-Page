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
    "Sense of Presence",
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
    createData('S. Shimada, P. Pannattee, Y. Ikei, N. Nishiuchi and V. Yem, "High-frequency cybersickness prediction using deep learning techniques with eye-related indices," in IEEE Access, vol. 11, pp. 95825-95839, 2023. doi:10.1109/ACCESS.2023.3312216'),
];

export const Conferences = [

    createData('小島優希也*, 島田匠悟, 岡本正吾, ヤェムヴィボル, 池井寧. "遠隔ロボットの多重身体性に関する研究," 映情学技報, vol. 48, no. 12, pp. 57-60, Mar 15, 2024. [査読なし]'),

    createData('P. Pannattee*, S. Shimada, V. Yem and N. Nishiuchi. "Investigating the use of machine learning methods for levels of sense of presence classification based on eye tracking data," Computer Information Systems and Industrial Management (CISIM), Springer, Cham, vol. 14164, 2023. doi:10.1007/978-3-031-42823-4_35 [査読あり]'),

    createData('島田匠悟*, 小島優希也, 西内信之, 池井寧, YEM VIBOL. "テレプレゼンスのためのLeaning型ロコモーションと歩行感覚提示の検討," 第28回日本バーチャルリアリティ学会大会（VRSJ2023）, Sep 12-14, 2023, Tokyo, Japan. [査読なし]'),

    createData('小島優希也*, 島田匠悟, YEM VIBOL, 岡本正吾, 池井寧. "複数のテレプレゼンスロボットを用いた２重身体感覚に関する研究," 第28回日本バーチャルリアリティ学会大会（VRSJ2023）, Sep 12-14, 2023, Tokyo, Japan. [査読なし]'),

    createData('S. Shimada*, Y. Ikei, N. Nishiuchi and V. Yem. "Study of cybersickness prediction in real time using eye tracking data," IEEE Conference on Virtual Reality and 3D User Interfaces (IEEE VR), March 25-29, 2023, Shanghai, China. doi:10.1109/vrw58643.2023.00278 [査読あり]'),

    createData('S. Shimada*, Y. Ojima, Y. Kikuchi, Y. Ikei and V. Yem. "Comparative evaluation of joystick and leaning-based locomotion in immersive telepresence with body motion feedback," Association for Computing Machinery, Augmented Humans (ACM AHs), March 12-14, 2023, Glasgow, UK. doi:10.1145/3582700.3583696 [査読あり]'),

    createData('島田匠悟*, 西内信之. "VR空間におけるドラッグ&ドロップ操作のインタフェース評価に関する研究," 日本人間工学会 第63回大会, July 30-31, 2022, Hiroshima, Japan. [査読なし]'),
];

export const Exhibitions = [
    createData('小島優希也, 島田匠悟, 米田悠人, 芹澤尚舜, 西内信之, 池井寧, YEM VIBOL. "複数リアル空間を体験するXRメタバース", 第28回日本バーチャルリアリティ学会大会（VRSJ2023）, Sep 12-14, 2023, Tokyo, Japan.'),

    createData('東京都立大学, 筑波大学, 東京大学. "複数の実空間のVR歩行体験とマルチ視聴が可能なXRメタバース," URCF（超臨場感コミュニケーション産学官フォーラム）シンポジウム 2023, Aug 30, 2023, Tokyo, Japan.'),

    createData('V. Yem, Y. Ojima, S. Shimada and Y. Ikei. "Real time multispace experience," Laval Virtual 2023, April 12-16, 2023, Laval, France.'),
];
