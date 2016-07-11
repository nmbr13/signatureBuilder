var array = [];
var firstName, lastName, role, phone, skype, address;
var html = "";

function fillForm() {
    $('#name').text(firstName + " " + lastName);
    $('#line2').html("<strong>" + role + "</strong>" + ", " + "<a href='http://cmon.com' style='color:#442179;text-decoration:underline;'>CMON Inc.</a>");
    $('#line3').html("<strong>T: </strong>" + phone + " | <strong>Skype:</strong> " + skype);
    getAddress();
};

function getAddress() {
    switch (address) {
        case "USA":
            $('#logo').html('<a href="http://www.cmon.com/"><img src="http://assets.cmon.com/Logos/small%20logo.png" style="height:132px"alt="CMON Logo" />');
            $('#line4').text("1290 Old Alpharetta Road,");
            $('#line5').text("Alpharetta GA, 30005");
            $('#line6').hide();
            break;
        case "Brazil":
            $('#logo').html('<a href="http://www.cmon.com/"><img src="http://assets.cmon.com/Logos/small%20logo.png" style="height:151px"alt="CMON Logo" />');
            $('#line4').text("1290 Old Alpharetta Road,");
            $('#line5').text("São Paulo - SP");
            $('#line6').show().text("05409-003 Brazil");
            break;
        case "Singapore":
            $('#logo').html('<a href="http://www.cmon.com/"><img src="http://assets.cmon.com/Logos/small%20logo.png" style="height:151px"alt="CMON Logo" />');
            $('#line4').text("133 New Bridge Road");
            $('#line5').text("#20-09/10 Chinatown Point");
            $('#line6').show().text("Singapore 059413");
            break;
    }
}

function generateHTML() {
    $('#textArea').text($('#gSig').html());
}

function exportToHTML() {
    var myHTML = $('#gSig').html();
    window.open('data:text/text;charset=utf-8,' + escape(myHTML));
}

$('#submitButton').click(function(event) {
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
