// Given an array of intergers "num" and inter "targer", return indices of the twonnumbers such that they add up to target.

//   EXAMPLE :
// Input : nums = [2, 7,  10, 11, 15];
//         target = 9;
// Output : [0, 1] - because 2 + 7 = 9 and their index is [0, 1]

const twoSum = (nums, target) => {
  let storage = {};

  for(let[index, num] of nums.entries()){
    if(storage[num] !== undefined) return [storage[num],index];
      storage[targer - num] = index;
  }
}
