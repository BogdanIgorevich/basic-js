import { NotImplementedError } from "../extensions/index.js";

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--discard-next") {
      if (arr.length - i >= 2) {
        i++;
      }
    } else if (arr[i] === "--discard-prev") {
      if (i >= 1 && arr[i - 2] !== "--discard-next") {
        arr1.pop();
      }
    } else if (arr[i] === "--double-next") {
      if (arr.length - i >= 2) {
        arr1.push(arr[i + 1]);
      }
    } else if (arr[i] === "--double-prev") {
      if (i >= 1 && arr[i - 2] !== "--discard-next") {
        arr1.push(arr[i - 1]);
      }
    } else {
      arr1.push(arr[i]);
    }
  }
  return arr1;
}
