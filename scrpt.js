'use strict'

function getMathResult(num1, num2) {
	let result = []
	let count = num1

	for (let i = 0; i < num2; i++) {
		result.push(count)
		count += num1
	}

	return result.join('---')
}

console.log(getMathResult(5, 10))
