// Data file for steel bar items to use in materials cost calculations.
const Bar = require('./bar.js');

// Bar codes are 6 characters long and have the following parameters:
// First 2 digits: diameter (in/8 for type 42, in/32 for type 60)
// 3rd digit: length
// 4-5th digits: packageSize
// last character: A for angled, S for straight
// Example: 4-12-15-A is the code for a bar with 1/2" (4/8") diameter, 12m length and angled shape, with a package size of 15.
// Parameters are broken by dashes to facilitate coding.

// Create objects for each bar type then store them in an object to export
const BarTypes = {
	bar30901S: Bar.getBar('3-09-25-S', 67),
	bar31225S: Bar.getBar('3-12-25-S', 118),
	bar31225A: Bar.getBar('3-12-25-A', 118),
	bar40901S: Bar.getBar('4-09-01-S', 146),
	bar41215S: Bar.getBar('4-12-15-S', 199),
	bar41215A: Bar.getBar('4-12-15-A', 199),
	bar51210S: Bar.getBar('5-12-10-S', 303),
	bar61207S: Bar.getBar('6-12-07-S', 425),
	bar81204S: Bar.getBar('8-12-04-S', 916),
}


module.exports = BarTypes;

// test logs
// console.log(barTypes.bar30901S);
