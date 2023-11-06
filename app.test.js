const p = require("./app");

describe('Problem 1', () => {
    it('Example 1', () => {
      const nums = [4, 3, 2, 7, 8, 2, 3, 1];
      expect(p.fun1(nums)).toEqual([5, 6]);
    });
  
    it('Example 2', () => {
      const nums = [1, 1];
      expect(p.fun1(nums)).toEqual([2]);
    });
  
    it('Example 3', () => {
      const nums = [];
      expect(p.fun1(nums)).toEqual([]);
    });
  
    it('Example 4', () => {
      const nums = [1, 2, 3, 4, 5];
      expect(p.fun1(nums)).toEqual([]);
    });
  
    it('Example 5', () => {
      const nums = Array.from({ length: 100000 }, (_, i) => i + 1);
      nums.splice(50000, 1); 
      expect(p.fun1(nums)).toEqual([50001]);
    });
  });
  

describe('Problem 2', () => {
    it('Example 1', () => {
      const nums = [2, 7, 11, 15];
      const target = 9;
      expect(p.fun2(nums, target)).toEqual([0, 1]);
    });
  
    it('Example 2', () => {
      const nums = [3, 2, 4];
      const target = 6;
      expect(p.fun2(nums, target)).toEqual([1, 2]);
    });
  
    it('Example 3', () => {
      const nums = [3, 3];
      const target = 6;
      expect(p.fun2(nums, target)).toEqual([0, 1]);
    });
  
    it('No solution', () => {
      const nums = [1, 2, 3, 4, 5];
      const target = 20;
      expect(p.fun2(nums, target)).toEqual([]);
    });
  });
  