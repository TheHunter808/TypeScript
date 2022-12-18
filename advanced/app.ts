//-------------- INTERSECTION

/**
 * //EXAMPLE: 1

type Admin = {
	name: string;
	privilges: string[];
};

type Employee = {
	name: string;
	startDate: Date;
};


type ElevatedEmployee = Admin & Employee;


const e1: ElevatedEmployee = {
    name: "Timmy",
    privilges: ['create-server'],
    startDate: new Date();
}

//EXAMPLE 2

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;
 * 
 */

//------------- Type Guards

/**
*type Admin = {
	name: string;
	privilges: string[];
};

type Employee = {
	name: string;
	startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

//SCENE 1
function add(a: Combinable, b: Combinable) {
	if (typeof a === 'string' || typeof b === 'string') {
		return a.toString() + b.toString();
	}

	return a + b;
}

//SCENE 2

//we may have a scene where we can't type guard with typeof, like in the scenario of an object check. We can not directly access the properties for check, nor we can do typeof === 'object'. in that case, the following hack will work

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
	console.log(`Name: ${emp.name}`);
	// console.log(`Privileges: ${emp.privileges}`);
	//👆 this will not work

	if ('privileges' in emp) {
		console.log(`Privileges: ${emp.privileges}`);
	}

	if ('startDate' in emp) {
		console.log(`Start Date: ${emp.startDate}`);
	}
}

*/

//------------- Discriminated Union

/**
*interface Bird {
	flyingSpeed: number;
	type: 'bird'; //name is upto you
}

interface Horse {
	runningSpeed: number;
	type: 'Horse';
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
	let speed;
	switch (animal.type) {
		case 'bird':
			speed = animal.flyingSpeed;
			break;
		case 'Horse':
			speed = animal.runningSpeed;
	}

	console.log(`Moving at the speed of : ${speed}`);

	// console.log(`Moving with speed: ${animal.runningSpeed}`);
}

moveAnimal({ type: 'bird', flyingSpeed: 1000 });

*/

//--------- Type Casting
