
const numberArray = [1,2,3,4,5]

numberArray.push( 6 )
console.log(numberArray);

const array2 = [...numberArray]
array2.push( 7 )
console.log(array2);

const array3 = array2.map((num)=>{
  return num * 2
  
})
array3.push( 50 )
console.log(array3);
