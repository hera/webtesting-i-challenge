module.exports = {
    succeed,
    fail,
    repair,
    get,
};


function succeed (item) {
    const result = Object.assign({}, item);

    if (result.enhancement < 20) {
        result.enhancement++;
    }

    return result;
}

function fail (item) {
    const result = Object.assign({}, item);

    if (item.enhancement < 15) {
        result.durability -= 5;
    } else if (item.enhancement >= 15) {
        result.durability -= 10;
    }

    if (item.enhancement > 16) {
        result.enhancement = result.enhancement - 1;
    }

    return result;
}

function repair (item) {
    return Object.assign(item, { durability: 100 });
}

function get (item) {
    return { ...item };
}
