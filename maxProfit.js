var maxProfit = function (prices) {
  let profit = 0;
  let smallest = prices[0];
  for (let i = 1; i < prices.length; i++) {
      if (smallest > prices[i]) {
          smallest = prices[i];
      }
      else if(prices[i] - smallest > profit){
          profit = prices[i] - smallest
      }
  }
  return profit;
};

console.log(maxProfit([3, 3]));
