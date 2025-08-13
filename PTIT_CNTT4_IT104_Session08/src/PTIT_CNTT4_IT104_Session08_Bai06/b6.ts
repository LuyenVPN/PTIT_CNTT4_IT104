function findElement <T>(arr: T[], value: T): T | undefined {
    for(let item of arr){
        if(item === value){
            return item
        }
    }
    return undefined;
}
console.log(findElement([1, 3, 5, 8, 11],5));     
console.log(findElement([1, 7, 3, 9],6)); 
console.log(findElement(["a","b","c","d"],"b"));       