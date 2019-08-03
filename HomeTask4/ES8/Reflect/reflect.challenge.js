let course = {};
Reflect.defineProperty(course, "name", {
    value: "javascript",
    writable: false
});

const student = {
    name: 'Subbu',
    fee: 42
};

console.log(`Before deleting property from object : ${student.fee}`); // Expects 42

Reflect.deleteProperty(student, 'fee');

console.log(`After deleting property from object : ${student.fee}`); //Expects undefined

Reflect.defineProperty(course, "duration", {
    value: "3 hours",
    writable: false
});

console.log(course);
console.log(Reflect.getOwnPropertyDescriptor(course, "name"));

// use  reflect API to define property,  delete a property, getOwnpropertydescriptor details
// property to define - name with value as "Javascript", make it read only (writable : false)
// property to define - duration with value as "3 hours", make it read only (writable : false)
// getOwnpropertydescriptor - check and print metadata about name property
