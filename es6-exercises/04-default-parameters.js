// Write a function that takes 3 parameters: greeting, firstName,
// and lastName. Set the default values to 'hello' and your first
// and last name, if no input is provided.

var myEmployee = {
    firstName: this.firstName,
    lastName: this.lastName,
    type: "valued employee",
    expectsWelcome: true,
    defaultGreeting: `Welcome back, ${this.type}.`,
    personalizedGreeting: `Great to see you back, ${this.firsttName} ${this.lastName}.`,
    greeting:(expectsWelcome,firstName,lastName) => this.firstName = this.personalizedGreeting || this.defaultGreeting,
}

console.log(myEmployee.greeting(1,"Jane" ,"McCarthy"));