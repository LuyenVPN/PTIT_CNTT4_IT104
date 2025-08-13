function mergeObj<T,K>(obj1:T, obj2: K): T & K{
    return {...obj1, ...obj2}
}
let user={id:99, name: "Luyen"}
let address={city: "Bac Ninh", country:"Viet Nam"}
let merge= mergeObj(user,address)
console.log(merge);
