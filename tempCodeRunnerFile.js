let result = ''
const lines = 6

for (let i = 1; i <= lines; i++) {
	for (let j = 0; j < i; j++) {
		result += '*'
		// for (let k = 0; k < j; k++) {}
	}
	result += '\n'
}