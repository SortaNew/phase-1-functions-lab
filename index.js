// Code your solution in this file!
function distanceFromHqInBlocks(st){
    if (st>=42)
        return st-42;
    else if (st<42)
        return 42-st;
}

function distanceFromHqInFeet(st){
    let distanceInFeet = distanceFromHqInBlocks(st)*264;
    return distanceInFeet;
}

function distanceTravelledInFeet(start, destination){
    if (start >= destination)
        return (start-destination)*264;
    else if (start < destination)
        return (destination-start)*264; 
}

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);
    
    if (distance<=400)
        return 0;
    else if (distance>400 && distance<=2000){
        return (distance-400)*.02;
    }
    else if (distance>2000 && distance<=2500){
        return 25;
    }
    else if (distance>2500){
        return `cannot travel that far`;
    }
}