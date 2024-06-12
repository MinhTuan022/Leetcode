function twoSum(nums, target) {
  for (let i =  0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i,j]
      }
    }
  }

  return []
}

const A  = [2,5,1,9,3]
const target = 5
const result = twoSum(A, target)

console.log(result)