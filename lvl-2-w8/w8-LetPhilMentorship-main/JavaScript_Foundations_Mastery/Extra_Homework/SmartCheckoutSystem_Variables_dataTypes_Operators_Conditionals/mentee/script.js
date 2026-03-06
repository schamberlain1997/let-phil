document.getElementById("cartTotal")
document.getElementById("membership")
document.getElementById("coupon")
document.getElementById("calcBtn")
document.getElementById("message")
document.getElementById("subtotalText")
document.getElementById("discountText")
document.getElementById("shippingText")
document.getElementById("finalTotalText")

document.getElementById("calcBtn").addEventListener("click", function(){
    const cartTotal = Number(document.getElementById("cartTotal").value);
    const membership = document.getElementById("membership").value;
    const coupon = document.getElementById("coupon").value;
    let hasCoupon = Boolean
    if (coupon === "yes"){
        hasCoupon = true
    }
    else{hasCoupon = false};

    if (cartTotal === "" || cartTotal <= 0){
        document.getElementById("message").textContent = "Warning: Please enter a valid cart total.";
        return;
    }

    let subtotal = cartTotal;
    let discountAmount;
    let shippingCost;
    let totalAfterDiscount;
    let finalTotal;

    if (membership === "premium"){
        discountAmount = .15 * subtotal;
    } else if (membership === "vip"){
        discountAmount = .25 * subtotal
    } else{
        discountAmount = 0 
    };

    if (hasCoupon === true){
        discountAmount += .10 * subtotal
    };

    totalAfterDiscount = subtotal - discountAmount;

    if(totalAfterDiscount >= 150){
        shippingCost = 0
    } else {
        shippingCost = 9.99
    };

    finalTotal = totalAfterDiscount + shippingCost;

    document.getElementById("subtotalText").textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById("discountText").textContent = `$${discountAmount.toFixed(2)}`;
    document.getElementById("shippingText").textContent = `$${shippingCost.toFixed(2)}`;
    document.getElementById("finalTotalText").textContent = `$${finalTotal.toFixed(2)}`;

    if (shippingCost === 0){
        document.getElementById("message").textContent = "Free Shipping Unlocked"
    } else {
        document.getElementById("message").textContent = `Add $${(150-totalAfterDiscount).toFixed(2)} to unlock free shipping(only applies to standard purchases without a coupon)`
    }

})






