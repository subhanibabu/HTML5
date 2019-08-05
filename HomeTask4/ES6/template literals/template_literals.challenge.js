// using template literals build a JS program to check if a person is eligible for a price discount or not
// check if
// if a registered member - discount is 5%
// if not registered member - discount is 4%

const DISCOUNT = {
    REGISTERED: "discount is 5% ",
    NOT_REGISTERED: "discount is 4%"
};
let registeredMember = {
    status: DISCOUNT.REGISTERED
};
let notRegisteredMember = {
    status: DISCOUNT.NOT_REGISTERED
};
IsEligible = (member) => {
    if (member.status === DISCOUNT.REGISTERED) {
        return DISCOUNT.REGISTERED;
    } else {
        return DISCOUNT.NOT_REGISTERED;
    }
}
let eligibleResult = `The person is eligible for discount and the ${IsEligible(registeredMember)}`;
console.log(eligibleResult);

let notEligibleResult = `The person is not eligible for discount and the ${IsEligible(notRegisteredMember)}`;
console.log(notEligibleResult);