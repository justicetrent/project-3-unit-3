//FOCUS SECTION
$('#name').focus();                              // the cursor is focused on the "Name" textbox as soon as the page is loaded.
//JOB ROLES SECTION 
$('#other-title').hide();                      //The intial hide of the 'other-title' textbox that I created 
$('#title').on('change', function () {        //When the time comes for the user to chose a Job Role, the computer needs to perform this function. 
    if ($(this).val() === 'other') {         // If the users job choice equal 'other'...
        $('#other-title').show();           // Then, a textbox with the id of other-title is supposed to appear below the Job Roles dropdown
    } else {
        $('#other-title').hide();     // If the user chooses any other option on the list, the textbox with the id of other-title does not appear. 
    }
});
//T-SHIRT SECTION
$('#colors-js-puns').hide();                                                                                                        // hides all of the colors in the colors-js-puns family 
$('#design').on('change', function () {                                                                                            // The goal of the following code is to make sure that before the user is able to select a color for the t-shirt, that they first select the correct theme that coincides with the correct color options. 
    if ($('#design').val() === 'js puns') {                                                                                       // created a if statement that says if the value of the id 'design' equals 'js puns' (the user chooses the t-shirt theme js-puns)
        $('#color').html(`<option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>                            
        <option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option> 
        <option value="gold">Gold (JS Puns shirt only)</option>`);
        $('#colors-js-puns').show();                                                                                            // ^above choses only the colors that are available with for the puns-js theme, using the backtick method.
    } else if ($('#design').val() === "heart js") {                                                                            // continues original if statement with a else if part that will select the remaining color options if the user decides to chose the other theme I heart js. 
        $('#color').html(`<option value="tomato">Tomato (I &#9829; JS shirt only)</option>
        <option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option> 
        <option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option>`)
        $('#colors-js-puns').show();                                                                                        // Shows only the colors that coincide with the i heart js theme t-shirt. 

    } else { $('#colors-js-puns').hide(); }                                                                               // Hides all of the colors when there is no t-shirt theme selected. 
});
//ACTIVITY SECTION                                                                                                       //============================================================================================================================================================================================================================
let totalActivityCost = 0;                                                                                              // Defined the variable totalActivityCost, and set its value equal to 0.
let label = $(`<label>Total: $${totalActivityCost}</label>`);                                                          // Defined the variable label, and defined the variable by creating a label element, and using template literal to place the value of the totalActivityCost inside the label element. 
$('.activities').append(label);                                                                                       // Appended my newly created label elements to an HTML element that holds the class of activities. 

$('[type = "checkbox"]').change((event) => {                                                                            // Created a change event listener, to listen for the selections the user is clicking on to select activities. 
    totalActivityCost = 0;                                                                                             // I set the totalActivityCost to 0, even after the variable was defined so that its value would display on the page, everytime thereafter, that totalActivityCost is called, its value is updated to hold the cost of the activity. 
    if ($(`input[name='all']`).prop('checked')) {                                                                     // So, totalActivityTotal is just a container that holds costs, and adds those costs together as the user selects activities to participate in.  
        totalActivityCost += 200;
    }
    if ($(`input[name='js-frameworks']`).prop('checked')) {                                                         // Overall, in the Activity Section I just created a series of if statements that simply says that when particular element is selected, then add its price to the totalActivityCost that is displayed in the bottom right corner of that section. 
        $(`input[name='express']`).attr('disabled', true);                                                         // For a few of the elements however, particularly, the (express, and js-frameworks) and (node, and js-lib) activities each have conflicts with their date and time, so eliminate the users confustion about which activities they are able to participate in, and others that have conflicting scheduling, I attached else statements to the original if statements that says that the express activity is selected then disable js-frameworks from the ability to be selected. 
        totalActivityCost += 100;
    } else {
        $(`input[name='express']`).removeAttr('disabled');
    }
    if ($(`input[name='js-libs']`).prop('checked')) {
        $(`input[name='node']`).attr('disabled', true);
        totalActivityCost += 100;
    } else {
        $(`input[name='node']`).removeAttr('disabled');
    }
    if ($(`input[name='node']`).prop('checked')) {
        $(`input[name='js-libs']`).attr('disabled', true);
        totalActivityCost += 100;
    } else {
        $(`input[name='js-libs']`).removeAttr('disabled');
    }
    if ($(`input[name='express']`).prop('checked')) {
        $(`input[name='js-frameworks']`).attr('disabled', true);
        totalActivityCost += 100;
    } else {
        $(`input[name='js-frameworks']`).removeAttr('disabled');
    }
    if ($(`input[name='build-tools']`).prop('checked')) {
        totalActivityCost += 100;
    }
    if ($(`input[name='npm']`).prop('checked')) {
        totalActivityCost += 100;
    }

    label.html(`<label>Total: $${totalActivityCost}</label>`);
});
//PAYMENT SECTION 
$('.credit-card').show();                                                                   //shows the credit card option of payment originally, and hides the <p></p> that contains information about paying with other forms of payment(Bitcoin, and paypal)
$('p').hide();
$('#payment').on('change', function () {                                                  // The set of instructions that the computer follows in terms of how to function when the user chooses different payment methods. 
    if ($(this).val() == 'credit card') {                                                // A series of if statements sets the conditions that the function performs. Each payment method has its own if statement that allows it respective information to be dispayed when necessary and hidden when that particular payment method doesn't apply. 
        $('#credit-card').show();
        $('p').hide();
    } else {
        $('#credit-card').hide();

    }
    if (($(this).val() == 'paypal')) {
        $('p:first').show();
        $('p:last').hide();

    }
    if ($(this).val() == 'bitcoin') {
        $('p:last').show();
        $('p:first').hide();
    }
});



