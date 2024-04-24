class Vampire implements Monster {
  public readonly weaknesses: string[] = [
    "garlic",
    "sun light",
  ]
  public constructor(public name: string, public age: number) { }

  public bite(person: Person): void {
    const personWillDie = Math.random > 0.5;
    if (personWillDie) {
      person.life = 0;
      return
    }
    person.convert({
      convertedBy: this.name
    });
  }
}
