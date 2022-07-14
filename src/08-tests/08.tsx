export const userObj = {
    "1": "Max",
    "2": "Dimych",
    "3": "Artem",
    "4": "Pavel",
}

export type UsersType = {
    [key: string]: {id: number, name: string}
}

/*let newUser1 = {id: 32323, name: "Alexey"}
users[newUser1.id] = newUser1
let men = users[495865]
let men1 = users["495865"]
delete users[newUser1.id]
users[newUser1.id].name = "Victor"
console.log(men)
console.log(men1)*/

export const userArray = [
    {id: 11111, name: "Max"},
    {id: 233445, name: "Dimych"},
    {id: 64345, name: "Artem"},
    {id: 495865, name: "Pavel"},
]
let men2 = userArray.find(u => u.id === 495865)
/*
userArray.push(newUser1)
/!*let userCopy = {...userArray, newUser1}*!/
let newUserArray = userArray.filter(u => u.id !== newUser1.id)
console.log(men2)*/

