function getTextElementValueById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal(){
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total')
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    // const subTotalElement = document.getElementById('sub-total');
    // subTotalElement.innerText = currentSubTotal;
    setTextElementValueById('sub-total', currentSubTotal);



    /* 
    calculate tax
    */
   const taxTotal = currentSubTotal * 0.1;
   setTextElementValueById('tex-amount', taxAmount);
   const finalAmount = currentSubTotal + taxAmount;
   setTextElementValueById('final-total', finalAmount);
}