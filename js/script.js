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
    if (($(this).val() == 'paypal')){
        $('p:first').show();
        $('p:last').hide();

    }
    if ($(this).val() == 'bitcoin'){
        $('p:last').show();
        $('p:first').hide();
    }
});

// $.validator.addMethod('valueNotEquals', function())function validateForm() {
//     var x = document.forms['#name']['user_name'].value;
//     if (x == "") {
//       alert("Name must be filled out");
//       return false;
//     }
//   }

  //$(document).ready(function() {
    $('input#name').on('blur', function() {
        if( $(this).val() == ''  || $(this).val() == "null"){
            $('#name').prev().text("Please enter a name.").css('color','red')
            return false;
        } else { $('#name').prev().text("Name:").css('color','black')
       return true;
      }
    });







