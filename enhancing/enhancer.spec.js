const enhancer = require('./enhancer.js');

const gameItems = [
    {
        name: "Swiftwing Axe",
        durability: 20,     // 0 to 20
        enhancement: 100    // 0 to 100
    },
    {
        name: "Old Empire Leg Armor",
        durability: 5,      // 0 to 20
        enhancement: 80     // 0 to 100
    },
    {
        name: "Gauntlents of the Gatekeeper",
        durability: 20,     // 0 to 20
        enhancement: 70     // 0 to 100
    },
    {
        name: "Iron Sword",
        durability: 10,     // 0 to 20
        enhancement: 60     // 0 to 100
    },
    {
        name: "Dawn Earring",
        durability: 15,     // 0 to 20
        enhancement: 90     // 0 to 100
    }
];

describe("Repair", () => {
    test("Increases durability up to maximum (100)", () => {
        const result = enhancer.repair(gameItems[1]);

        expect(result.durability).toBe(100);
    });
});