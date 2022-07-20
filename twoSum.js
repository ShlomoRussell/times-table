/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  const alreadySeen = [];
  for (let i = 0; i < nums.length; i++) {
    const alreadySeenIndex = alreadySeen.findIndex(
      (v) => v + nums[i] === target
    );
    if (alreadySeenIndex !== -1) {
      return [alreadySeenIndex, i];
    }
    alreadySeen.push(nums[i]);
  }

  return undefined;
};
 console.log(twoSum([2, 7, 11, 15], 9));

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSumTwo = function (nums, target) {
  const alreadySeen = [];
  for (let i = 0; i < nums.length; i++) {
    let alreadySeenIndex;
    for (let j = 0; j < alreadySeen.length; j++) {
      if (alreadySeen[j] + nums[i] === target) {
        alreadySeenIndex = j;
        break;
      }
    }
    if (alreadySeenIndex !== undefined) {
      return [alreadySeenIndex, i];
    }
    alreadySeen.push(nums[i]);
  }

  return undefined;
};

console.log(twoSumTwo([2, 7, 11, 15], 9));
