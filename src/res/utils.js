/**
 * Return a valid index inbetween 0 and max array index
 * This is to avoid accesing an index that don't exist
 * eg: For a array with 20 values
 * -14 return 0
 * 17 return return 17
 * 33 return 20
 * @param {Number} index
 * @param {Number} arrayLength
 * @returns {Number} index that is inbetween index and arrayLength
 */
const getValidIndex = (index, arrayLength = 0) => {
  if (index <= 0) {
    return 0;
  }

  if (index >= arrayLength) {
    return arrayLength - 1;
  }

  return index;
};

export { getValidIndex };
