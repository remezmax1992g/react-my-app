import {createGreetMessages, ManType} from "./05";


let people: Array<ManType> = []

beforeEach(() => {
    people = [
        {name: "Maxim Remez", age: 29},
        {name: "Artem Rebko", age: 29},
        {name: "Alexey Radionov", age: 29},
        {name: "Pasha Kapustin", age: 29},
    ]

})

test("Should get array of greeting messages", () => {
    const messages = createGreetMessages(people);

    expect(messages.length).toBe(4)
    expect(messages[0]).toBe("Hello Maxim. Welcome to IT-incubator")
    expect(messages[1]).toBe("Hello Artem. Welcome to IT-incubator")
    expect(messages[2]).toBe("Hello Alexey. Welcome to IT-incubator")
    expect(messages[3]).toBe("Hello Pasha. Welcome to IT-incubator")
})