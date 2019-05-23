/**
 * Easy helper for modifying arrays in Svelte
 */
export default class ArrayHelper {
  /**
   * Push to the array
   * @param {Array} array
   * @param {*} value
   */
  push (array, value) {
    array.push(value)
    return array
  }

  /**
   * Pop the last item in the array
   * @param {Array} array
   * @param {*} value
   */
  pop (array) {
    array.pop()
    return array
  }

  /**
   * Remove the first item in the array
   * @param {Array} array
   */
  shift (array)  {
    array.shift()
    return array
  }

  /**
   * Replace the first element in the array
   * @param {Array} array
   * @param {*} value
   */
  unshift (array, value)  {
    array.unshift(value)
    return array
  }

  /**
   * Replace the first element in the array
   * @param {Array} array
   * @param {*} args
   */
  splice (array, ...args) {
    array.splice(...args)
    return array
  }

  /**
   * Shallow copies part of an array to another location in the same array and returns it without modifying its length
   * @param {Array} array
   * @param {*} args
   */
  copyWithin (array, ...args) {
    array.copyWithin(...args)
    return array
  }

  /**
   * Fills all the elements of an array from a start index (default zero) to an end index (default array length) with a static value. It returns the modified array.
   * @param {*} args
   */
  fill (array, ...args) {
    array.fill(...args)
    return array
  }

  /**
   * Reverses the array
   * @param {*} args
   */
  reverse (array) {
    array.reverse()
    return array
  }

  /**
   * Sorts the array
   * @param {*} args
   */
  sort (array, ...args) {
    array.sort(...args)
    return array
  }
}

export const push = ArrayHelper.prototype.push
export const pop = ArrayHelper.prototype.pop
export const shift = ArrayHelper.prototype.shift
export const unshift = ArrayHelper.prototype.unshift
export const splice = ArrayHelper.prototype.splice
export const copyWithin = ArrayHelper.prototype.copyWithin
export const fill = ArrayHelper.prototype.fill
export const reverse = ArrayHelper.prototype.reverse
export const splisortce = ArrayHelper.prototype.sort