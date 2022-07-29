import {
    addNewBookToUser, CompaniesType,
    makeHairStyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBookForUser, updateCompanyTitle, updateCompanyTitle2,
    upgradeUserLaptop,
    UserType,
    UserWithBookType, UserWithCompaniesType,
    UserWithLaptopType
} from "./10.01";


test("reference type test", () => {
    let user: UserType = {
        name: "Maxim",
        hair: 4000,
        address: {
            titleCity: "Minsk",
            titleStreet: "Bogdanovicha",
            titleHouse: 136
        },
    }
    let awesomeUser = makeHairStyle(user, 4)
    expect(user.hair).toBe(4000)
    expect(awesomeUser.hair).toBe(1000)

})
test("change address", () => {
    let user: UserWithLaptopType = {
        name: "Maxim",
        hair: 4000,
        address: {
            titleCity: "Minsk",
            titleStreet: "Bogdanovicha",
            titleHouse: 136
        },
        laptop: {
            title: "Zenbook"
        }
    }

    let movedUser = moveUser(user, "Kiev")

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.titleCity).toBe("Kiev")

})

test("upgrade laptop to macbook", () => {
    let user: UserWithLaptopType = {
        name: "Maxim",
        hair: 4000,
        address: {
            titleCity: "Minsk",
            titleStreet: "Bogdanovicha",
            titleHouse: 136
        },
        laptop: {
            title: "Zenbook"
        }
    }

    let userWithNewLaptop = upgradeUserLaptop(user, "Macbook")

    expect(user).not.toBe(userWithNewLaptop)
    expect(user.address).toBe(userWithNewLaptop.address)
    expect(user.laptop).not.toBe(userWithNewLaptop.laptop)
    expect(userWithNewLaptop.laptop.title).toBe("Macbook")
    expect(user.laptop.title).toBe("Zenbook")

})

test("change house", () => {
    let user: UserWithLaptopType & UserWithBookType = {
        name: "Maxim",
        hair: 4000,
        address: {
            titleCity: "Minsk",
            titleStreet: "Bogdanovicha",
            titleHouse: 136
        },
        laptop: {
            title: "Zenbook"
        },
        books: ["css", "html", "js", "react"]
    }

    let movedUser = moveUserToOtherHouse(user, 45)

    expect(user).not.toBe(movedUser)
    expect(user.books).toBe(movedUser.books)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.titleHouse).toBe(45)

})
test("add new book to user", () => {
    let user: UserWithLaptopType & UserWithBookType = {
        name: "Maxim",
        hair: 4000,
        address: {
            titleCity: "Minsk",
            titleStreet: "Bogdanovicha",
            titleHouse: 136
        },
        laptop: {
            title: "Zenbook"
        },
        books: ["css", "html", "js", "react"]
    }

    let newUser = addNewBookToUser(user, ["ts", "react api"])

    expect(user).not.toBe(newUser)
    expect(user.books).not.toBe(newUser.books)
    expect(user.address).toBe(newUser.address)
    expect(user.laptop).toBe(newUser.laptop)
    expect(newUser.books[4]).toBe("ts")
    expect(newUser.books[5]).toBe("react api")

})

test("change books for user", () => {
    let user: UserWithLaptopType & UserWithBookType = {
        name: "Maxim",
        hair: 4000,
        address: {
            titleCity: "Minsk",
            titleStreet: "Bogdanovicha",
            titleHouse: 136
        },
        laptop: {
            title: "Zenbook"
        },
        books: ["css", "html", "js", "react"]
    }

    let newUser = updateBookForUser(user, "ts", "js")

    expect(user).not.toBe(newUser)
    expect(user.books).not.toBe(newUser.books)
    expect(user.address).toBe(newUser.address)
    expect(user.laptop).toBe(newUser.laptop)
    expect(newUser.books[2]).toBe("ts")
    expect(newUser.books.length).toBe(4)
    expect(user.books[2]).toBe("js")

})

test("remove book js", () => {
    let user: UserWithLaptopType & UserWithBookType = {
        name: "Maxim",
        hair: 4000,
        address: {
            titleCity: "Minsk",
            titleStreet: "Bogdanovicha",
            titleHouse: 136
        },
        laptop: {
            title: "Zenbook"
        },
        books: ["css", "html", "js", "react"]
    }

    let newUser = removeBook(user, "js")

    expect(user).not.toBe(newUser)
    expect(user.books).not.toBe(newUser.books)
    expect(user.address).toBe(newUser.address)
    expect(user.laptop).toBe(newUser.laptop)
    expect(newUser.books[2]).toBe("react")
    expect(newUser.books.length).toBe(3)
    expect(user.books[2]).toBe("js")

})
test("update companyTitle", () => {
    let user: UserWithCompaniesType = {
        name: "Maxim",
        hair: 4000,
        address: {
            titleCity: "Minsk",
            titleStreet: "Bogdanovicha",
            titleHouse: 136
        },
        laptop: {
            title: "Zenbook"
        },
        companies: [{id: 1, titleCompany: "ЕПАМ"}, {id: 2, titleCompany: "IT_INCUBATOR"}]
    }

    let newUser = updateCompanyTitle(user, 1, "EPAM")

    expect(user).not.toBe(newUser)
    expect(user.address).toBe(newUser.address)
    expect(user.laptop).toBe(newUser.laptop)
    expect(newUser.companies[0].titleCompany).toBe("EPAM")
    expect(newUser.companies.length).toBe(2)
    expect(user.companies[0].titleCompany).toBe("ЕПАМ")

})

test("update companiesTitle", () => {

    let companies: CompaniesType = {
        ["Dima"]: [{id: 1, titleCompany: "ЕПАМ"},{id: 2, titleCompany: "IT_INCUBATOR"}],
        ["Max"]: [{id: 2, titleCompany: "IT_INCUBATOR"}]
    }
    let newCompanies = updateCompanyTitle2(companies, "Max", 2, "Yandex")

    expect(companies).not.toBe(newCompanies)
    expect(companies["Max"]).not.toBe(newCompanies["Max"])
    expect(companies["Dima"]).toBe(newCompanies["Dima"])
    expect(newCompanies["Max"][0].titleCompany).toBe("Yandex")
    expect(companies["Max"][0].titleCompany).toBe("IT_INCUBATOR")

})