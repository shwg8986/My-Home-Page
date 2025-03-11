function createData(Date: string, Award: string) {
  return { Date, Award };
}

export const AwardsInfo = [
  createData("2021", "東京都立大学 情報科学科 成績優秀者表彰"),
  createData(
    "2024",
    "Best Paper Award - 2024 8th International Conference on Artificial intelligence and Virtual Reality (AIVR2024)"
  ),
];
