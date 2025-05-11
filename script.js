 var howmanychar = +prompt("How many characters do you want? \n You can decide the length  from 1 to 30 ")
let lowercase = prompt("Do you wanna add lowercase? \n you can write yes or no")
let uppercase = prompt("Do you wanna add uppercase? \n you can write yes or no")
let number = prompt("Do you wanna add numbers? \n you can write yes or no")
let spechar = prompt("Do you wanna add special characters? \n you can write yes or no")

let loweralphabets = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let upperalphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let specialchar = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","~",";",":","<",">","/","?"]
let numbers = ["0","1","2","3","4","5","6","7","8","9"]

let finalpool = [];

if(lowercase==="yes"){
    finalpool = finalpool.concat(loweralphabets)
} 
if(uppercase==="yes"){
    finalpool = finalpool.concat(upperalphabets)
} 
if(spechar==="yes"){
    finalpool = finalpool.concat(specialchar)
} 
if(number==="yes"){
    finalpool = finalpool.concat(numbers)
} 

if (finalpool.length === 0) {
    alert("you must select atleast one condition");
    
}
else if (howmanychar<1 || howmanychar>30){
         alert("the number of characters must be between 1 and 30");
    
}
else{
    var password = ""
    for(var i = 0 ; i<howmanychar ; i++){
        var random = finalpool[Math.floor(Math.random()*finalpool.length)]
        password+= random
    }
    document.write("<div>"+ "<h1 class = 'random'>"+"your password is: " +"<br>" + password +"</h1>"+"</div>")
     
}




 
 
 
 

 
 
 
 
 