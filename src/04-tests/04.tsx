import {GovernmentBuildingType, HouseType} from "../02-tests/02_02";

export const demolishHousesOnTheStreet = (houses: Array<HouseType>, titleStreet: string) => {
        return houses.filter(h => h.address.street.title === titleStreet)

}

export const getBuildingsWithCorrectStuffCountBiggerThan = (buildings: Array<GovernmentBuildingType>, countStaff: number) => {
        return buildings.filter(buildings => buildings.staffCount > countStaff)
}