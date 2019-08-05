//With the template provided, write a template tag that will validate an SQL statement:
//Only SELECT or UPDATE statements are valid - write validation logic which allows only SELECT, UPDATE
//The passwords table cannot be altered
//there is no order by clause, add it and order by asc
// When done, return the reconstructed query or a note any errors

let city = `Chicago`;
let userId = 3;
const TABLE = {
    users: "USERS",
    password: "PASSWORDS"
};

const selectCommand = {
    command: "SELECT",
    table: TABLE.users,
    whereClauses: [`uid = ${2 + 1}`, ` OR city = ${city}`]
};
const selectCommandForPassword = {
    command: "SELECT",
    table: TABLE.password,
    whereClauses: [`uid = ${2 + 1}`, ` OR city = ${city}`]
};
const updateCommandForPassword = {
    command: "UPDATE",
    table: TABLE.password,
    whereClauses: [`uid = ${2 + 1}`, ` OR city = ${city}`]
};
const updateCommand = {
    command: "UPDATE",
    table: TABLE.users,
    whereClauses: [`uid = ${2 + 1}`, ` OR city = ${city}`]
};

const checkQuery = (strings, command, table, where) => {
    if (command === "SELECT" && table === "USERS") {
        return `${command}${strings[0]}${strings[1]}${table}${strings[2]}${
            where[0]
            }${where[1]}${strings[3]}`;
    } else if (command === "UPDATE" && table === "USERS") {
        return `${command}${strings[1]}${table}${strings[2]}${where[0]}${where[1]}`;
    } else {
        return `No Query can be constructed!`;
    }
}

const selectQuery = checkQuery`${selectCommand.command} * FROM ${
    selectCommand.table
    } WHERE ${selectCommand.whereClauses
    } ORDER by asc`;
console.log("selectQuery valid scenario:-", selectQuery);

const selectQueryForPassword = checkQuery`${selectCommandForPassword.command} * FROM ${selectCommandForPassword.table
    } WHERE ${
    selectCommandForPassword.whereClauses
    } ORDER by asc`;
console.log("selectQuery failure scenario:-", selectQueryForPassword);

const updateQuery = checkQuery`${updateCommand.command} TABLE ${
    updateCommand.table
    } WHERE ${updateCommand.whereClauses}`;
console.log("update Query valid Scenario:-", updateQuery);

const updateQueryForPassword = checkQuery`${updateCommandForPassword.command} TABLE ${updateCommandForPassword.table
    } WHERE ${
    updateCommandForPassword.whereClauses
    }`;
console.log("update Query Invalid Scenario:-", updateQueryForPassword);

