function oilPrice(disel, petrol, octane){
    let firstPrice = disel * 114;
    let secondPrice = petrol * 130;
    let thirdPrice = octane * 135;
    const totalPrice = firstPrice + secondPrice + thirdPrice;
    return totalPrice;
    }
    const result = oilPrice(0,2,3);
    console.log(result);
 