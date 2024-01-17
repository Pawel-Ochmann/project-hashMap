class HashMap<T> {
  private data: Record<string, T>;

  constructor() {
    this.data = {};
  }

  private hash(key: string): number {
    let hashCode = 0;
    for (let i = 0; i < key.length; i++) {
      hashCode += key.charCodeAt(i);
    }
    return hashCode;
  }

  set(key: string, value: T): void {
    const hashedKey = this.hash(key);
    this.data[hashedKey] = value;
  }

  get(key: string): T | undefined {
    const hashedKey = this.hash(key);
    return this.data[hashedKey];
  }

  delete(key: string): void {
    const hashedKey = this.hash(key);
    delete this.data[hashedKey];
  }

  has(key: string): boolean {
    const hashedKey = this.hash(key);
    return this.data.hasOwnProperty(hashedKey);
  }
}

// Example usage:
const myMap = new HashMap<number>();

myMap.set('one', 1);
myMap.set('two', 2);

console.log(myMap.get('one')); // Output: 1
console.log(myMap.has('two')); // Output: true

myMap.delete('one');
console.log(myMap.get('one')); // Output: undefined
