import {ManType} from "./07";


let props: ManType;

beforeEach(() => props = {
    name: "Maxim",
    age: 29,
    lessons: [{title: "1"}, {title: "2"}, {title: "3", name: "react"}],
    address: {
        street: {
            streetTitle: "Bogdanovicha"
        }
    }
})

test("", () => {

    const {age, lessons} = props;
    const {streetTitle} = props.address.street;

    const a = props.age;
    const l = props.lessons

    expect(a).toBe(29)
    expect(l.length).toBe(3)
    expect(age).toBe(29)
    expect(lessons.length).toBe(3)
    expect(streetTitle).toBe("Bogdanovicha")


})
test("Array-destructive", () => {
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]
    const [,ls2, ...restLessons] = props.lessons

    expect(l1.title).toBe("1")
    expect(l2.title).toBe("2")
    expect(ls2.title).toBe("2")
    expect(restLessons.length).toBe(1)
    expect(restLessons[0].title).toBe("3")
    expect(restLessons[0].name).toBe("react")
    expect(restLessons[0]).toStrictEqual({name: "react", title: "3"})
})