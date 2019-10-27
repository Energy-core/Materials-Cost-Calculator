// Materials cost calculator for corrugated steel structures.
// The purpose of this program is to automatically calculate the cost of each construction project by inputting an array of steel structures, each of which requires different types of bar.

var Bar = require('bar');
var BarTypes = require('bartypes');
var MatrixCalc = require('matrixcalc');
var moment = require('moment');

// Define the structure class
class Structure {
	constructor(name, materialsArr){
	this._name = name;
	this._materials = materialsArr;
	this.type = 'Structure';
	}
	
	get name() {
		return this._name;
	}
	
	get materials() {
		return this._materials;
	}
	
	set materials(arr) {
		this._materials = arr;
	}
	// This method calculates the structure cost.
	// Materials arrays are built with the following syntax: [[typeOfBar, quantityRequired], ...]. This method uses the matrix calculator to return the dot product of both columns.
	materialCost() {
		let arr1 = [[]];
		let arr2 = [];
		for (let i = 0; i < this.materials.length; i++) {
			arr1[0].push(this.materials[i][0].unitCost);
			arr2.push([this.materials[i][1]]);
		}
		let totalCost = Number(MatrixCalc.multiplyMatrices(arr1, arr2));
		console.log('The materials cost of structure ' + this.name + ' is $' + totalCost + '.00.');
		return totalCost;
	}
}

// Define the project class
class Project {
	constructor(name, client, date) {
		this._name = name;
		this._client = client;
		this._dueDate = date
		this._structures = []
	}
	
	get name() {
		return this._name;
	}
	
	get client() {
		return this._client;
	}
	
	get dueDate() {
		return this._dueDate
	}
	
	set dueDate(string) {
		if (moment(string, 'MM/DD/YYYY',true).isValid()) {
			this._dueDate = string;
		}
		else {
			console.log('Error: invalid date format. Please use MM/DD/YYYY');
		}
	}
	
	get structures() {
		return this._structures;
	}
	
	addStructure(obj) {
		if(obj.type = 'Structure') {
			this._structures.push(obj);
		}
		else {
			console.log('Error: object not a structure');
		}
	}
	
	removeStructure(index) {
		return this._structures.splice(index, 1);
	}
	// Calculate project's total material cost
	materialCost() {
		let totalCost = 0
		this._structures.forEach(function(element) {
			totalCost += element.materialCost();
		});
		console.log('The total materials cost of project ' + this.name + ' is $' + totalCost + '.00.');
		return totalCost;
	}
}


// Test Project
const TestProject = new Project('Test Project', 'Department of Defense', '10/20/2020');

const Structure1 = new Structure('Structure 1', []);

Structure1.materials = [
[BarTypes.bar41215S, 2000],
[BarTypes.bar41215A, 100],
[BarTypes.bar30901S, 75]
];

const Structure2 = new Structure('Structure 2', []);
Structure2.materials = [
[BarTypes.bar81204S, 300],
[BarTypes.bar31225A, 15],
[BarTypes.bar30901S, 100],
[BarTypes.bar61207S, 50]
];

TestProject.addStructure(Structure1);
TestProject.addStructure(Structure2);
 
TestProject.materialCost();