// VALIDATOR SECTION*****************************************

// NAME VALIDATION
function userName() {                                                                                           // Here is the Name validation function 
    const name = /[A-Za-z]/;                                                                                   // Created a RegEx to test the value of the name that is being entered to exclude numbers and other characters 
    if (name.test($('#name').val())) {
        $('#name').prev().text("Name:").css('color', 'black');                                                // takes the id name (the value that the user entered) if it meets the RegEx standards, the code will run, if not a message will appear to enter a valid name. 
        return true;
    } else {
        $('#name').prev().text("Please enter a valid Name.").css('color', 'red');
    }
}
$('input#name').on('blur', (event) => {
    userName();                                             // Calls the function for real time data. 
});

// EMAIL VALIDATION                                                                                     // the logic that I used in the Name validatio was mirrored for the Email validation, just using the appropiate id to match the HTML
function userEmail() {
    const email = /^[A-Za-z]+@[A-Za-z]+.[A-Za-z]+$/;
    if (email.test($('#mail').val())) {
        $('#mail').prev().text("Email:").css('color', 'black');
        return true;
    } else {
        $('#mail').prev().text("Please enter a valid Email.").css('color', 'red');
    }
}
$('input#mail').on('blur', (event) => {
    userEmail();
});


// ACTIVITY VALIDATION
function userActivity() {                                                                                       // is very similar to the Name and Email validations, but uses the is(); method to determine whether at least one of the checkboxes in the list has been checked 
    if ($('input[type="checkbox"]').is(":checked")) {

        $('.activities legend').text("Register for Activities:").css('color', 'black');                     // accesses the first child of the legend element (.activities) to change the language Register for Activities title to a error message if a checkbox has not been checked.
        return true;
    }
    else if ($('input[type="checkbox"]').is(":not(:checked)")) {
        $('.activities legend').text("Please select at least one Activity").css('color', 'red');
        return false;
    }
}
$('input[type="checkbox"]').on('change', (event) => {
    userActivity();
});

// CREDIT CARD PAYMENT VALIDATION
function creditCardPayment() {                                                                          // Everything about the credit card payment section, and the zip code, and cvv code validations share the same logic as the name and the email validations, just with the proper id's for the relevent elements. 
        const creditCard = /^\d{13,16}$/
        if (creditCard.test($('#cc-num').val())) {
            $('#cc-num').prev().text("Name:").css('color', 'black');
            return true;
        } else {
            $('#cc-num').prev().text("Please enter a valid Card Number.").css('color', 'red');
        }
    }
    $('#cc-num').on('blur', (event) => {
        creditCardPayment();
    });

    // PROPER ZIP CODE VALIDATION
    function zipCode() {
        const zipNum = /^\d{5}$/
        if (zipNum.test($('#zip').val())) {
            $('#zip').prev().text("Zip Code:").css('color', 'black');
            return true;
        } else {
            $('#zip').prev().text("Please enter a valid zip code.").css('color', 'red');
        }
    }
    $('#zip').on('blur', (event) => {
        zipCode();
    });

    // PROPER CVV CODE VALIDATION             
    function cvvCode() {
        const cvvNum = /^\d{3}$/
        if (cvvNum.test($('#cvv').val())) {
            $('#cvv').prev().text("CVV:").css('color', 'black');
            return true;
        } else {
            $('#cvv').prev().text("Please enter a valid cvv code.").css('color', 'red');
        }
    }
    $('#cvv').on('blur', (event) => {
        cvvCode();
    });
    // FINAL CALLING OF ALL FUNCTIONS INTO A FORM FUNCTION 
    $('form').on('submit', (event) => {
        if ($('#payment').val() === 'credit card'){                                                                     // here I used a set of nested if statements that basically separate my validations to only validate the necessary fields that are necessary for the users preferred method of payment. 
            if (userName() & userEmail() & userActivity() & creditCardPayment() & zipCode() & cvvCode()) {
                return true
            } else {event.preventDefault(); // if the conditions are not met if the user chosese to pay with a credit card, then the page will not load. 
        }
    }  
        if(($('#payment').val() === 'paypal' || 'bitcoin')){
            if(userName() & userEmail() & userActivity()){
                    return true
                } else { 
                    event.preventDefault();
                
                }
        }
    });