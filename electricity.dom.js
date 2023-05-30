// DOM element(s) references
const topUpButtons = document.querySelectorAll('.topup');  // Radio buttons for top-up amounts
const useButtons = document.querySelectorAll('.usage');   // Radio buttons for appliance usage
const topUpNowButton = document.querySelector('.topupNow');  // Top-up button
const useNowButton = document.querySelector('.useNow');   // Appliance usage button
const unitsAvailableElement = document.querySelector('.unitsAvailable');   // Element displaying units available
const totalUnitsElement = document.querySelector('.totalUnits');   // Element displaying total units bought
const totalAmountElement = document.querySelector('.totalAmount');   // Element displaying total amount spent
const advanceTakenElement = document.querySelector('.advanceTaken');   // Element displaying advance taken status

// Factory Function instance 
const electricity =  Electricity();

/**
 * Handle the top-up button click event.
 */
function handleTopUpClick() {
    const selectedAmount = document.querySelector('input[name="buyElectricity"]:checked');
    if (selectedAmount) {
        const amountValue = Number(selectedAmount.value);
        electricity.topUpElectricity(amountValue);
        updateDisplay();
    } else {
        // Display an error message
        console.error('No top-up amount selected.');
    }
}

/**
 * Handle the appliance usage button click event.
 */
function handleUseClick() {
    const selectedAppliance = document.querySelector('input[name="useElectricity"]:checked').value;
    const canUseAppliance = electricity.useAppliance(selectedAppliance);
    if (canUseAppliance) {
        updateDisplay();
    } else {
        alert('Not enough electricity units available to use this appliance.');
    }
}

/**
 * Update the display elements with the current values from the Electricity app.
 */
function updateDisplay() {
    unitsAvailableElement.textContent = electricity.getUnitsAvailable();
    totalUnitsElement.textContent = electricity.totalUnitsBought();
    totalAmountElement.textContent = electricity.totalAmountSpent();
    
    if (electricity.advanceTaken()) {
        advanceTakenElement.classList.remove('hidden');
    } else {
        advanceTakenElement.classList.add('hidden');
    }

    // Save the data to localStorage
    electricity.saveDataToLocalStorage();   
}

// Load data from localStorage, if available
electricity.initializeElectricityDataFromLocalStorage();

// DOM events here 
topUpNowButton.addEventListener('click', handleTopUpClick);
useNowButton.addEventListener('click', handleUseClick);

// Initial update of the display
updateDisplay();
