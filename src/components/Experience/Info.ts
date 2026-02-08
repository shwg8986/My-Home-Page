export type SubExperience = {
  days: string;
  subtitle: string;
  content: string;
};

export type ExperienceType = {
  title: string;
  days: string;
  content: string;
  content2?: string;
  URL?: string;
  subExperiences?: SubExperience[];
};

export const ExperienceInfo = [
  {
    title: "株式会社Techouse",
    days: "2022/6〜2022/10",
    content:
      "Webフロントエンドのエンジニアとして、学生インターンをしていました。技術スタック: TypeScript(React), GraphQL, Docker",
    URL: "https://www.techouse.jp/",
  },
  {
    title: "研究補助 臨時職員",
    days: "2022/6〜2022/7 ",
    content:
      "東京都立大学 情報科学域 ヤェムヴィボル助教の研究補助アルバイトをしていました。",
    content2: "業務内容：ロボットアームを用いた遠隔作業システムの開発。",
  },
  {
    title: "リサーチアシスタント(RA): 第一次",
    days: "2022/8〜2023/2",
    content:
      "東京都立大学 情報科学域 ヤェムヴィボル助教のバーチャルリアリティに関する研究開発のアシスタントをしていました。",
    content2:
      "業務内容：ロボットアームを用いた遠隔作業システムの開発, VR酔い検出手法の探求。",
  },
  {
    title: "株式会社テレビ東京",
    days: "2022/12",
    content: "Tech & DX部門の冬季インターンシップに参加しました。",
    URL: "https://www.tv-tokyo.co.jp/",
  },
  {
    title: "リサーチアシスタント(RA): 第ニ次",
    days: "2023/5〜2024/3",
    content:
      "筑波大学 システム情報系 ヤェムヴィボル准教授のバーチャルリアリティに関する研究開発のアシスタントをしていました。",
  },
  {
    title: "Biometrics - intelligent solutions in Poland",
    days: "2023/6/26〜2023/7/8",
    content:
      "I joined “International Summer School: Biometrics - intelligent solutions at Białystok University of Technology, Poland.” (The project was implemented within the SPINAKER programme - international intensive programmes run by the polish national agency for academic exchange(NAWA). It provided for the organization of a summer school - “Biometrics - intelligent solutions”.)",
    URL: "https://pb.edu.pl/iro/nawa-projects/biometrics-intelligent-solutions/",
  },
  {
    title: "KDDI株式会社 / KDDI総合研究所",
    days: "2024/4〜current",
    content: "",
    URL: "https://www.kddi.com/",
    subExperiences: [
      {
        days: "2024/4〜2025/3",
        subtitle: "IoT技術部 開発グループ",
        content:
          "スクラム開発において、Webフロント・バックエンド、AWS構築、CI/CDを担当しておりました。技術スタック: TypeScript(React), Flask, AWS, Docker, Terraform, Cypress.",
      },
      {
        days: "2025/4〜current",
        subtitle: "研究所に出向中",
        content:
          "AI部門にて、量子コンピューティングの勉強・研究を行っています。",
      },
    ],
  },
];
