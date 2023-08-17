let total = 0;
const addedItems = {};

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

function handleClickBtn(target) {

    const selectedItemContainer = document.getElementById("selected-items");

    const itemName = target.parentNode.childNodes[1].innerText;

    if (!addedItems[itemName]) {
        // Check if the item hasn't been added before
        addedItems[itemName] = true;

        const li = document.createElement("li");
        li.innerText = itemName;
        selectedItemContainer.appendChild(li);
    }

    const price = target.parentNode.childNodes[5].innerText.split(" ")[1];
    total = parseInt(total) + parseInt(price);
    // document.getElementById("total-price").innerText = total;
    setInnerText("total-price", total);

}

function applyCoupon() {
    const couponCode = document.getElementById("coupon-code").value;
    if (couponCode == "hero") {
        const discountedAmount = total * 0.2;
        const grandTotal = total - discountedAmount;
        setInnerText("discount", discountedAmount);
        setInnerText("grand-total", grandTotal);
    } 
    else {
        alert("invalid coupon try again");    
    }
}