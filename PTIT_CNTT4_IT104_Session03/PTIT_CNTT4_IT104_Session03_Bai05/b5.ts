let fistName: string="van";
let lastName:string="luyen";
function upperCase(word:string){
    return word.charAt(0).toUpperCase()+word.slice(1);
}
let fullName: string= `${upperCase(fistName)} ${upperCase(lastName)}`;
console.log(fullName);
