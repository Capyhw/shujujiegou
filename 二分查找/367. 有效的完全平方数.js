/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    let l = 0, r = n + 1, mid
    while (l <= r) {
        mid = Math.floor((l + r) / 2)
        let res = guess(mid)
        if (res > 0) l = mid + 1
        else if (res < 0) r = mid - 1
        else return mid
    }
    return mid
};