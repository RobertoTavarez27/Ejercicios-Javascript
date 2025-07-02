
function booleanToString(){
   try{ 
    let a = false;
    return a.toString();
   }
 catch (error){
    console.log ("No se aceptan valores invalidos");
 }
}
console.log (booleanToString());