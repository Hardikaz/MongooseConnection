const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
//Creating Schema
const carsSchema = new mongoose.Schema({
    name:String
});

//Methods Setup
carsSchema.methods.drive = function drive() {
  const greeting = this.name
    ? 'Car name is ' + this.name
    : 'I don\'t have a name';
  console.log(greeting);
};

//Creating model to add behaviours 
const car = mongoose.model('car', carsSchema);

// const bugatti=new car({name:'Bugatti'});
// console.log(bugatti.name);


const duccati=new car({name:"Duccati"});
//duccati.drive();

//saving to database
duccati.save();

duccati.drive();

//Finding and printing
const cars=car.find();
console.log(cars);