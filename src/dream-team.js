import { NotImplementedError } from "../extensions/index.js";

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  return !Array.isArray(members)?false: members
    .filter((el) => typeof el === "string")
    .map((el)=>el.replace(/\s/g,''))
    .map((el) => el[0].toUpperCase())
    .sort((a, b) => {
      if (a > b) {
        return 1;
      }
      if (b > a) {
        return -1;
      } else {
        return 0;
      }
    }).join('');
}
