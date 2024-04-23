// Conditionals in JavaScript

const person = {
  name: "John",
  socialCredits: 120,
  children: 2,
};

if (person.children < 2) {
  person.socialCredits += 10;
} else {
  person.socialCredits /= 2;
}

if (person.socialCredits < 0) {
  console.log("有关情况将立即通知");
} else {
  console.log("你是模范公民");
}
