// Code your solution in this file!


function distanceFromHqInBlocks(pickupLocation) {
    if (pickupLocation > 42) {
        return (pickupLocation - 42);
    } else if(pickupLocation < 42) {
        return (42 - pickupLocation)
    }
}



function distanceFromHqInFeet(pickupLocation) {
    let distance = (distanceFromHqInBlocks(pickupLocation) * 264);
    return (distance);
}



function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start - destination) * 264;
    } else if(destination > start) {
        return (destination - start) * 264;
    }
}



function calculatesFarePrice(start, destination) {
    let distanceInFeet = (distanceTravelledInFeet(start, destination));
    if (distanceInFeet <= 400) {
        return 0;
    } else if (distanceInFeet > 400 && distanceInFeet < 2000) {
        return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
        return 25;
    } else if (distanceInFeet > 2500) {
        return 'cannot travel that far'
    }
}
