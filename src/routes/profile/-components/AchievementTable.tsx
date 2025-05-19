/**
 * 実績テーブルコンポーネント
 * @description ユーザーの主な実績を一覧表示するテーブル
 * @author
 */

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

/**
 * Achievement型
 * @property {number} year - 実績の年
 * @property {number} month - 実績の月
 * @property {string} description - 実績内容
 */
type Achievement = {
  description: string;
  month: number;
  year: number;
};

/**
 * 実績データ（例）
 */
const achievementData: Achievement[] = [
  {
    year: 2019,
    month: 6,
    description: 'GitHubアカウント作成。プログラミングを始める',
  },
  {
    year: 2021,
    month: 3,
    description:
      'エンジニア転職成功。受託会社でエンジニアとしてのキャリアをスタート',
  },
  {
    year: 2022,
    month: 8,
    description:
      'エンジニア向け自己紹介サイトをリリース(https://it-intro-67781.web.app/)',
  },
  {
    year: 2023,
    month: 8,
    description: 'ハッカソンデビュー。一日でチャットアプリを作成',
  },
  {
    year: 2023,
    month: 10,
    description: 'サメの3Dモデル水族館サイトを作成(https://fish3d.vercel.app/)',
  },
  {
    year: 2024,
    month: 2,
    description: '起業',
  },
  {
    year: 2025,
    month: 5,
    description: 'React Tokyo第五回にてLT登壇',
  },
];

/**
 * テーブルカラム定義
 */
const columnHelper = createColumnHelper<Achievement>();

const columns = [
  columnHelper.accessor('year', {
    header: '年',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('month', {
    header: '月',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('description', {
    header: '実績',
    cell: (info) => info.getValue(),
  }),
];

/**
 * 実績テーブル本体
 */
const AchievementTable = () => {
  const table = useReactTable({
    data: achievementData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="mt-8 w-full max-w-4xl px-4">
      <table className="min-w-full border-collapse">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr className="bg-gray-800" key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th className="border px-4 py-2 text-left" key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr className="hover:bg-gray-800" key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td className="border px-4 py-2" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AchievementTable;
