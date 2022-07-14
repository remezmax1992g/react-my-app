import {CityType} from "./02_02";

let city: CityType;

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

test("test city should contain hospital and fire station", () => {
        expect(city.houses.length).toBe(3);

        expect(city.houses[0].buildedAt).toBe(2010);
        expect(city.houses[0].repaired).toBe(false);
        expect(city.houses[0].address.number).toBe(184);
        expect(city.houses[0].address.street.title).toBe("Bogdanovicha");

        expect(city.houses[1].buildedAt).toBe(2008);
        expect(city.houses[1].repaired).toBe(false);
        expect(city.houses[1].address.number).toBe(100);
        expect(city.houses[1].address.street.title).toBe("Nekrasova");

        expect(city.houses[2].buildedAt).toBe(2020);
        expect(city.houses[2].repaired).toBe(false);
        expect(city.houses[2].address.number).toBe(132);
        expect(city.houses[2].address.street.title).toBe("Bogdanovicha");
    }
)

test("test cyty should contain 3 houses", () => {
        expect(city.governmentBuildings.length).toBe(2);

            expect(city.governmentBuildings[0].type).toBe("HOSPITAL");
        expect(city.governmentBuildings[0].budget).toBe(200000);
        expect(city.governmentBuildings[0].staffCount).toBe(200);
        expect(city.governmentBuildings[0].address.street.title).toBe("Central street");

        expect(city.governmentBuildings[1].type).toBe("FIRE STATION");
        expect(city.governmentBuildings[1].budget).toBe(500000);
        expect(city.governmentBuildings[1].staffCount).toBe(1000);
        expect(city.governmentBuildings[1].address.street.title).toBe("South street");

    }
)