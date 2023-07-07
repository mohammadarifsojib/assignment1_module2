// Exercise 1:
const obj = { name: 'John', age: 30, city: 'New York' }
const arr = [10, 20, 30, 40]
const destructureExample = function(obj, arr){
    const {name, age, } = obj
    const [first, , third, ] = arr
    return {
        name,
        age
    }
}
document.getElementById('ex-1').innerHTML = `<b>Result:</b> ${JSON.stringify(destructureExample(obj, arr))}`

// Exercise 2:
const sumNumbers = (...args) => {
    let sum = 0
    for(let arg of args){
        sum += arg
    }
    return sum
}
document.getElementById('ex-2').innerHTML = `<b>Result:</b> ${sumNumbers(1, 2, 3, 4, 5)}`

// Exercise 3:
const createGreeting = (name) => `Hello, ${name}! Welcome to our website.`
document.getElementById('ex-3').innerHTML = `<b>Result:</b> ${createGreeting('Alice')}`

// Exercise 4:
const isEven = (x) => (x % 2 === 0 ? 'Even' : 'Odd')
document.getElementById('ex-4').innerHTML = `<b>Result:</b> ${isEven(7)}`

// Exercise 5:
const multiply = (a, b) => a * b
document.getElementById('ex-5').innerHTML = `<b>Result:</b> const multiply = (a, b) => a * b`

// Exercise 6:
const getLargestNumber = (num1, num2) => ( num1 > num2 || num2 > num1 ) ? num1 : num2
document.getElementById('ex-6').innerHTML = `<b>Result:</b> ${getLargestNumber(10, 5)}`

//Exercise 7:
const address = { street: '123 Main St', country: 'USA', }
const getAddressCity = (address) => address ?. city ?? 'unkonwn'
document.getElementById('ex-7').innerHTML = `<b>Result:</b> ${getAddressCity(address)}`

// Exercise 8:
const doubleNumbers = (numbers) => {
    return numbers.map( (number) => number * 2 )
}

document.getElementById('ex-8').innerHTML = `<b>Result:</b> ${JSON.stringify(doubleNumbers([1, 2, 3, 4, 5]))}`

// Exercise 9:
const filterEvenNumbers = (numbers) => {
    return numbers.filter( (number) => number % 2 === 0 )
}

document.getElementById('ex-9').innerHTML = `<b>Result:</b> ${JSON.stringify(filterEvenNumbers([1, 2, 3, 4, 5]))}`

// Exercise 10:
const sumArray = (numbers) => {
    return numbers.reduce( (total, number) => total + number , 0 )
}
document.getElementById('ex-10').innerHTML = `<b>Result:</b> ${JSON.stringify(sumArray([1, 2, 3, 4, 5]))}`

// Exercise 11:
const sortNumbers = (numbers) => {
    return numbers.sort( (a, b) => a - b )
}
document.getElementById('ex-11').innerHTML = `<b>Result:</b> ${JSON.stringify(sortNumbers([5, 2, 8, 1, 4]))}`