export function getNeighborsPaperCount(
  grid: string[],
  i: number,
  y: number
): number {
  const n1 = grid[i - 1]?.[y - 1];
  const n2 = grid[i]?.[y - 1];
  const n3 = grid[i + 1]?.[y - 1];

  const n4 = grid[i - 1]?.[y];
  const n5 = grid[i]?.[y];
  const n6 = grid[i + 1]?.[y];

  const n7 = grid[i - 1]?.[y + 1];
  const n8 = grid[i]?.[y + 1];
  const n9 = grid[i + 1]?.[y + 1];

  const neighbors = [n1, n2, n3, n4, n6, n7, n8, n9].filter(Boolean);

  return neighbors.filter((chart) => chart === "@").length;
}
