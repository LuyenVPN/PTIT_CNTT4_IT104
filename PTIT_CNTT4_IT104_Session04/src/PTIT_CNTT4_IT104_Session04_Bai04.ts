function displayb4(input:string|number){
    if(typeof input==="string"){
        console.log(`Co ${input.length} ky tu`);
    }else if(typeof input ==="number"){
        if(input % 2===0){
            console.log("day la so chan");
        }else{
            console.log("day la so le");
        }
    }else{
        console.log("kieu du lieu khong hop le");
    }
}

displayb4("abc");
displayb4(5);
displayb4(6);