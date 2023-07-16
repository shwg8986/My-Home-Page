function createData(
    Dates: string,
    schools: string,
) {
    return { Dates, schools };
}

export const CertificationsInfo = [
    createData('2021年2月', "TOEIC L&R Total Score 780"),
    createData('2021年12月', "基本情報技術者, 情報処理推進機構"),
    createData('2023年7月', "Paiza プログラミングスキルチェック Sランク"),
];
