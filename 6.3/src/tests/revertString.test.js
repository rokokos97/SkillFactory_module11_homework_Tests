const revertString=require('../revertString')

describe("revert string all tests", ()=>{
    test("is string revert ", ()=>{
        expect(revertString("abc")).toBe("cba")
    })
    test("if sting is empty", ()=>{
        expect(revertString("")).toBe("")
    })
} )