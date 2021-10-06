
//reading from csv
const csv = require('csv-parser')
const fs =require('fs')
const results = [];
const male =[];
const female =[];

fs.createReadStream('sample_data.csv')
.pipe(csv({}))
.on('data', () => results.pucsh(data))
.on('end',()=> {
    console.log(results);
});

for(var i = 0; i<results.length;i++){
if(results[i]===', f'){
    female[i]= results[i];
}else{
    male[i]= results[i];
}
}

//removing duplicates from males and females

let maleNoDups =[...new Set(male)];
let femaleNoDups =[...new Set(females)];

//let name = 'jackmatchesjill';

//Counting duplicate letters
function countLetters(str){
  let temAprr = str.split('');
  let letters = [];
  let count =1;
  
  for(let i=0; i<temAprr.length; i++){
    if(temAprr[i] === temAprr[i+1]){
      count++;
    }else{
      let value = count;
      letters =[...letters,value];
      count =1;
    }
  }
  
  return letters.join('')
}

//console.log(countLetters('Jackandjill'));

// Finding the sum of the first and last until left with single digits
function sum(num) {
  var numString = num.toString();
  var newString = "";
  while (numString.length > 1) { // (1)
    newString += (parseInt(numString[0]) + parseInt(numString[numString.length - 1])).toString(); // (2)
    numString = numString.substring(1, numString.length - 1); // (3)
  }
  newString += numString; // (4)

  if (newString.length > 2) { // (5)
    console.log(newString)
    return sum(newString);
  } else {
    return newString;
  }
}
//console.log(sum('12345'));

var store = [];


    for(var j =0; j <femaleNoDups.length;j++){
        var line = maleNoDups[i]+femaleNoDups[i];
        var count = countLetters(line);
        var percentage = sum(count);
        var messages ='';
        if(percentages>=80)
        {
            messages = 'good match';
            console.log('good match');
        }
        store[i] = line + percentage +messages;
    }

    // write to file
    function writingfile(objArray) {
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        var str = '';
        var line = '';
    
        if ($("#labels").is(':checked')) {
            var head = array[0];
            if ($("#quote").is(':checked')) {
                for (var index in array[0]) {
                    var value = index + "";
                    line += '"' + value.replace(/"/g, '""') + '",';
                }
            } else {
                for (var index in array[0]) {
                    line += index + ',';
                }
            }
    
            line = line.slice(0, -1);
            str += line + '\r\n';
        }
    
        for (var i = 0; i < array.length; i++) {
            var line = '';
    
            if ($("#quote").is(':checked')) {
                for (var index in array[i]) {
                    var value = array[i][index] + "";
                    line += '"' + value.replace(/"/g, '""') + '",';
                }
            } else {
                for (var index in array[i]) {
                    line += array[i][index] + ',';
                }
            }
    
            line = line.slice(0, -1);
            str += line + '\r\n';
        }
        return str;
    }
   
    console.log(writingfile(store));
    console.log('File Created!');
