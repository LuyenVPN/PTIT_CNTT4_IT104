function kiemtratrung(word: string): boolean {
    for (let i = 0; i < word.length; i++) {
        for (let j = i + 1; j < word.length; j++) {
            if (word[i] === word[j]) {
                return false;
            }
        }
    }
    return true;
}
function timTuDaiNhat(sentence: string): string {
    let words: string[] = sentence.split(" ");
    let result = "";
    for (let i = 0; i < words.length; i++) {
            if (kiemtratrung(words[i])&&words[i].length > result.length) {
                result = words[i];
            }
    }
    return result;
}
const input = "hello world apple banana orange pumpkin cucumber";
console.log(timTuDaiNhat(input));
