// question 1
console.log('Ans-1');
//pattern print 
function pyramid(){
    for (var i=5; i>=1; i--)
    {   
        var str = '';
        for (var j = 1; j <=i; j++){
            str= str + "*";
        }
        console.log(str);
    }
return str;
}
pyramid();

//question 2
console.log(' \n\n Ans-2');
function censor(stri){
    let result='';
    arr = stri.split(' ');
    for (let i = 0; i< arr.length; i++){
        if (arr[i].length > 4){
            result = result + '*'.repeat(arr[i].length) + ' ';

        }
        else{
            result = result + arr[i] + ' ';
        }
         
    }
    return result;
}
console.log(censor('The code is fourty'));

//question 3
console.log(' \n\n Ans-3');

let user = {
    a: 1, b: 2 
   };
  
  console.log(Object.entries(user));

//question 4
console.log(' \n\n Ans-4 ');
  function char(string) {

    var count = 0;
    for (var i = 1; i <= string.length; i++) {
       
            if (string[0] == string[i]) {
                count++;
            }
    
    }
   
    if (count == string.length-1) {
        console.log(string);
    }
}

document.write(char('aaaa'));

//question 5
console.log(' \n\n Ans-5');
function array(obj) {
	let keys = Object.keys(obj);
	keys.sort();
	let values = [];
	for (i = 0; i < keys.length; i++) {
		values[i] = obj[keys[i]];
	}
	return [ keys, values ];
}
console.log(array({ a: 1, b: 2, c: 3 }));
 

