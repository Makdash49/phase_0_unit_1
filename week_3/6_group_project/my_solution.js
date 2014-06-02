// My role in the group is:  Person 3
//Translate Pseudocode into Code

// Here is my part of the challenge:

//Test 1, 2, 3

var sum = function(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    return total;
}



//Test 4, 5, 6


var mean = function(numbers) {
    var total = 0;
     for (var i = 0; i < numbers.length; i++) {
          total = total + numbers[i];
    }
    meanvalue = total / numbers.length
    return meanvalue
}


//Test 7, 8, 9


var median = function(numbers) {
   numbers.sort();
   var half = Math.floor(numbers.length / 2)
   if (numbers.length % 2)
      var medianvalue = numbers[half];
    else 
      var medianvalue = (numbers[half - 1] + numbers[half]) / 2
    return medianvalue
}