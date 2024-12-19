console.log("====== First Exercise =====")

let me = {
    firstName: "Nikola",
    lastName: "Atanasov",
    age: 31,
    isStudent: true,
    favoriteHobby: "Mountaineering"
};

console.log(me)

console.log("====== Second Exercise =====")

me.firstName = "Riste";
me.lastName = "Fajzliovski";
me.age = 40;
me.isStudent = false;
me.favoriteHobby = "Fishing"

console.log(me)

console.log("====== Third Exercise =====")

let volunteer = {
    firstName: "Petar",
    lastName: "Zafirov",
    age: 25,
    isStudent: true,
    favoriteHobby: "Table Tennis"
};

delete volunteer.isStudent;

volunteer.bloodType = "O-";

volunteer.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
};

console.log(volunteer);
console.log("Full Name:", volunteer.getFullName());

console.log("====== Fourth Exercise =====")

let car = {
    model: "Toyota Aygo",
    color: "Light Grey",
    year: 2007,
    fuel: "Diesel",
    fuelConsumption: 3.7, 

    calculateFuelNeeded: function(distance) {
        let fuelNeeded = (this.fuelConsumption * distance) / 100;
        return fuelNeeded;
    }
};

let distanceToTravel = 1240;
let fuelRequired = car.calculateFuelNeeded(distanceToTravel);

console.log(`To travel ${distanceToTravel} kilometers, you will need ${fuelRequired} liters of ${car.fuel}.`);

