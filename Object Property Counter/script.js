function countProperties(obj) {
    let count = 0;

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            count++;

            if (typeof obj[key] === "object" && obj[key] !== null) {
                count += countProperties(obj[key]);
            }
        }
    }

    return count;
}

const test = {
    name: "kimia",
    age: 23,
    address: {
        city: "Tehran",
        street: "Laleh"
    },
};

console.log(countProperties(test));
