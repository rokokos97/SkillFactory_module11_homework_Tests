const getPercents=require('./getPercent')

describe("getPercents all tests", ()=>{
    test("введены корректные значения", ()=>{
        expect(getPercents(30,200)).toBe(60)
    })
    test("значения не введены вовсе", ()=>{
        expect(getPercents()).toBe("Введенные значения вне допустимого диапазона")
    })
    test("введен только один параметр", ()=>{
        expect(getPercents(100)).toBe("Введенные значения вне допустимого диапазона")
    })
    test("введены значения другого типа данных", ()=>{
        expect(getPercents([5,2],199)).toBe("Введенные значения вне допустимого диапазона")
    })
    test("значение числа отрицательное", ()=>{
        expect(getPercents(100, -100)).toBe(-100)
    })
} )