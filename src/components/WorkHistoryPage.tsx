import React from "react";

type WorkHistory = {
  period: string;
  company: string;
  position: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  achievement?: string;
};

// TODO: サンプルの内容を、ご自身の実際の経歴に置き換えてください。
const workHistories: WorkHistory[] = [
  {
    period: "2026年04月 - 現在",
    company: "株式会社Nikyo",
    position: "サーバーエンジニア",
    summary: "Windows Serverの設計・構築を中心に担当しています。",
    responsibilities: [
      "初の案件では、AWSのサーバー構築をメインで設計から構築までを担当(クラウドの知識があるのが私しかいなかったため)",
      "Windows Serverの設計・構築・各種設定",
      "構築手順書、テスト仕様書、運用資料の作成",
      "動作確認、関係者への進捗共有",
    ],
    technologies: ["Windows Server", "Active Directory", "AWS", "Cluster"],
    achievement: "初の案件でAWSのサーバー構築をメインで担当し、設計から構築までを一人で行いました。クラウドの知識があるのが私しかいなかったため、チーム内での技術的なリーダーシップを発揮していました。一連の工程を担当したことでAWSに対する理解が深まり、今後の案件でもクラウド関連の業務に積極的に取り組むことができるようになりました。",
  },
  {
    period: "2022年04月 - 2026年03月",
    company: "HAL東京",
    position: "ゲームを中心にサーバー、webなどを学習",
    summary: "チーム制作と個人制作を通じて、企画から実装、発表までの開発工程を経験しました。",
    responsibilities: [
      "C++、C#を用いたゲーム開発",
      "React、TypeScriptを用いたWebアプリケーション制作",
      "チーム開発における、GitHubを利用したソースコード管理",
    ],
    technologies: ["C++", "C#", "Unity", "Unreal Engine", "React", "TypeScript", "GitHub", "AWS"],
    achievement: "卒業制作では、リーダーとしてメンバーをまとめ、プロジェクトの進行管理やタスク分担を行いました。個人制作では、ReactとTypeScriptを用いたWebアプリケーションを開発し、AWSを活用して公開しました。これらの経験を通じて、企画から実装までの一連の開発工程を理解し、チームでの協力やコミュニケーション能力も向上させることができました。",
  },
];

const WorkHistoryPage = () => (
  <main className="work-history-page">
    <section className="work-history-hero">
      <p className="work-history-eyebrow">CAREER</p>
      <h1>職務経歴</h1>
      <p>これまでの経験と、仕事を通じて身につけたスキルをご紹介します。</p>
    </section>

    <section className="career-summary" aria-labelledby="career-summary-title">
      <h2 id="career-summary-title">経歴概要</h2>
      <p>
        Windows Serverの構築を中心に、設計、構築、資料作成、動作確認などの業務に携わっています。<br/>
        また、個人開発を通してWeb技術やAWSの機能をより深く、継続的に学び、課題を一つ一つ整理して形にする力を磨いています。
      </p>
    </section>

    <section className="career-section" aria-labelledby="career-detail-title">
      <h2 id="career-detail-title">経歴詳細</h2>
      <div className="career-timeline">
        {workHistories.map((history) => (
          <article className="career-card" key={`${history.period}-${history.company}`}>
            <div className="career-marker" aria-hidden="true" />
            <p className="career-period">{history.period}</p>
            <h3>{history.company}</h3>
            <p className="career-position">{history.position}</p>
            <p>{history.summary}</p>
            <h4>担当業務</h4>
            <ul>
              {history.responsibilities.map((item) => <li key={item}>{item}</li>)}
            </ul>
            {history.achievement && (
              <div className="career-achievement">
                <strong>取り組み・成果</strong>
                <p>{history.achievement}</p>
              </div>
            )}
            <div className="career-tags" aria-label="使用技術">
              {history.technologies.map((technology) => <span key={technology}>{technology}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="career-strengths" aria-labelledby="career-strengths-title">
      <h2 id="career-strengths-title">仕事で活かせる強み</h2>
      <div className="strength-grid">
        <article><span>01</span><h3>正確な作業</h3><p>手順と目的を確認し、抜け漏れのない作業を心がけています。</p></article>
        <article><span>02</span><h3>分かりやすい資料作成</h3><p>初めて読む人でも迷わず進められる文書づくりを意識しています。</p></article>
        <article><span>03</span><h3>継続的な学習</h3><p>業務外でも新しい技術を学び、個人制作でもアウトプットをしています。</p></article>
      </div>
    </section>
  </main>
);

export default WorkHistoryPage;
