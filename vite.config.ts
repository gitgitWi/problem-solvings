import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    include: ['./problems/**/*.test.{ts,js}'],
  },
});
