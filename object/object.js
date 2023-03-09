const user = {
    name: "Fitri",
    age: 19,
    height: 155
}

// mengakses nilai
console.log(user.name, user["age"], user.height);

// looping object
for (const label in user) {
    console.log(user[label]);
}