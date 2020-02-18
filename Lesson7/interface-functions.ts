interface Person {
    name: string;
    city: string;
    age: number;
    printDetails(): void;
    printWelcome(welcome: string) : string;
  }
  
  const tom: Person = {
    name: "Tom",
    city: "Munich",
    age: 33,
    printDetails: function() {
      console.log(`${this.name} - ${this.city}`);
    },
    printWelcome(welcome: string) {
        return `${welcome}, how are you ${this.name}?`;
    }
  };
  
  tom.printDetails();
  console.log(tom.printWelcome("Hello"))