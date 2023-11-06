//Problem 1

function findMissingNumbers(nums) {
    const n = nums.length;
    const numbers = new Set(nums);
    const missingNumbers = [];

    for (let i = 1; i <= n; i++) {
        if (!numbers.has(i)) {
            missingNumbers.push(i);
        }
    }

    return missingNumbers;
}

const nums3 = [1, 3, 5, 7];
const result3 = findMissingNumbers(nums3);
//console.log(result3);  // Output: [2, 4]

const nums6 = [, 2, 3, 4, 5, 6, 7, 9, 11];
const result6 = findMissingNumbers(nums6);
//console.log(result6);  // Output: [1, 8]


//Problem 2
function twoSum(nums, target) {
    const numIndices = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numIndices.has(complement)) {
            return [numIndices.get(complement), i];
        }
        numIndices.set(nums[i], i);
    }

    
    return [];
}

// Example 1
const nums1 = [2, 7, 11, 15];
const target1 = 9;
const result1 = twoSum(nums1, target1);
//console.log(result1);  // Output: [0, 1]

// Example 2
const nums2 = [3, 2, 4];
const target2 = 6;
const result2 = twoSum(nums2, target2);
//console.log(result2);  // Output: [1, 2]

module.exports = { fun1: findMissingNumbers, fun2: twoSum }



