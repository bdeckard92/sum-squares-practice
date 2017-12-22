var resultDiv = document.getElementById("result");
var startDiv = document.getElementById("start");

// Grab the button.
var button = document.getElementsByTagName("button");

// Our numbers array
var numbers = [1, 4, 7, 9];

// Show the numbers in the start div.
startDiv.innerHTML = numbers;


function sorter(nums) {
    var sum = 0;

    for (var i = 0; i < nums.length; i++) {
        sum += Math.pow(nums[i], 2);

       
    }

resultDiv.innerHTML = sum;

  }

  function clicked(){
    sorter(numbers);

  }

  button[0].addEventListener("click", clicked)