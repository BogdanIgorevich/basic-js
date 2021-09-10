import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum( matrix ) {
  const arr = [];
  return matrix.reduce(
    (acc, el) => el.reduce((acc, el, i) => {
      if (el === 0) arr.push(i);
      if (arr.includes(i)) {
        return acc;
      }
      return acc + el;
    }, 0) + acc,
    0,
  );
}
