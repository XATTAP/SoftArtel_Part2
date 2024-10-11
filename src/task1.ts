interface String {
  findSubstringBoundaries(position: number): [number, number];
}

String.prototype.findSubstringBoundaries = function (this: string, position: number): [number, number] {
  if (position < 0 || position >= this.length)
    throw new Error('position выходит за пределы строки');

  if (this[position] === '\n')
    throw new Error('Выбранный position является разделителем');

  let start = this.lastIndexOf('\n', position - 1);

  let end = this.indexOf('\n', position + 1);
  if (end === -1) end = this.length;

  return [start + 1, end - 1];
};
