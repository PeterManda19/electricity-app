function Electricity() {
    // Initialize variables
    let unitsAvailable = 0;
    let totalUnitsBought = 0;
    let totalAmountSpent = 0;
    let advanceUsed = false;


    // do we want to go with this or array? 
    // Map appliances to their unit usage
    let appliances = {
        'Stove': 10, 
        'Kettle': 5, 
        'TV': 3, 
        'Fridge': 13
    };

    function topUpElectricity(amount) {


    }

    function getUnitsAvailable() {
        return unitsAvailable;
    }

    /*
    * return true and substract from unit available if there is enough units to use the appliance
    * other wise return false and do nothing.
    */
    function useAppliance(appliance) {
        
    }

    function advanceTaken() {
    }

    function totalAmountSpent() {
    }

    function totalUnitsBought(){
    }

    return {
        advanceTaken,
        topUpElectricity,
        getUnitsAvailable,
        useAppliance,
        totalAmountSpent,
        totalUnitsBought

    }
}