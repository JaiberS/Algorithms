// tests/merge.test.ts
import { merge } from '../merge_sorted_array';

test('merge two sorted arrays', () => {
  const nums1 = [1, 2, 3, 0, 0, 0];
  const nums2 = [2, 5, 6];
  const m = 3;
  const n = 3;
  merge(nums1, m, nums2, n);
  expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
});

test('merge when nums2 is empty', () => {
  const nums1 = [1, 2, 3];
  const nums2: number[] = [];
  const m = 3;
  const n = 0;
  merge(nums1, m, nums2, n);
  expect(nums1).toEqual([1, 2, 3]);
});

test('merge when nums1 is empty', () => {
  const nums1 = [0, 0, 0];
  const nums2 = [1, 2, 3];
  const m = 0;
  const n = 3;
  merge(nums1, m, nums2, n);
  expect(nums1).toEqual([1, 2, 3]);
});

test('merge when nums1 has extra space but no elements', () => {
  const nums1 = [0, 0, 0];
  const nums2 = [1, 2, 3];
  const m = 0;
  const n = 3;
  merge(nums1, m, nums2, n);
  expect(nums1).toEqual([1, 2, 3]);
});

test('merge when all elements are negative', () => {
  const nums1 = [-3, -2, -1, 0, 0, 0];
  const nums2 = [-6, -5, -4];
  const m = 3;
  const n = 3;
  merge(nums1, m, nums2, n);
  expect(nums1).toEqual([-6, -5, -4, -3, -2, -1]);
});
