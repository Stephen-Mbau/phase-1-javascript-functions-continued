// code your solution here
function saturdayFun (activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}
const mondayWork = function(task = 'go to the office') {
    return `This Monday, I will ${task}.`;
}
function wrapAdjective (symbol = '*') {
    const innerFunction = function (character = 'a hardworker') {
        return `You are ${symbol}${character}${symbol}!`
    }
    return innerFunction;
}
console.log (wrapAdjective('*')('a hardworker'))