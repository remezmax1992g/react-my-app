export type CityType = {
    title: string,
    countryTitle: string
}

export type AddressType = {
    streetTitle: string,
    city: CityType
}

export type TechType = {
    id: number,
    title: string
}
export type StudentType = {
    id: number,
    name: string,
    age: number,
    isActive: boolean
    address: AddressType,
    technologies: Array<TechType>
}

const student = {
    id: 1,
    name: "Max",
    age: 29,
    isActive: false,
    address : {
        streetTitle: "Bogdanovicha 136-184",
        city: {
            title: "Minsk",
            countryTitle:"Belarus",
        }
    },
    technologies: [
        {
            id:1,
            title: "HTML"
        },
        {
            id:2,
            title: "CSS"
        },
        {
            id:3,
            title: "JS"
        }
        ]
}
console.log(student.name);
console.log(student.age);
console.log(student.isActive);
console.log(student.technologies[0].title);