import { createLazyFileRoute } from '@tanstack/react-router';
import { Tile } from './Tile';

export const Route = createLazyFileRoute('/room/')({
  component: Room,
});

export function Room() {
  const roomMap = [
    [9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 2, 2, 2, 2, 2, 2, 2, 9],
    [9, 2, 0, 4, 2, 5, 2, 2, 9],
    [9, 2, 2, 2, 1, 2, 2, 2, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9],
  ];

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="grid grid-cols-9 gap-1 bg-black p-4">
        {roomMap.flatMap((row, rowIndex) =>
          row.map((tile, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="flex items-center justify-center w-8 h-8 bg-gray-800 border border-gray-700"
            >
              <Tile type={tile} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
