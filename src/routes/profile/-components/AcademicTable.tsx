import React from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

type Academic = {
  year: number;
  month: number;
  description: string;
};

const tableData: Academic[] = [
  {
    year: 1996,
    month: 6,
    description: `高知県南国市にて爆誕。
    小さい頃の写真を見るとグレイくらい目がでかい。`,
  },
  {
    year: 2000,
    month: 4,
    description: `高知県南国市十市幼稚園入園。
    スクーターを乗りこなす。`,
  },
  {
    year: 2003,
    month: 4,
    description: `高知県南国市十市小学校入学。
      毎朝7時半に学校に行きサッカーをする日々を過ごす。`,
  },
  {
    year: 2009,
    month: 3,
    description: `高知県南国市十市小学校卒業。
    この頃「焼きたて!! ジャぱん」にハマっており、将来の夢はパン屋さんだった。`,
  },
  {
    year: 2009,
    month: 4,
    description: `高知県高知市土佐中学校に入学。
      中学受験をして高知県の中では一番の自称進学校に入る。`,
  },
  {
    year: 2012,
    month: 3,
    description: `高知県高知市土佐中学校を卒業。
    中高一貫校なので、特に感動や苦労などなくそのまま卒業する。
    中学のサッカー部がかなりハードだったので、解放された喜びが溢れる。`,
  },
  {
    year: 2012,
    month: 4,
    description: `高知県高知市土佐高等学校に入学。
      高校に入りようやく勉強を始める。`,
  },
  {
    year: 2015,
    month: 3,
    description: `高知県高知市土佐高等学校を卒業。
      最後の学内の定期テストで学年3位を取る`,
  },
  {
    year: 2015,
    month: 4,
    description: `青山学院大学に入学。
    「東京への憧れ」ただこの一点のみの重大な理由で大学を選択。
    (渋谷すらこの時点では東京のどこにあるかあんまり分かっていなかった)`,
  },
  {
    year: 2019,
    month: 3,
    description: `青山学院大学を卒業。
    大学生時代はブレイクダンスにハマりひたすら回っていた。
    ここまで全てストレートに進んだ自分を褒めてあげたい。`,
  },
];

const columnHelper = createColumnHelper<Academic>();

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
    header: '学歴',
    cell: (info) => info.getValue(),
  }),
];

const AcademicTable: React.FC = () => {
  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="mt-8 w-full max-w-4xl px-4">
      <table className="min-w-full border-collapse">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="bg-gray-800">
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="border px-4 py-2 text-left">
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
            <tr key={row.id} className="hover:bg-gray-800">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border px-4 py-2">
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

export default AcademicTable;
