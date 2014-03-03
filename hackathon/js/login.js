function scrollup()
{
    $("html, body").animate({scrollTop: 0}, "slow");
}
$("#signin-form").submit(function(e) {
    // e.preventDefault();
    var formData = {};
    formData.inputUserName = $("#inputUserName-signin").val();
    formData.inputPassword = $("#inputPassword-signin").val();
    formData = "formData=" + JSON.stringify(formData);
    $.ajax({
        url : "accounts/login",
        type: "POST",
        data : formData,
        beforeSend: function (xhr) {
            $("#loading-overlay").show();
        },
        success: function(data, textStatus, jqXHR)
        {
            $("#loading-overlay").hide();
            data = JSON.parse(data);
            if (data.status === "success") {
                // alert("sucess");
                window.location=window.location;
            } else {
                if (data.activate === true) {
                    $("#status-signin").removeClass().addClass("alert alert-danger").html(data.message);
                    $("#resend-form").removeClass('hidden');
                } else {
                    $("#status-signin").removeClass().addClass("alert alert-danger").html(data.message);
                }
            }
            scrollup();
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
            $("#loading-overlay").hide();
            $("#status-signin").removeClass().addClass("alert alert-danger").html("Error occured. Please try later.");
            scrollup();
        }
    });
    return false;
});

$("#signup-form").submit(function(e) {
    var formData = {};
    formData.inputName = $("#inputName-signup").val();
    formData.inputEmail = $("#inputEmail-signup").val();
    formData.inputPhone = $("#inputPhone-signup").val();
    formData.inputUserName = $("#inputUserName-signup").val();
    formData.inputPassword = $("#inputPassword-signup").val();
    formData.inputRegNumber = $("#inputRegNumber-signup").val();
    formData.inputRollNumber = $("#inputRollNumber-signup").val();
    formData = "formData=" + JSON.stringify(formData);
    $.ajax({
        url : "accounts/signup",
        type: "POST",
        data : formData,
        beforeSend: function (xhr) {
            $("#loading-overlay").show();
        },
        success: function(data, textStatus, jqXHR)
        {
            $("#loading-overlay").hide();
            data = JSON.parse(data);
            if (data.status === "success") {
                window.location.hash="login";
                $("#status-signup").removeClass().addClass("alert alert-success").html(data.message);
                window.location=window.location;
            } else {
                $("#status-signup").removeClass().addClass("alert alert-danger").html(data.message);
            }
            scrollup();
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
            $("#loading-overlay").hide();
            $("#status-signup").removeClass().addClass("alert alert-danger").html("Error occured. Please try later.");
            scrollup();
        }
    });
    return false;
});

$("#forgot-form").submit(function(e) {
    var formData = {};
    formData.inputEmail = $("#inputEmail-forgot").val();
    formData = "formData=" + JSON.stringify(formData);
    $.ajax({
        url : "accounts/forgot",
        type: "POST",
        data : formData,
        beforeSend: function (xhr) {
            $("#loading-overlay").show();
        },
        success: function(data, textStatus, jqXHR)
        {
            $("#loading-overlay").hide();
            data = JSON.parse(data);
            if (data.status === "success") {
                $("#status-signin").removeClass().addClass("alert alert-success").html(data.message);
            } else {
                $("#status-signin").removeClass().addClass("alert alert-danger").html(data.message);
            }
            scrollup();
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
            $("#loading-overlay").hide();
            $("#status-signin").removeClass().addClass("alert alert-danger").html("Error occured. Please try later.");
            scrollup();
        }
    });
    return false;
});

$("#resend-form").submit(function() {
    var formData = "email="+$("#inputEmail-resend").val();
    $.ajax({
        url : "accounts/resendactivation",
        type: "POST",
        data : formData,
        beforeSend: function (xhr) {
            $("#loading-overlay").show();
        },
        success: function(data, textStatus, jqXHR)
        {
            $("#loading-overlay").hide();
            data = JSON.parse(data);
            if (data.status === "success") {
                $("#status-signin").removeClass().addClass("alert alert-success").html(data.message);
            } else {
                $("#status-signin").removeClass().addClass("alert alert-danger").html(data.message);
            }
            scrollup();
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
            $("#loading-overlay").hide();
            $("#status-signin").removeClass().addClass("alert alert-danger").html("Error occured. Please try later.");
            scrollup();
        }
    });
    return false;
});
$("#reset-form").submit(function(e) {
    e.preventDefault();
    var inputPassword = $("#inputPassword-password1").val();
    var activationLink=$('#activationLink').val();
    if(inputPassword != $("#inputPassword-password2").val()){
        $("#status-report").removeClass().addClass("alert alert-danger").html("Password mismatch");
        return false;
    }
    var formData = "password="+inputPassword+"&activationLink="+activationLink;
    $('#reset').removeClass().addClass("hidden");
    $('#loading').removeClass();
    $.ajax({
        url : "../../accounts/reset_password",
        type: "POST",
        data : formData,
        beforeSend: function (xhr) {
            $("#loading-overlay").show();
        },
        success: function(data, textStatus, jqXHR)
        {
            $("#loading-overlay").hide();
            data = JSON.parse(data);
            if (data.status === "success") {
                $('#loading').removeClass().addClass("hidden");
                $("#status-report").removeClass().addClass("alert alert-success").html(data.message+"Login <a href='./'>Here</a>");
            } else {
                $('#loading').removeClass().addClass("hidden");
                $("#status-report").removeClass().addClass("alert alert-danger").html(data.message);
            }
            scrollup();
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
            $("#loading-overlay").hide();
            $("#status-signin").removeClass().addClass("alert alert-danger").html("Error occured. Please try later.");
            scrollup();
        }
    });
    return false;
});