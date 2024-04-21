const megazineSize = 6;

while (true) {
  const bulletPos = Math.floor(Math.random() * megazineSize - 1);
  if (bulletPos == 0) {
    break;
  }
  console.log("You are alive !");
}

console.log("You die");
