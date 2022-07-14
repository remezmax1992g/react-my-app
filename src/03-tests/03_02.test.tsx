import {CityType} from "../02-tests/02_02";
import {addMoneyToBudget, repairHouse, toFireStaff, toHireStaff} from "./03";


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

test("Budget should be changed for HOSPITAL", () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000);
    expect(city.governmentBuildings[0].budget).toBe(300000);
})

test("Budget should be changed for FIRE_STATIONL", () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000);
    expect(city.governmentBuildings[1].budget).toBe(400000);
})
test("House should be repaired", () => {
    repairHouse(city.houses[1]);
    expect(city.houses[1].repaired).toBeTruthy();
})

test("Staff should be increased", () => {
    toHireStaff(city.governmentBuildings[1], 20);
    expect(city.governmentBuildings[1].staffCount).toBe(1020);
})

test("Staff should be decreased", () => {
    toFireStaff(city.governmentBuildings[1], 20);
    expect(city.governmentBuildings[1].staffCount).toBe(980);
})