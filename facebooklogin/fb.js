$(document).ready(function(){
    $("#logins").validate({
        rules:{
           email:{
             required:true,
             minlength:4,
             email:true
            },
           password:{
             required:true,
             minlength:4
            }
        }    
    })
    $(document).ready(function () {
        $('#logins').validate({
            errorPlacement: function(error, element) {
                error.append($('.error'));
            },
        })



    })
})
