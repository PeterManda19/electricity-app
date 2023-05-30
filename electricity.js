function Electricity() {
    // Initialize variables
    let unitsAvailable = 0;
    let totalCostUnitsBought = 0;
    let totalCostAmountSpent = 0;
    let isAdvanceUsed = false;


    // do we want to go with this or array? 
    // Map appliances to their unit usage
    let appliances = {
        'Stove': 10, 
        'Kettle': 5, 
        'TV': 3, 
        'Fridge': 13
    };

    function topUpElectricity(amount) {
        let units = 0;

        if (amount === 10) {
            units = 7;
        } else if (amount === 20) {
            units = 14;
        } else if (amount === 50) {
            units = 35;
        } else if (amount === 30 && !isAdvanceUsed) {
            units = 21;
            isAdvanceUsed = true;
        }

        unitsAvailable += units;
        totalCostUnitsBought += units;
        totalCostAmountSpent += amount;
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
