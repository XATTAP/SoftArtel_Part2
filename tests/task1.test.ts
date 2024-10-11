import '../src/task1'

describe('Тесты для первой части задания', () => {
  test('Функция применяется к строке "абвг\\nдежзи\\nклмн" с position:0', () => {
    const request = "абвг\nдежзи\nклмн".findSubstringBoundaries(0)
    const response = [0,3]

    expect(request).toEqual(response);
  });

  test('Функция применяется к строке "абвг\\nдежзи\\nклмн" с position:1', () => {
    const request = "абвг\nдежзи\nклмн".findSubstringBoundaries(1)
    const response = [0,3]

    expect(request).toEqual(response);
  });

  test('Функция применяется к строке "абвг\\nдежзи\\nклмн" с position:7', () => {
    const request = "абвг\nдежзи\nклмн".findSubstringBoundaries(7)
    const response = [5,9]

    expect(request).toEqual(response);
  });

  test('Функция применяется к строке "абвг\\nдежзи\\nклмн" с position:9', () => {
    const request = "абвг\nдежзи\nклмн".findSubstringBoundaries(9)
    const response = [5,9]

    expect(request).toEqual(response);
  });

  test('Функция применяется к строке "абвг\\nдежзи\\nклмн" с position:11', () => {
    const request = "абвг\nдежзи\nклмн".findSubstringBoundaries(11)
    const response = [11,14]

    expect(request).toEqual(response);
  });

  test('Функция применяется к строке "абвг\\nдежзи\\nклмн" с position:4', () => {
    const response = new Error("Выбранный position является разделителем")

    expect(() => {
      "абвг\nдежзи\nклмн".findSubstringBoundaries(4)
    }).toThrow(response)
  });

  test('Функция применяется к строке "абвг\\nдежзи\\nклмн" с position:999', () => {
    const response = new Error("position выходит за пределы строки")

    expect(() => {
      "абвг\nдежзи\nклмн".findSubstringBoundaries(999)
    }).toThrow(response)
  });

  test('Функция применяется к строке "абвг\\nдежзи\\nклмн" с position:-999', () => {
    const response = new Error("position выходит за пределы строки")
    
    expect(() => {
      "абвг\nдежзи\nклмн".findSubstringBoundaries(-999)
    }).toThrow(response)
  });
});