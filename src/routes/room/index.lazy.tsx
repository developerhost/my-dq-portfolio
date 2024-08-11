import { createLazyFileRoute } from '@tanstack/react-router';
import { Tile } from './Tile';

export const Route = createLazyFileRoute('/room/')({
  component: Room,
});

export function Room() {
  const roomMap = [
    [9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 8, 8, 8, 8, 8, 8, 8, 9],
    [9, 8, 0, 4, 8, 5, 8, 8, 9],
    [9, 8, 8, 8, 1, 8, 8, 2, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9],
  ];

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="grid grid-cols-9 bg-black p-4">
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
