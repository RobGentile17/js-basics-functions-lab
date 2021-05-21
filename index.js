// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    let distance
        let hq = 42
    if (hq > location) {
        distance = hq-location
    } else {distance = location - hq}
    return distance
    }
    
    function distanceFromHqInFeet(location) {
        const distFeet = (distanceFromHqInBlocks(location) * 264)
        return (distFeet)
    }
   
    function distanceTravelledInFeet (start, stop ) {
        if (start < stop) {
            return (stop - start) *264 
        } else {
            return (start - stop) *264
        }
    }
    function calculatesFarePrice (start, destination) {
        const distance = distanceTravelledInFeet(start, destination);
      
        if (distance <= 400) {
          return 0;
        } else if (distance > 400 && distance <= 2000) {
          return .02 * (distance - 400);
        } else if (distance > 2000 && distance < 2500) {
          return 25;
        } else {
          return 'cannot travel that far';
        }
      }