// 1. SET
// Rewrite the sample code below so that every time a property is set a callback runs.
// your callback will check if the property changed is employees.

//If it is employees, make sure if it is an Array, a string or null.
//If anything else comes, respond with an appropriate message
//If not employees, let it pass

let manager = {
    office: `Dubai`,
    dept: `sales`,
    employees: 0
};

let managerHandler = {
    set: (target, prop, value) => {
        if (prop === "employees") {
            if (
                typeof value === `string` ||
                value == null ||
                value instanceof Array
            ) {
                console.log(`Update value is: ${target[prop] = value}`);
            } else {
                console.log(`can not be updated with value , ${typeof value}, ${value}`);
            }
        }
    }
};

const managerProxy = new Proxy(manager, managerHandler);
managerProxy.office = `London`; //updates
managerProxy.employees = ["Jim", "Patrick", "Mary"]; //updates
console.log("array", manager);

managerProxy.employees = 3; // doesn't update
console.log("number", manager);

managerProxy.employees = null; // updates
console.log("null", manager);

managerProxy.employees = { name: "Jim" }; // doesn't update
console.log("complex object", manager);

managerProxy.employees = "qwerty";
console.log("string", manager); // updates

// 2. GET
// adjust the following code so that anytime an internal object with accessLevel of 1 is accessed,
//"Access Denied" is returned.

let usersProxyHandler = {
    get: function (obj, prop) {
        if (obj[prop].accessLevel === 1) {
            return "Access Denied!";
        } else {
            return obj[prop];
        }
    }
};

//For array of complex objects.
let users = [
    {
        username: `Subbu`,
        accessLevel: 1,
        accessCode: 9999
    },
    {
        username: `Babu`,
        accessLevel: 2,
        accessCode: 9999
    },
    {
        username: `Anchula`,
        accessLevel: 3,
        accessCode: 9999
    }
];
let usersProxy = new Proxy(users, usersProxyHandler);

console.log(usersProxy[0]);
console.log(usersProxy[1]);
console.log(usersProxy[2]);
console.log(usersProxy[0].username === undefined ? "Access Denied" : usersProxy[0].username);
console.log(usersProxy[1].username);
console.log(usersProxy[2].username);