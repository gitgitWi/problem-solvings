/**
 * 2622. Cache With Time Limit
 * - {@link https://leetcode.com/problems/cache-with-time-limit}
 */
class TimeLimitedCache {
  cache = new Map<
    number,
    { value: number; duration: number; updatedAt: number }
  >();

  /**
   * - 만료되지 않은 동일 key 있으면 true, 아니면 false
   */
  set(key: number, value: number, duration: number): boolean {
    const now = new Date().getTime();
    if (this._hasValidValue(key, now)) {
      this.cache.set(key, { value, duration, updatedAt: now });
      return true;
    }
    this.cache.set(key, { value, duration, updatedAt: now });
    return false;
  }

  /**
   * - cache 된 값 없으면 -1
   */
  get(key: number): number {
    return this._hasValidValue(key) ? this.cache.get(key)!.value : -1;
  }

  count(): number {
    const now = new Date().getTime();
    return Array.from(this.cache.keys()).filter((key) =>
      this._hasValidValue(key, now),
    ).length;
  }

  _hasValidValue(key: number, time = new Date().getTime()): boolean {
    if (!this.cache.has(key)) return false;
    const cached = this.cache.get(key)!;
    return cached.updatedAt + cached.duration > time;
  }
}

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
export {};
