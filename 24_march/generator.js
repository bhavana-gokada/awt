function* gen(name){
    console.log(name);
    yield "---pause---";
    console.log("hello!!"+name);
    yield "---pause---";
}
g=gen("shwetha");
console.log(g.next().value);
x=gen("raj");
console.log("x function");
console.log(x.next().value);
console.log(x.next().value);
console.log("g function continuation");
console.log(g.next().value);
