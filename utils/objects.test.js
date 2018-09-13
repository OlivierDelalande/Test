const resolveObjects = require("./resolveObjects.js");
const expect = require('expect');

it("works", () => { 
    const tests = [
        {
            input: {
                a: { 
                    b: {
                        c: 'z', 
                    },
                },
                'a.b.d': 'y', 
            },
            output: { 
                a: {
                    b: {
                        c: 'z',
                        d: 'y',
                    }, 
                },
            }, 
        }
]; 

tests.forEach(test=>{
    expect(resolveObjects.generateOutput(test.input)).toEqual(test.output); });
});