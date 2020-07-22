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
    return { ...item };
}

function repair (item) {
    return Object.assign(item, { durability: 100 });
}

function get (item) {
    return { ...item };
}
