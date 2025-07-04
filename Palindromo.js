function unPalindromo (palabra){
    let palabraInversa = palabra.split('').reverse('').join('')
    if (palabra==palabraInversa){
        return true;
    } else{
        return false;
    }
}

console.log(unPalindromo('oro'));
console.log(unPalindromo('falso'));
console.log(unPalindromo('ana'));