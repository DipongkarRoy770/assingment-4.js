// problem -1:
function cubeNumber(number) {
    return number * number * number;
}
const result = cubeNumber(3)
//console.log(result)

// problem-2:

function matchFinder(str1, str2) {
    if (str1.includes(str2)) {
        return true;
    }
    else {
        return false;
    }
}
var matching = matchFinder('dhaka collGE', 'dhaka');
//console.log(matching);

//problem-3:


function sortMaker(inputArray) {
    var firstElement = inputArray[0];
    var secondElement = inputArray[1];
    if (firstElement > secondElement) {
        return [secondElement, firstElement];
    }
    else if (firstElement < secondElement) {
        return [secondElement, firstElement]
    }
    else if (firstElement[0] === secondElement[1]) {
        return 'equal'
    }
}
var sortedArray = sortMaker([4, 6]);
//console.log(sortedArray);

//problem-4 :


function findAddress(obj) {
    if (typeof obj !== "object") {
        return 'please enter a valid object';
    }
    else {
        const street = obj.street || "__";
        const house = obj.house || "__";
        const society = obj.society || "__";
        return street + "," + house + "," + society;
    }
}
const address =
{
    street: 10,
    house: '',
    society: 'Earth Perfect'
}
const output = (findAddress(address))
//console.log(output)


// problem-5:

function canPay(changeArray, totalDue) {
    const totalCost = changeArray.reduce((sum, price) => sum + price, 0);
    if (totalCost <= totalDue) {
        return false;
    } else {
        return true;
    }
}
const results = canPay([1, 2, 5], 10)
//console.log(results)




