export function formatDate(date){
    let day= date.getDate();
    let month= date.getMonth()+1;
    let year= date.getFullYear();
    let dayOuput = day <10? `0`+day : day;
    let monthOuput= month <10? `0` +month : month;
    return `${dayOuput}/${monthOuput}/${year}`;
}