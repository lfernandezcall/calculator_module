// division
// module.exports.div = function(a, b) {
//     var result = (a / b).toFixed(2)

//     console.log("The division of " + a + " / " + b + " is: " + result + "!!!")
// }

// //Best practice
function div(a, b) {
	console.log("The division of " + a + " / " + b + " is: " + (a / b).toFixed(2) + "!!!")
}

module.exports = div

