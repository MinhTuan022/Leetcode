function search(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
        return i;
    }
}
return -1;
}

// Test cases
console.log(search([-1,0,3,5,9,12], 9)); // Output: 4
console.log(search([-1,0,3,5,9,12], 2)); // Output: -1
