var maxSubArray = function(nums) {
  let currentSum = 0
  let maxSum = nums[0]
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i]
    if(currentSum > maxSum){
      maxSum = currentSum
    }
    if(currentSum < 0 ){
      currentSum = 0
    }
  }
  return maxSum
}

console.log(maxSubArray([1,3,-6,5,-6]))