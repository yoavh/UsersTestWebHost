export default interface Repopository<T> {
  exists(t: T): Promise<boolean>;
  delete(t: T): Promise<T>;
  save(t: T): Promise<T>;
}
