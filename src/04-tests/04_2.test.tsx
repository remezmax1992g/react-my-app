import {CityType} from "../02-tests/02_02";
import {demolishHousesOnTheStreet, getBuildingsWithCorrectStuffCountBiggerThan} from "./04";

let city: CityType
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

test ("Houses should be destroyed", () => {
    let houses = demolishHousesOnTheStreet(city.houses, "Nekrasova")

    expect(houses.length).toBe(1)
    expect(houses[0].id).toBe(2)
})

test("Buildings with correct stuff count", () => {
    let buildings = getBuildingsWithCorrectStuffCountBiggerThan(city.governmentBuildings, 500)

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe("FIRE STATION");
})