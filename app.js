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



module.exports = { fun1: findMissingNumbers, fun2: twoSum }



