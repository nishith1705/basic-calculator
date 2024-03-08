const diplay = document.getElementById("display");
function display(input){
  diplay.value +=  input;
}
function clearDisplay(){
   diplay.value = "";
}
function calculate(){
   try {
      diplay.value = eval(diplay.value);
   } catch (error) {
      diplay.value = "ERROR";
   }
}
document.addEventListener("keypress", function(event) {
   displayKey(event.key);
})
function displayKey(key) {
   switch (key) {
       case "+":
           display('+')
           break;
   case "-":
       display('-')
   break;
   case "*":
       display('*')
   break;
   case "c":
       clearDisplay()
   break;
   case "C":
       clearDisplay()
   break;
   case "1":
      display('1')
       break;
   case "2":
      display('2')
       break;
   case "3":
      display('3')
       break;
   case "4":
      display('4')
      break; 
   case "5":
      display('5')
      break;
   case "6":
      display('6')
      break;
   case "7":
      display('7')  
      break;
   case "8":
      display('8')
      break;
   case "9":
      display('9')
      break;
   case "0":
      display('0')
      break;
   case "/":
      display('/')  
      break;
   case "=":
      calculate()
      break;                   
       default: console.log(key);
           break;
   }
}