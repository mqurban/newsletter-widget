// Javascript for the plugin will go here

jQuery(document).ready(function($){

    $('#subscriber-form').submit(function(e){
        e.preventDefault();

        // alert('Submitted');
        // Serialize Form

        var subscriberData = $('#subscriber-form').serialize();

        // submit Form 

        $.ajax({
            type: 'post',
            url: $('#subscriber-form').attr('action'),
            data: subscriberData
        }).done(function(response){
            // If Success

            $('#form-msg').removeClass('error')
            $('#form-msg').addClass('success')

            // Set Message Text 

            $('#form-msg').text(response);

            // clear Fields 

            $('#name').val('');
            $('#email').val('');

        }).fail(function(data){
            // if Error 
            $('#form-msg').removeClass('success');
            $('#form-msg').addClass('error');

            if(data.responseText !== ''){
                $('#form-msg').text(data.responseText);
            }
            else{
                $('#form-msg').text('Message was not sent');
            }
        });
    });
});