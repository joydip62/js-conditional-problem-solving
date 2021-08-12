/* 1. Swapno is running a promotional offer for Bkash users and Credit Cardholders. 
If you shop over 500 taka and pay by Bkash, you'll get 5% cashback up to 100 taka. 
If you shop over 500 taka and pay by Credit Card, you'll get 7% cashback up to 150 taka. 
Add a delivery charge of 50 taka afterward and display the total user payable amount. 
Now write a javascript program according to the scenario. */

var mainTaka = 500;
var bKash = true;
var card = false;
var delivery = 50;
var bKashDiscount = (mainTaka * 5) / 100;
var cardDiscount = (mainTaka * 7) / 100;
var bKashUpTo = 100;
var cardUpTo = 150;
var bKashPayWithOutDiscount = (mainTaka - bKashUpTo) + delivery;
var bKashPayWithDiscount = (mainTaka - bKashDiscount) + delivery;
var cardPayWithOutDiscount = (mainTaka - cardUpTo) + delivery;
var cardPayWithDiscount = (mainTaka - cardDiscount) + delivery;


if (mainTaka >= 500) {
    if (bKash) {
        if (bKashDiscount >= bKashUpTo) {
            console.log('apni cashback peyechen' + ' ' + bKashUpTo + 'tk and deliver charge soho pay korben' +  ' ' + bKashPayWithOutDiscount + 'tk');
        }else{
            console.log('apni cashback peyechen' + ' ' + bKashDiscount + 'tk and deliver charge soho pay korben' +  ' ' + bKashPayWithDiscount + 'tk');
        }
    }else if (card) {
        if (cardDiscount >= cardUpTo) {
            console.log('apni cashback peyechen' + ' ' + cardUpTo + 'tk and deliver charge soho pay korben' +  ' ' + cardPayWithOutDiscount + 'tk');
        }else{
            console.log('apni cashback peyechen' + ' ' + cardDiscount + 'tk and deliver charge soho pay korben' +  ' ' + cardPayWithDiscount + 'tk');
        }
    }else{
        console.log(`sorry no cashback! if you pay by Bkash, you'll get 5% cashback and pay by Credit Card, you'll get 7% cashback`);
    }
}else{
    console.log(`sorry no cashback! if you shop over 500 taka and pay by Bkash, you'll get 5% cashback and pay by Credit Card, you'll get 7% cashback`);
}
