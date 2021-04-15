// # Switch if... 

// #### 1. Color Analyzer
// Create a switch statement that prints a different statement for each color possibility (red, blue, green, yellow).

// let color = "colores";
// if (color){
//     console.log("your color is red");
// }(color){
//     console.log("the ocean is blue");
// }else if (color){
//     console.log("a yellow flute")
// }else if (color){
//     console.log("smoke a joint")
// }else {
//     console.log("I dont like Colors");
// }

let color = "yellow"

switch (color){
    case "red":
        console.log("red");
        break;
    case "blue":
        console.log("blue");
         break;
    case "yellow":
        console.log("yellow is  my golden theeth ")
        break;
    case "green":
        console.log("green")
        break;
    default://
    console.log("Life is good")
}




// #### 2. Grading
// Create a switch statement that prints different comments depending on a grade.




let comments = "3.5"

switch (comments){
    case "7":
        console.log("i would love to understand how things work");
        break;
    case "5.5":
        console.log("They must go to the loundry");
         break;
    case "4.5":
        console.log("Recording drums is fun!")
        break;
    case "3.5":
        console.log("is good to make business inside the sauna")
        break;
    default://
    console.log("Moondog")
}


// #### 3. Fruits
// Create a switch statement that prints different statement for various fruit (e.g. banana, orange, strawberry, apple).

let fruit =  "bananas"

switch(fruit){
    case "apple":
        console.log("apple cake");  
        break;
    case "bananas":
        console.log("banana milk with cinnamon");
        break;
    case "raspberry":
        console.log("raspberry jam");
        break;
    case "orange":
        console.log("orange Juice");
        break;
        default://
        console.log("fruits are healthy")
}







// #### 4. Percentage Complete. 
// * If percentageComplete is below 30, print "Still a long way to go". 

const percentageComplete = 99;
if((percentageComplete < 30)){
    console.log("Still a long way to go")
}else if(percentageComplete >= 30 && percentageComplete <=50){
    console.log("task4", "Slowly getting there")
}else if(percentageComplete >= 51 && percentageComplete <=80){
    console.log("4.1","You can do it!" )
}else if(percentageComplete >= 81 && percentageComplete <=99){
    console.log("4.1","This is the last Push!")
}else {console.log("your are there")}


// * If the percentageComplete is between 30 and 50, print "Slowly getting there". 



// * If percentageComplete is between 51 and 80, print "You can do it!". 



// * If percentageComplete is between 81 and 99, print "This is the last push!".




// * If percentageComplete is 100, print "You're there. Well done!". 




// #### 5. Differences
// * When should you use a switch statement versus an `if else` statement. Comment your answer in your js file. -->
