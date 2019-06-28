$('#name').focus();                            // the cursor is focused on the "Name" textbox as soon as the page is loaded.
$('#other-title').hide();                     //The intial hide of the 'other-title' textbox that I created 
$('#title').on('change', function(){         //When the time comes for the user to chose a Job Role, the computer needs to perform this function. 
   if($(this).val() === 'other'){           // If the users job choice equal 'other'...
    $('#other-title').show();              // Then, a textbox with the id of other-title is supposed to appear below the Job Roles dropdown
   } else { $('#other-title').hide();     // If the user choses any other option on the list, the textbox with the id of other-title does not appear. 
    }
});
$('#colors-js-puns').hide();                                                                                                        // hides all of the colors in the colors-js-puns family 
$('#design').on('change', function(){                                                                                              // The goal of the following code is to make sure that before the user is able to select a color for the t-shirt, that they first select the correct theme that coincides with the correct color options. 
    if($('#design').val() === 'js puns'){                                                                                         // created a if statement that says if the value of the id 'design' equals 'js puns' (the user chooses the t-shirt theme js-puns)
        $('#color').html(`<option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>                            
        <option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option> 
        <option value="gold">Gold (JS Puns shirt only)</option>`);
        $('#colors-js-puns').show();                                                                                            // ^above choses only the colors that are available with for the puns-js theme, using the backtick method.
    } else if ($('#design').val() === "heart js"){                                                                             // continues original if statement with a else if part that will select the remaining color options if the user decides to chose the other theme I heart js. 
        $('#color').html(`<option value="tomato">Tomato (I &#9829; JS shirt only)</option>
        <option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option> 
        <option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option>`)
        $('#colors-js-puns').show();                                                                                        // Shows only the colors that coincide with the i heart js theme t-shirt. 
        
    } else { $('#colors-js-puns').hide();}                                                                                // Hides all of the colors when there is no t-shirt theme selected. 
});
