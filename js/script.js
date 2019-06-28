$('#name').focus();                            // the cursor is focused on the "Name" textbox as soon as the page is loaded.
$('#other-title').hide();                     //The intial hide of the 'other-title' textbox that I created 
$('#title').on('change', function(){         //When the time comes for the user to chose a Job Role, the computer needs to perform this function. 
   if($(this).val() === 'other'){           // If the users job choice equal 'other'...
    $('#other-title').show();              // Then, a textbox with the id of other-title is supposed to appear below the Job Roles dropdown
   } else { $('#other-title').hide();     // If the user choses any other option on the list, the textbox with the id of other-title does not appear. 
    }
});
$('#colors-js-puns').hide();
$('#design').on('change', function(){
    if($('#design').val() === 'js puns'){
        $('#color').html(`<option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>
        <option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option> 
        <option value="gold">Gold (JS Puns shirt only)</option>`);
        $('#colors-js-puns').show();
    }
});
//$('#color').hide();
//$('#design').on('change', function(){
    //if($('#design').val() === 'js puns'){
        //$( '#color').show([0], [1], [2]);
    //} else { $('#colors-js-puns', '#color').hide([3], [4], [5]);

    //}
//});

//$('#color').hide();
//$('#design').on('change', function(){
 //if($('#design').val() === 'js puns'){
   // $('#color').show([0], [1], [2]);
//} else {$('#color').hide([3], [4], [5]);
  //  }
//});