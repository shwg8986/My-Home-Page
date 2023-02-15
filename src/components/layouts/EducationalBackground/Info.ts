function createData(
    Dates: string,
    schools: string,
) {
    return { Dates, schools };
}

export const EducationalBackGroundInfo = [
    createData('2018年3月', "神奈川県立 相模原高等学校 卒業"),
    createData('2018年4月', "首都大学東京 システムデザイン学部 情報科学科 入学"),
    createData('2022年3月', "東京都立大学 システムデザイン学部 情報科学科 卒業（取得単位：138, GPA：3.27/4.00）"),
    createData('2022年4月', "東京都立大学大学院 システムデザイン研究科 情報科学域 入学"),
];
