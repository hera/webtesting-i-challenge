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
        enhancement: 15
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