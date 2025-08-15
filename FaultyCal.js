/* Create a faulty calculator using JS
This faulty calculator does following :
1.It takes two numbers as input from the user.
2.It performes wrong operations as follows:
+ > -
- > +
* > /
/ > *
% > **
** > %


it performs wrong operator 50% of the times
*/

function runCalculator()
{
    let a=Number(prompt("Enter first value"));
    let value=prompt("+,-,*,/,%,**");
    let b=Number(prompt("Enter second value"));
    let result=document.getElementById("result");

    let randomNum=Math.random()*100;// 0 to 100 numbers generation
    let x= 50; // x% error chance....here 50%

    if (randomNum < x) {
        // Faulty case: fixed mapping (no label shown)
        if(value=="+"){
            result.textContent=a-b;
        } 
        else if(value=="-"){
            result.textContent=a+b;
        } 
        else if(value=="*"){
            result.textContent=(b!==0)?(a/b):"Error: Division by zero!";
        } 
        else if(value=="/"){
            result.textContent=a*b;
        } 
        else if(value=="%"){
            result.textContent=(b!==0)?(a**b):"Error: Modulus by zero!";
        } 
        else if(value=="**"){
            result.textContent=(b!==0)?(a%b):"Error: Modulus by zero!";
        } 
        else {
            result.textContent="Invalid operator!";
        }
    } 
    else {
        // Correct case (no label shown)
        if(value=="+") {
            result.textContent=a+b;
        } 
        else if(value=="-") {
            result.textContent=a-b;
        } 
        else if(value=="*") {
            result.textContent=a*b;
        } 
        else if(value=="/") {
            result.textContent=(b!==0)?(a/b):"Error: Division by zero!";
        } 
        else if(value=="%") {
            result.textContent=(b!==0)?(a%b):"Error: Modulus by zero!";
        } 
        else if(value=="**") {
            result.textContent=a**b;
        } 
        else {
            result.textContent="Invalid operator!";
        }
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