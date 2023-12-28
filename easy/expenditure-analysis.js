/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const categories={};
  for(const transaction of transactions){
    const { category,price }=transaction;
    if(categories[category]===undefined){
      categories[category]=price;
    }
    else{
      categories[category]+=price;
    }
  }
  const ans=[];
  for(const category in categories){
    ans.push({category,totalSpent: categories[category]});


  }



  return ans;

}



module.exports = calculateTotalSpentByCategory;
