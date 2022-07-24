type UserType = {
    name: string
    age: number
    address: {title: string}
}

const increasingOfAge = (user: UserType) => {
    user.age++
}

test("Reference type test", () => {
    let user: UserType = {
        name: "Max",
        age: 29,
        address: {
            title: "Minsk"
        }
    }

    let user1: UserType = {
        name: "Artem",
        age: 29,
        address: user.address
    }

    increasingOfAge(user)

    expect(user.age).toBe(30)

    const men = user
    men.age = 1000

    expect(user.age).toBe(1000)
    expect(user.address).toBe(user1.address)

})

test("Reference array test", () => {
    let users: Array<UserType> = [
        {
            name: "Max",
            age: 29,
            address: {
                title: "Minsk"
            }
        },
        {
            name: "Artem",
            age: 29,
            address: {
                title: "Minsk"
            }
        },
    ]
    let admins = users
    admins.push({name: "Bandyugan", age: 10, address: {title: "Minsk"}})

    expect(users[2]).toEqual({name: "Bandyugan", age: 10, address: {title: "Minsk"}})
})