import { describe, it, expect, vi } from 'vitest';

// Función simple para testear
function sum(a: number, b: number): number {
  return a + b;
}

describe('sum function', () => {
  it('should add two numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('should handle negative numbers', () => {
    expect(sum(-1, 1)).toBe(0);
  });
});
