// Code your solution in this file!
function returnFirstTwoDrivers() {
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return drivers.slice(0, 2);
    
};
console.log(returnFirstTwoDrivers());
 function returnLastTwoDrivers() {
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return drivers.slice(-2);
 };
 console.log(returnLastTwoDrivers());

 
    const selectingDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers];
 
    console.log(selectingDrivers[0]());
    console.log(selectingDrivers[1]())

    function createFareMultiplier(multiplier) {
        return function(fare) {
            return fare * multiplier;
        };
    };

    function fareDoubler(createFareMultiplier) {
        return createFareMultiplier * 2;
    };
    function fareTripler(createFareMultiplier) {
        return createFareMultiplier * 3;
    };

    function selectDifferentDrivers(drivers, driverFunction) {
        return driverFunction(drivers);

    };
    console.log(returnFirstTwoDrivers())