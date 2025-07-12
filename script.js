let total = 0;
let discount = 0;
let grandTotal = 0;
let productCount = 0;

function cardClick(card) {
	const rightSideContainer = document.getElementById("ordered-list");

	// GETTING PRODUCT NAME AND PRICE
	const productName = card.childNodes[5].innerText;
	const productPrice = card.childNodes[7].innerText;

	// CREATING LIST ITEM
	const li = document.createElement("li");
	productCount++;
	li.innerText = `${productCount}. ${productName}`;

	// APPENDING TO ORDER LIST
	rightSideContainer.appendChild(li);

	// ENABLE MAKE PURCHASE BUTTON
	const makePurchaseEnable = document.getElementById("make-purchase");
	makePurchaseEnable.removeAttribute("disabled");

	// CALCULATE PRICE
	const productPriceFloat = parseFloat(productPrice);
	total += productPriceFloat;

	// UPDATE TOTAL PRICE DISPLAY
	const totalPriceSpan = document.getElementById("total-price-span");
	totalPriceSpan.innerText = total.toFixed(2) + " TK";

	// UPDATE GRAND TOTAL
	grandTotal = total;
	const grandTotalSpan = document.getElementById("total-span");
	grandTotalSpan.innerText = grandTotal.toFixed(2) + " TK";

	// ENABLE COUPON IF ELIGIBLE
	if (total >= 200) {
		document.getElementById("coupon-input-enable").removeAttribute("disabled");
		document.getElementById("coupon-button-enable").removeAttribute("disabled");
	}
}

function applyCoupon() {
	const inputCoupon = document.getElementById("coupon-input-enable");
	const inputCouponString = inputCoupon.value;

	if (inputCouponString === "SELL200") {
		discount = total * 0.2;
		grandTotal = total - discount;

		// UPDATE DISCOUNT DISPLAY
		const discountPrice = document.getElementById("discount-span");
		discountPrice.innerText = discount.toFixed(2) + " TK";

		// UPDATE GRAND TOTAL DISPLAY
		const grandTotalSpan = document.getElementById("total-span");
		grandTotalSpan.innerText = grandTotal.toFixed(2) + " TK";
	}
}

function goHome() {
	window.location.reload();
}
