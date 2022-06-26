import {StudentType} from "../02-tests/02";
import {CityType, GovernmentBuildingType, HouseType} from "../02-tests/02_02";

export const sum = (a: number, b: number) =>{
    return a+b;
}

export const addSkill = (student: StudentType, skill: string) =>{
    student.technologies.push({
        id:new Date().getTime(),
        title: skill
    })
}

export const makeStudentActive = (student: StudentType) => {
    student.isActive = true;
}

export const doesStudentLiveIn = (student: StudentType, cityTitle: string) => {
    return student.address.city.title === cityTitle;
}

export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) =>{
        building.budget += budget;
}

export const repairHouse = (house: HouseType) => {
    house.repaired = true;
}

export const toHireStaff = (building: GovernmentBuildingType, staffCount: number) => {
    building.staffCount += staffCount;
}
export const toFireStaff = (building: GovernmentBuildingType, staffCount: number) => {
    building.staffCount -= staffCount;
}