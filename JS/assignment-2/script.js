//Question 1
console.log('Ans-1');
//question
var nameList = `Neeta sapkota
neha shiwakoti
Srijana Khatiwada 
Smrity Dhakal
Sami Chakradhar
Kirtee Maharjan
Trija Thebe
Sindhu Aryal
Kusum Ranjitkar
Elisha Bista
Rachana kafle
Barsha Maharjan
Pooja Gurung
Bisikha Subedi
Kritika Baral
Srijana Thulung`;
nameList = nameList.split('\n');

function result(array) {
	return array.map(function(value, index) {
		var obj = {};
        var name = value.split(' ');
	    obj['id'] = index + 1;
	    obj['firstName'] = name[0];
	    obj['lastName'] = name[1];
	    return obj;
	});
};

console.log(result(nameList));

//Question 2
console.log('Ans-2');
var result2 = function(array, char) {
	var getArrayFromQ1 = result(array);
	var finder = getArrayFromQ1.filter(function(value) {
		return value.firstName.charAt(0).toUpperCase() == char.toUpperCase();
	});
	var startingWith = finder.length;
	var startingWithout = getArrayFromQ1.length - startingWith;
	return char + ': ' + startingWith + ' and ' + startingWithout;
};

console.log(result2(nameList, 's'));
console.log(result2(nameList, 'a'));
console.log(result2(nameList, 'k'));
console.log(result2(nameList, 'r'));


//Question 3
console.log('Ans-3');
function result3(array) {
	var getArrayFromQ1 = result(array);
	return getArrayFromQ1.reduce(function(acc, value, index) {
		var id = value.id;
		delete value.id;
		acc[id] = value;
		return acc;
	}, {});
	
};
console.log(result3(nameList));


//Question 4
console.log('Ans-4');
function zero(str) {
	var arr = [];
  
	for (var i = 0; i < str.length; i++) {
	  if (str[i] === "0") {
		var count = i;
		
		do {
		  count++;
		} while (str[count] === "0");
		
		arr.push(count - i);
		i = count;
	  }
	}
	
	return Math.max(...arr);  //Math.max() method is used to return the largest of zero 
  }
  console.log('\n longest sequence of zero is \n');
  console.log(zero("00010000"));

//Question 5
console.log('Ans-5');
vowels = {
	a: 1,
	e: 2,
	i: 3,
	o: 4,
	u: 5
};

function replaceVowel(str) {
	return str.split('').reduce(function(acc, char) {
		return vowels[char] == undefined ? acc.concat(char) : acc.concat(vowels[char]);
	}, '');
};


console.log(replaceVowel('chembur'));
console.log(replaceVowel('khandbari'));

