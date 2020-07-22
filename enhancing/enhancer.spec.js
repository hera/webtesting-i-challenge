const enhancer = require('./enhancer.js');


const gameItems = [
    {
        name: "Swiftwing Axe",
        durability: 100,
        enhancement: 20
    },
    {
        name: "Old Empire Leg Armor",
        durability: 80,
        enhancement: 5
    },
    {
        name: "Gauntlents of the Gatekeeper",
        durability: 70,
        enhancement: 20
    },
    {
        name: "Iron Sword",
        durability: 60,
        enhancement: 10
    },
    {
        name: "Dawn Earring",
        durability: 90,
        enhancement: 18
    }
];


describe("Repair", () => {
    test("Increases durability up to maximum (100)", () => {
        const result = enhancer.repair(gameItems[1]);

        expect(result.durability).toBe(100);
    });
});


describe("Succeed", () => {
    test("Increment enhancement if possible", () => {
        const item = gameItems[0];
        
        const result = enhancer.succeed(item);
        
        if (item.enhancement === 20) {
            expect(result.enhancement).toBe(20);
            expect(result).toEqual(item);
        } else {
            expect(result.enhancement).toBe(item.enhancement + 1);
        }
    });
});


describe("Fail func", () => {
    test("As expected", () => {
        const item = gameItems[0];

        const result = enhancer.fail(item);

        const expectedResult = {
            name: "Swiftwing Axe",
            durability: 90,
            enhancement: 19
        };

        expect(result).toEqual(expectedResult);
    });

    test("As expected 2", () => {
        const item = gameItems[4];

        const result = enhancer.fail(item);

        const expectedResult = {
            name: "Dawn Earring",
            durability: 80,
            enhancement: 17
        };

        expect(result).toEqual(expectedResult);
    });
});


describe("Get func", () => {
    test("Adds enhancements to name", () => {
        const item = gameItems[4];

        const result = enhancer.get(item);
        const expectedName = "Dawn Earring [+18]";

        expect(result.name).toBe(expectedName);

    });
});