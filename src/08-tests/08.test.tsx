import {UsersType} from "./08";

let users:UsersType

beforeEach(() => {
    users = {
        "11111": {id: 11111, name: "Max"},
        "233445": {id: 233445, name: "Dimych"},
        "64345": {id: 64345, name: "Artem"},
        "495865": {id: 495865, name: "Pavel"},
    }
})

test("Should update corresponding user", () => {

    expect(users["11111"].name).toBe("Max")
})
/*
userArray.push(newUser1)
/!*let userCopy = {...userArray, newUser1}*!/
let newUserArray = userArray.filter(u => u.id !== newUser1.id)
console.log(men2)*/
