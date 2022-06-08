// Code your solution in this file!
function distanceFromHqInBlocks(blockDistance) {
    if(blockDistance > 42) {
        return blockDistance - 42;
    }else{
        return 42 - blockDistance;
    }
}

function distanceFromHqInFeet(blockDistance) {
    return distanceFromHqInBlocks(blockDistance) * 264;
}

function distanceTravelledInFeet(start, destination) {
    if (start < destination){
        return (destination - start) * 264;
    }else {
        return (start - destination) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    const blockDistance = distanceTravelledInFeet(start, destination);
    if (blockDistance < 400){
        return blockDistance * 0;
    }else if (blockDistance > 400 && blockDistance < 2000){
        return 0.02 * (blockDistance - 400)
    }else if (blockDistance > 2000 && blockDistance < 2500){
        return 25;
    }else {
        return 'cannot travel that far'
    }
}



