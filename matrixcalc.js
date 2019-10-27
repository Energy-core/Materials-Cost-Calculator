// Matrix multiplicator for materials cost calculations.

const MatrixCalc = {
	// Validate matrix and get its dimensions
	getMatrixDimensions(matrix) {
		let dim1 = matrix.length;
		let dim2 = matrix[0].length;
	  let sameLength = (arr) => {
		let bool = true;
		arr.forEach((element) => {
		  if(element.length != arr[0].length) {
		  bool = false;
		  }
		});
		return bool;
	  }
	  if(sameLength(matrix)) {
		return [dim1, dim2];
	  } else {
		console.log('Error: Matrix is not well defined.');
	  }
	},
	// Now for the multiplication function.
	multiplyMatrices(arr1, arr2) {
		// Validate both matrices
	  let dim1 = this.getMatrixDimensions(arr1);
	  let dim2 = this.getMatrixDimensions(arr2);
	  // Initialize result array
	  let result = new Array(dim1[0]);
	  // Initialize current nested array
	  for (let i = 0; i < dim1[0]; i++) {
		result[i] = new Array(dim2[1]);
		// Initialize current element
		for (let j = 0; j < dim2[1]; j++) {
		  result[i][j] = 0;
		  // Perform multiplication operation
		  for (let k = 0; k < dim1[1]; k++) {
			result[i][j] += arr1[i][k] * arr2[k][j];
			// This goes through each column, and each row, multiplying the number on the kth row from the first matrix by the number on the kth column from the second matrix.
		  }
		}
	  }
	  return result;
	}
}

module.exports = MatrixCalc


// TEST CODE: REMOVE /* */ TO ENABLE

/*
const matrix1 = [
[1, 3, 4, 5]
]
const matrix2 = [
[2],
[4],
[5],
[6]
]
console.log(MatrixCalc.multiplyMatrices(matrix1, matrix2));
*/

/* 
const matrix1 = [
  [1, 3, 4, 4],
  [3, -6, -8, 20],
  [6, 4, 5, -66],
  [1, 0, 1, 1]
];
const matrix2 = [
  [1, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1]
];
const newMatrix = MatrixCalc.multiplyMatrices(matrix1, matrix2);
//Test logs
console.log(matrix1);
console.log(matrix2);
console.log(MatrixCalc.getMatrixDimensions(matrix1));
console.log(MatrixCalc.getMatrixDimensions(matrix2));
console.log(newMatrix);
*/