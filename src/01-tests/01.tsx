const sentence = "Hello my friends";

export function sum (a:number, b:number){
    return a+b;
}

export function multiply(a:number, b:number){
    return a*b;
}

export function splitIntoWords(sentence: string){
   const words = sentence.split(" ")
        return words.filter(w => w !== "");
}