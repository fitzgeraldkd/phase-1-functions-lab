// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    // HQ is located on 42nd street
    return Math.abs(location - 42);
}

function distanceFromHqInFeet(location) {
    // 264 feet per block
    let blocks = distanceFromHqInBlocks(location);
    return blocks * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance > 2500) {
        return 'cannot travel that far';
    } else if (distance > 2000) {
        return 25;
    } else if (distance > 400) {
        return 0.02 * (distance - 400);
    } else {
        return 0;
    }
}