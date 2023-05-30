/**
 * Factory function for the Electricity app.
 * Manages electricity units, top-ups, appliance usage, and related calculations.
 * @returns {Object} The public interface of the Electricity app.
 */
function Electricity() {
    // Initialize variables
    let unitsAvailable = 0;
    let totalCostUnitsBought = 0;
    let totalCostAmountSpent = 0;
    let isAdvanceUsed = false;

    //initializeElectricityDataFromLocalStorage();


    // do we want to go with this or array? 
    // Map appliances to their unit usage
    let appliances = {
        'Stove': 10, 
        'Kettle': 5, 
        'TV': 3, 
        'Fridge': 13
    };

    // Load data from localStorage, if available
    function initializeElectricityDataFromLocalStorage(){
        const storedData = localStorage.getItem('electricityData');
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            unitsAvailable = parsedData.unitsAvailable;
            totalCostUnitsBought = parsedData.totalCostUnitsBought;
            totalCostAmountSpent = parsedData.totalCostAmountSpent;
            isAdvanceUsed = parsedData.isAdvanceUsed;
        }
    }

    function saveDataToLocalStorage() {
        const data = {
            unitsAvailable: unitsAvailable,
            totalCostUnitsBought: totalCostUnitsBought,
            totalCostAmountSpent: totalCostAmountSpent,
            isAdvanceUsed: isAdvanceUsed
        };
        localStorage.setItem('electricityData', JSON.stringify(data));
    }
    


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
        let unitsRequired = appliances[appliance];

        if (unitsAvailable >= unitsRequired) {
            unitsAvailable -= unitsRequired;
            return true;
        } else {
            return false;
        }    
    }

    function advanceTaken() {
        return isAdvanceUsed;
    }

    function totalAmountSpent() {
        return totalCostAmountSpent.toFixed(2);
    }    

    function totalUnitsBought(){
        return totalCostUnitsBought;
    }

    return {
        advanceTaken,
        topUpElectricity,
        getUnitsAvailable,
        useAppliance,
        totalAmountSpent,
        totalUnitsBought,
        //saveDataToLocalStorage

    }
}
