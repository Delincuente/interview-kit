/**
 * 1. how to get the length of the string without using (.length)
 * 
 * @param {String} str
 * @returns {Number} 
 */
function getStringLength(str) {
	let count = 0;
	for (const char of str) {
		count++;
	}
	return count;
}


/**
 * 2. how to remove characters which are not unique in the string 
 * Example: INPUT ==> "dolltie", OUTPUT ==> "dotie"
 * 
 * @param {String} str 
 * @returns {String}
 */
function removeNonUnique(str) {
	const freq = {};
	for (const char of str) {
		freq[char] = (freq[char] || 0) + 1;
	}

	const result = [...str]
		.filter(char => freq[char] === 1)
		.join('');

	return result;
}