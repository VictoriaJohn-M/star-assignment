export function range(start, end, step = 1) {
  const output = [];

  // If only one argument is passed → treat it as end
  if (end === undefined) {
    end = start;
    start = 0;
  }

  for (let i = start; i < end; i += step) {
    output.push(i);
  }

  return output;
}
