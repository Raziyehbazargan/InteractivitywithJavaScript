/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */
function billingFunction(){
  var billingName = document.getElementById('billingName');
  var billingZipCode = document.getElementById('billingZip');

  if(document.getElementById('same').checked==true){
    billingName.value = document.getElementById('shippingName').value;
    billingZipCode.value =  document.getElementById('shippingZip').value;
  }
  else{
    billingName.value = null;
    billingZipCode.value =  null;
  }
}
