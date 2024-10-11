import {A, B, hasKeys} from '../src/task2'

describe('Тесты для второй части задания', () => {
  test('Данные A возвращают true', () => {
    const data: Partial<A> = { firstName: 'Иван', lastName: 'Иванович' };
    const keys: string[] = ['firstName', 'lastName'];

    expect(hasKeys(data, keys)).toEqual(true);
  });
  test('Данные A возвращают false', () => {
    const data: Partial<A> = { firstName: 'Иван', lastName: 'Иванович' };
    const keys: string[] = ['firstName', 'lastName', 'age'];

    expect(hasKeys(data, keys)).toEqual(false);
  });
  test('Данные B возвращают true', () => {
    const data: Partial<B> = { name: 'Иван', email: 'ivan@mail.com' };
    const keys: string[] = ['name'];

    expect(hasKeys(data, keys)).toEqual(true);
  });
  test('Данные B возвращают false', () => {
    const data: Partial<B> = { name: 'Иван', email: 'ivan@mail.com' };
    const keys: string[] = ['firstName', 'lastName'];

    expect(hasKeys(data, keys)).toEqual(false);
  });
})