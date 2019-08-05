function* aGenerator(){
    console.log("I just ran");
    yield 1; //PAUSE HERE
    console.log("I ran too");
}
const gen = aGenerator();
console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
