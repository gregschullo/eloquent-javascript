// chapter 2 exercises

// 2.1 looping a triangle
for (let pound = "#"; pound.length < 8; pound += "#") {
    console.log(pound);
};

// 2.2 fizz buzz
for (let count = 1; count < 101; count ++) {
    if (count % 5 === 0 && count % 3 === 0) {
        console.log("FizzBuzz")
    } else if (count % 3 === 0) {
        console.log("Fizz");
    } else if (count % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(count);
    }
};

// 2.3 chessboard

