// function testThis() {
//     // console.log(this === global);
//     console.log(this)
// }
// testThis();

// const example = () => {
//     console.log(this);
// }

// const testObject = {
//     testMethod: example,
//     name: 'test'
// }
// testObject.testMethod();

// const city = {
//   name: "City Name",
//   population: 1000000,

//   getName() {
//     return this.name;
//   },

//   getCity() {
//     return this.population;
//   },

//   setValue(value, property) {
//     this[property] = value;
//   },
// };

// city.setValue(true, "hasRiver");
// console.log(city);

// function showName(message = 'Hello') {
//     console.log(`${message}, ${this.name}`)
// }

// const admin = {
//     name: 'Sergey',
//     showName
// }

// const manager = {
//     name: 'Ivan',
//     showName
// }

// admin.showName()
// manager.showName()

// showName.call(admin, 'Привет');
// showName.apply(manager, ['Хай']);

// const showAdminName = showName.bind(admin, 'Привет');
// showAdminName('Привет');
// showAdminName();


// const city = {
//     name: "Nizhniy Novgorod",
//     population: 1600000,
//     getCityName(){
//         return this.name
//     },
//     getCityPopulation(){
//         return this.population
//     },
//     setNewProps(prop, value){
//         this[prop] = value
//     }
// };

// const town = {
//     name: "Minsk",
//     population: 2600000,
// };

// city.setNewProps.call(town, 'name', "New York");
// const setPropsNewCity = city.setNewProps.bind(town);
// town.apply(city.newCity, {population, "10000000"});
// console.log(town);
// setPropsNewCity('river', 'Svisloch');
// console.log(town);

// function outerFunc () {
//     let counter = 0;
//     return function innerFunc() {
//         return ++counter;
//     }
// }


// const constr = outerFunc();
// console.log(constr());
// console.log(constr());
// console.log(constr());

// function createCounter(count = 0) {
//     // let count = 0;
//     return function counter() {
//         console.log(++count)
//     }
// }

// const counter1 = createCounter(10);
// const counter2 = createCounter();
// counter1();
// counter1();
// counter1();

// function example (a) {
// 	return function (b) {
// 		return function (c) {
// 			return a + b + c;
// 		}
// 	}
// } 
// console.log(example(1)(2)(3));