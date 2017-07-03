module.exports = function getPrime(n){
  
  //Declare an empty array
  let list = [];

  //Handles case where n is not a number
  if(typeof(n) !== "number")
  {
    return "Input is not a number";
  }
  
  //Handles case where n is less than or equal to 1
  if(n <= 1)
  {
    return list;
  } 

  else

  {//Handles case where n is greater than 1
    for(let i = 2; i <= n; i++)
    {//Check if a number is a prime number and add it to the array if it is
      if (Prime(i) === true)
      {
        list.push(i)
      }
    }
  }

  return list;
}

//Function that checks if a number is a prime number
function Prime(n){
  let prime = true;
  if (n < 2)
  {
    return false;
  } 

  else 
  {
    for(let i = 2; i <= Math.sqrt(n); i++)
    {
      if(n % i === 0)
      {
        prime = false;
      }
    }
  }
  return prime;
}