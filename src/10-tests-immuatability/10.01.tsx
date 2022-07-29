export type UserType = {
    name: string,
    hair: number,
    address: {
        titleCity: string,
    titleStreet: string,
    titleHouse: number}
}
type LaptopType = {
    title:string
}
type CompanyType = {
    id: number
    titleCompany: string
}
export type CompaniesType = {
    [key: string]:Array<CompanyType>
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBookType = UserType & {
    books: Array<string>
}

export type UserWithCompaniesType = UserWithLaptopType& {
    companies: Array<CompanyType>
}

export function makeHairStyle(u: UserType, power: number) {
    return {...u, hair: u.hair / power}
}

export function moveUser(u: UserWithLaptopType, titleCity: string){
    return {...u, address: {...u.address, titleCity: titleCity}}
}

export function upgradeUserLaptop(u:UserWithLaptopType, titleLaptop: string){
    return {...u, laptop: {...u.laptop, title: titleLaptop}}
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBookType, house: number){
    return {...u, address:{titleHouse: house}}
}
export function addNewBookToUser(u: UserWithLaptopType & UserWithBookType, newBooks: Array<string>){
    return {...u, books:[...u.books.concat(newBooks)]}
}
export function updateBookForUser(u: UserWithLaptopType & UserWithBookType, newBook:string, oldBook:string){
    return {...u, books: u.books.map(el => el === oldBook ? newBook : el)}
}
export function removeBook(u: UserWithLaptopType & UserWithBookType, bookForDelete: string){
    return {...u, books: u.books.filter(el => el !== bookForDelete)}
}
export function updateCompanyTitle(u: UserWithCompaniesType, idCompany: number, newCompanyTitle: string){
    return {...u, companies: u.companies.map(el => el.id === idCompany ? {...el, titleCompany: newCompanyTitle} : el)}
}
export function updateCompanyTitle2(companies: CompaniesType, userName: string, idCompany: number, newCompanyName: string){
    return {...companies, [userName]: companies[userName].map(c => c.id === idCompany ? {...c, titleCompany: newCompanyName} : c)}
}
