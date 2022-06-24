import {multiply, splitIntoWords, sum} from "./01";

test("splitting into words should be correct", () =>{
    //data
    const sent1 = "Hello my friends";
    const sent2 = "Hello my JS";

    //action
    const result1 = splitIntoWords(sent1);
    const result2 = splitIntoWords(sent2);

    //expectation
    expect(result1.length).toBe(3);
    expect(result2.length).toBe(3);
    expect(result1[0]).toBe("Hello");
    expect(result1[1]).toBe("my");
    expect(result1[2]).toBe("friends");
    expect(result2[0]).toBe("Hello");
    expect(result2[1]).toBe("my");
    expect(result2[2]).toBe("JS");
})

test("sum should be correct", ()=>{
    //data
    const a = 1;
    const b = 2;
    const c = 3;

    //action
    const sum1 = sum(a,b);
    const sum2 = sum(a,c);


    //expectation
    expect(sum1).toBe(3);
    expect(sum2).toBe(4);
})

test("multiply should be correct", ()=>{
    //data
    const a = 1;
    const b = 2;
    const c = 3;

    //action
    const multiply1 = multiply(a,b);
    const multiply2 = multiply(b,c);



    //expectation
    expect(multiply1).toBe(2);
    expect(multiply2).toBe(6);
})