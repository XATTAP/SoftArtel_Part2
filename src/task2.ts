export interface A {
  firstName: string;
  lastName: string;
  middleName: string;
}

export interface B {
  name: string;
  email: string;
  password: string;
}

export function hasKeys<T extends A | B>(data: Partial<T>, keys: string[]): boolean {
  for (const key of keys) {
    if (!(key in data)) {
        return false;
    }
  }
  return true;
}
