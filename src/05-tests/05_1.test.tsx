import {CityType} from "../02-tests/02_02";
import {createMesssagesForHouses, getStreetTitlesOfGovernmentBuildings, getStreetTitlesOfHouses} from "./05_1";


let city:CityType;

beforeEach(() => {
        city = {
            title: "New York",
            houses: [
                {
                    id: 1,
                    buildedAt: 2010,
                    repaired: false,
                    address: {
                        number: 184,
                        street: {
                            title: "Bogdanovicha"
                        }
                    }
                },
                {
                    id: 2,
                    buildedAt: 2008,
                    repaired: false,
                    address: {
                        number: 100,
                        street: {
                            title: "Nekrasova"
                        }
                    }
                },
                {
                    id: 3,
                    buildedAt: 2020,
                    repaired: false,
                    address: {
                        number: 132,
                        street: {
                            title: "Bogdanovicha"
                        }
                    }
                }
            ],
            governmentBuildings: [{
                type: "HOSPITAL",
                budget: 200000,
                staffCount:200,
                address: {
                    number: 150,
                    street: {
                        title: "Central street"
                    }
                }
            },
                {
                    type: "FIRE STATION",
                    budget: 500000,
                    staffCount:1000,
                    address: {
                        number: 100,
                        street: {
                            title: "South street"
                        }
                    }
                }],
            citizensNumber: 100000
        }
    }
)

test("List of streets titles of government buildings", () => {
    let streetNames = getStreetTitlesOfGovernmentBuildings (city.governmentBuildings);

    expect(streetNames.length).toBe(2)
    expect(streetNames[0]).toBe("Central street")
    expect(streetNames[1]).toBe("South street")

})
test("List of streets titles of houses", () => {
    let streetNames = getStreetTitlesOfHouses(city.houses);

    expect(streetNames.length).toBe(3)
    expect(streetNames[0]).toBe("Bogdanovicha")
    expect(streetNames[1]).toBe("Nekrasova")
    expect(streetNames[2]).toBe("Bogdanovicha")

})

test("Create greeting messages for houses street", () => {
    let messagesForHouses = createMesssagesForHouses(city.houses)

    expect(messagesForHouses.length).toBe(3)
    expect(messagesForHouses[0]).toBe("Hello guys from Bogdanovicha")
    expect(messagesForHouses[1]).toBe("Hello guys from Nekrasova")
    expect(messagesForHouses[2]).toBe("Hello guys from Bogdanovicha")

})