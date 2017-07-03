module.exports = function getPrime(n){
  var list = [];

  if(typeof(n) !== "number"){
    return "Input is not a number";
  }
  
  if(n <= 1){
    return list;
  } else {
    for(let i = 2; i <= n; i++){
      if (Prime(i) === true){
        list.push(i)
      }
    }
  }

  return list;
}

function Prime(n){
  var prime = true;
  if (n < 2){
    return false;
  } else {
    for(let i = 2; i <= Math.sqrt(n); i++){
      if(n % i === 0){
        prime = false;
      }
    }
  }
  return prime;
}