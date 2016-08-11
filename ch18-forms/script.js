var form = document.querySelector("form");

console.log(form.elements[1].type);
// → password
console.log(form.elements.password.type);
// → password
console.log(form.elements.name.form == form);
// → true
