export type ManType = {
    name: string,
    age: number
}

const people: Array<ManType> = [
    {name: "Maxim Remez", age: 29},
    {name: "Artem Rebko", age: 29},
    {name: "Alexey Radionov", age: 29},
    {name: "Pasha Kapustin", age: 29},
]

const transformPeopleFn = (man: ManType) => {
    return {
        stack: ["HTML", "CSS", "JS", "React"],
        firstName: man.name.split(" ")[1],
        lastName: man.name.split(" ")[0]
    }
}

const dev1 = [
    {
        stack: ["HTML", "CSS", "JS", "React"],
        firstName: "Remez",
        lastName: "Maxim",
    },
    {
        stack: ["HTML", "CSS", "JS", "React"],
        firstName: "Rebko",
        lastName: "Artem",
    },
    {
        stack: ["HTML", "CSS", "JS", "React"],
        firstName: "Radionov",
        lastName: "Alexey",
    },
    {
        stack: ["HTML", "CSS", "JS", "React"],
        firstName: "Kapustin",
        lastName: "Pasha",
    }
]

const dev2 = [
    transformPeopleFn(people[0]),
    transformPeopleFn(people[1]),
    transformPeopleFn(people[2]),
]

const dev3 = people.map(transformPeopleFn)

const dev4 = people.map(man => ({
    stack: ["HTML", "CSS", "JS", "React"],
    firstName: man.name.split(" ")[1],
    lastName: man.name.split(" ")[0]
}))

export const createGreetMessages = (people:Array<ManType>) => {
    return people.map(man => "Hello " + man.name.split(" ")[0] + ". Welcome to IT-incubator")
}