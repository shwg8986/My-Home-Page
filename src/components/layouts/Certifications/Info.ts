function createData(
    Dates: string,
    Certifications: string,
) {
    return { Dates, Certifications };
}

export const CertificationsInfo = [
    createData('2021/2', "TOEIC L&R Total Score 780"),
    createData('2021/12', "基本情報技術者試験, 情報処理推進機構"),
    createData('2023/7', "Paiza プログラミングスキルチェック Sランク"),
    createData('2023/8', "バーチャルリアリティ技術者認定試験 セオリーコース, 日本VR学会"),
    createData('2024/2', "バーチャルリアリティ技術者認定試験 アプリケーションコース, 日本VR学会"),
    createData('2024/5', "G検定, 一般社団法人日本ディープラーニング協会"),
    createData('2024/6', "第一級陸上特殊無線技士, 公益財団法人 日本無線協会"),
];
