/* Create a faulty calculator using JS
This faulty calculator does following :
1.It takes two numbers as input from the user.
2.It performes wrong operations as follows:
+ > -
- > +

it performs wrong operator 10% of the times
*/

let a = Number(prompt("enter first value"));
let value = prompt("+ or -");
let b = Number(prompt("enter second value"));
let h1 = document.querySelector("h1");

let randomNum = Math.random() * 100; // 0 to 100
let x=10;//x% error chances...here 10%
if (randomNum < x) { // x% chance me galat kaam
    if (value == "+") {
        h1.innerHTML = a - b;
    } else if (value == "-") {
        h1.innerHTML = a + b;
    }
} else { // normal case
    if (value == "+") {
        h1.innerHTML = a + b;
    } else if (value == "-") {
        h1.innerHTML = a - b;
    }
}
/* yahan aisa ho raha hai ki randomNum me ek number aa raha hai 0 to 100 ke beech ka
& vo number ye decide kar raha ki result galat dena hai ya sahi
like if that no. is 5 to galat aayega or if it is 15 to sahi aayega
it is not at all related to the input number in any way, input me ham kuch bhi de sakte hain
vo bas iss liye hai ki ham 10% error decide kar sake

so what's hapenning?
user ne 1st num diya then operator bataya then 2nd num diya
ab ek randomNum generate hota hai, vo ye decice karta hai ki operation sahi se hoga ya galat
if the randomNum is less than 10 then galat result aayega else sahi aayega, since here we have 10% error

NOTE: randomNum is not linked with the input number, i.e. the randomness dosen't depend on the inut value, it can be any number
*/