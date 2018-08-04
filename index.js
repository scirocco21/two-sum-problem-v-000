// brute force solution with O of n*n
function findPair(array, sum){
  let beginning = array[0]
  let startIndex = 0;
  let pair = [];
  for(let i = 1; i < array.length; i++){
    if(beginning + array[i] === sum){
      pair.push([beginning, array[i]]);
    }
  }
  array.splice(startIndex, 1);
  return pair;
}


function sumFinder(array, sum){
  let resultsArray = [];
  while(array.length != 0){
    currentPair = findPair(array, sum)
    resultsArray.push(currentPair)
  }
  let cleanResult = [].concat.apply([], resultsArray);
  return cleanResult
}
