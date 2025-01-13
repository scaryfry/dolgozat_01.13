//1.feladat
function getCount(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
            count++;
        }
    }
    return count;
}
console.log(getCountOfTheVowels('abracadabra'));
//2.feladat
function filter_list(l) {
    return l.filter((item) => typeof item === 'number');
}
//3.feladat
function hasUniqueChars(str){
    str = str.split("")
    var newArr = []
    for(var i = 0; i< str.length; i++){
    if(newArr.indexOf(str[i]) == -1){
      newArr.push(str[i])
    }
    else return false
    }
    
    return true
  }
//4.feladat
function divisors(integer) {
    var divs = [];
    for(var i = 2; i < integer; i++) {
        if(integer % i === 0) {
            divs.push(i);
        }
    }
    if(divs.length === 0) {
        return integer + ' is prime';
    }
    return divs;
}