var array = [];
var firstName,lastName,role,phone,skype,address;
var html = "";
$('button').click(function(event) {
    // Get all the forms elements and their values in one step
    array = $('#myForm').serializeArray();
    console.log(array);
    firstName = array[0].value;
    lastName = array[1].value;
    role = array[2].value;
    phone = array[3].value;
    skype = array[4].value;
    address = array[5].value;
    console.log(address);
    fillForm();
    generateHTML();
});
function fillForm(){
  $('#name').text(firstName + " " + lastName);
  $('#line2').html(role + " <a href='http://cmon.com'>, CMON Inc.</a>");
  $('#line3').html("<strong>T: </strong>" + phone + " | <strong>Skype:</strong> " +  skype);
  getAddress();
};
function getAddress(){
  switch(address){
    case "USA":
      $('#line4').text("1290 Old Alpharetta Road,");
      $('#line5').text("Alpharetta GA, 30005");
      $('#line6').hide();
      break;
    case "Brazil":
      $('#line4').text("1290 Old Alpharetta Road,");
      $('#line5').text("São Paulo - SP");
      $('#line6').show().text("05409-003 Brazil");
      break;
    case "Singapore":
      $('#line4').text("133 New Bridge Road");
      $('#line5').text("#20-09/10 Chinatown Point");
      $('#line6').show().text("Singapore 059413");
      break;
  }
}
function generateHTML(){
  $('#textArea').text($('#gSig').html());
}
function getPhone(phone){

}
