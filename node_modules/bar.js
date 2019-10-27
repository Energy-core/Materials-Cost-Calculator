// Class for corrugated bar
class Bar {
	constructor(diam, length, pkgSize, shape) {
		this.diameter = diam; // number, in 1/8ths of an inch
		this.length = length; // number
		this.shape = shape; // 'straight' or 'angled'
		this.packageSize = pkgSize; // number, minimum purchase amount
		this._unitCost = 0;
	}
	
	get unitCost() {
		return this._unitCost;
	}
	
	set unitCost(num) {
		if (typeof num == 'number') {
			this._unitCost = num;
		}
	}
	
	packageCost() {
		return this.packageSize * this.unitCost;
	}
	
	static getBar(code, cost) {
		// split the code into its parameters
		let codeArr = code.split('-');
		// initialize Item object
		let newBar = new Bar (Number(codeArr[0]), Number(codeArr[1]), Number(codeArr[2]), (codeArr[3]));
		newBar.name = code.split('-').join('');
		// set bar cost
		newBar.unitCost = cost;
		return newBar;
	}
	
}

module.exports = Bar;

// test code: use /* */ to disable 
/* let bar1 = Bar.getBar('8-12-04-S');
console.log(bar1);


*/