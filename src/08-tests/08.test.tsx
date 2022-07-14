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

    users[11111].name = "Maxim"

    expect(users["11111"].name).toBe("Maxim")
    expect(users["11111"]).toEqual({id: 11111, name: "Maxim"})
})

test("Should delete corresponding user", () => {

    delete users[11111]

    expect(users["11111"]).toBeUndefined()

})
