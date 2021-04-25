const log = console.log;

class Car {
  constructor() {
    this.drive = this.drive.bind(this); // produce a new version of that function
  }
  setDriveSound(sound) {
    this.sound = sound;
  }

  drive() {
    return this.sound;
  }
}

const car = new Car();
const drive = car.drive;
log(car.drive);

// const car = new Car();
// car.setDriveSound("vroom");
// log(car.drive()); // vroom ==> look at where the function is called : "car"

// const truck = {
//   sound: "putputput",
//   driveMyTruck: car.drive,
// };

// log(truck.driveMyTruck());

// log(car.drive); // [Function: drive]
// const drive = car.drive;
// log(drive()); // Cannot read property 'sound' of undefined

// const drive2 = car.drive();
// log(drive); // vroom
