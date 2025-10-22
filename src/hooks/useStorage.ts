// Hook for persistent storage
export interface StorageHook<T> {
  get(): T;
  set(value: T): void;
}

export function useStorage<T>(key: string, defaultValue: T): StorageHook<T> {
  return {
    get: (): T => {
      try {
        const data = storage.readFile(key);
        return json.decode(data);
      } catch {
        return defaultValue;
      }
    },
    set: (value: T) => {
      const data = json.encode(value);
      storage.writeFile(key, data);
    }
  };
}