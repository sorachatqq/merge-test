import { merge } from "./merge";

describe("merge", () => {
  test("should merge three arrays correctly", () => {
    const collection_1 = [9, 7, 5, 3, 1]; // descending
    const collection_2 = [2, 4, 6]; // ascending
    const collection_3 = [0, 8, 10]; // ascending

    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test("should handle empty arrays", () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([5, 3, 1], [], [])).toEqual([1, 3, 5]);
    expect(merge([], [2, 4], [])).toEqual([2, 4]);
    expect(merge([], [], [1, 3])).toEqual([1, 3]);
  });

  test("should handle all values from empty collections", () => {
    const collection_1 = [3, 2, 1];
    const collection_2: number[] = []; // empty
    const collection_3: number[] = []; //empty

    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([1, 2, 3]);
  });

  test("should handle arrays with duplicate values", () => {
    const collection_1 = [5, 3, 3, 1];
    const collection_2 = [2, 3, 4];
    const collection_3 = [1, 3, 5];

    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([1, 1, 2, 3, 3, 3, 3, 4, 5, 5]);
  });

  test("should handle negative numbers", () => {
    const collection_1 = [5, 0, -5];
    const collection_2 = [-3, -1, 2];
    const collection_3 = [-4, 1, 3];

    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([-5, -4, -3, -1, 0, 1, 2, 3, 5]);
  });
});
