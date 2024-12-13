import { FaHandHoldingHeart, FaTree } from 'react-icons/fa';

export const Developer = () => {
  const THOUGHT = [
    `・持続可能性を意識した開発を行うことが好きです`,
    `・心理的安全性を確保した環境で開発者が伸び伸びと主体的に開発できる環境が好きです`,
    `・新しいことにチャレンジすることが好きです`,
    `  ・ただし、技術選定時にはメンバーのキャッチアップコストへの考慮
        十分に枯れた技術なのかの検討、回避不能なエラーやハマりどころがないかの
        十分な調査はmustだと思っています
    `,
  ] as const;

  const ACTIONS = [
    `・コンポーネント分割による効率的な開発`,
    `・コロケーションを意識した関心の分離、知識の高凝縮疎結合な開発`,
    `・テストピラミッドによるテスト設計`,
    `・github actionによるCI/CDの自動化`,
    `・リリース作業の自動化`,
    `・dependabotのオートマージ`,
    `・ラベル、Assignees, Reviewerの自動設定`,
    `・Issue templateやPR templateによる作業者への依存の解消`,
    `・eslintによるレビュー時間の短縮、効率化。不要なラリーを解消`,
    `・Code Spell Checker CLIによるミスの減少。開発体験の向上`,
    `・単一責任原則を意識。ドメインに知識を集約する開発`,
    `・静的型付けによるコンパイル時の早期エラー検出`,
    `・型補完による開発体験、開発効率の向上`,
    `・HMRによる開発体験、開発効率の向上`,
    `・副作用のないコードを書くことへの意識`,
    `・非同期処理における適切なエラースロー、logger設計`,
    `・trpcによるフロントエンドとバックエンドでの型共有`,
    `・zodやprismaからの型抽出`,
    `・huskeyによる即時Feed Back, commit lint`,
  ] as const;

  return (
    <div>
      {/* 思想 */}
      <div className="bg-black border-2 border-white rounded-md p-6 w-72 my-8">
        <div className="flex items-center justify-center mb-4">
          <FaHandHoldingHeart className="w-8 h-8" />
          <h2 className="text-xl font-bold ml-2">思想</h2>
        </div>
        <div className="text-left">
          {THOUGHT.map((thought, index) => (
            <div
              className="flex items-center mb-2 text-left w-full bg-transparent border-none focus:outline-none"
              key={index}
            >
              {thought}
            </div>
          ))}
        </div>
      </div>

      {/* できること、やりたいこと */}
      <div className="bg-black border-2 border-white rounded-md p-6 w-72">
        <div className="flex items-center justify-center mb-4">
          <FaTree className="w-8 h-8" />
          <h2 className="text-xl font-bold ml-2">できること、やりたいこと</h2>
        </div>
        <div className="text-left">
          {ACTIONS.map((action, index) => (
            <div
              className="flex items-center mb-2 text-left w-full bg-transparent border-none focus:outline-none"
              key={index}
            >
              {action}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
