$(function () {

    $(".offert-btn").on( "click", function() {
        console.log($(".ui.form.offert-form").serializeArray());
      });


    $.fn.form.settings.rules.isValid = function (text, csv) {
        //If the text of the field itself isn't empty, then it is valid
        if (text)
            return true;
        var array = csv.split(','); // you're separating the string by commas
        var isValid = false; // return value

        $.each(array, function (index, elem) {
            // for each item in array, get an input element with the specified name, and check if it has any values
            var element = $("input[name='" + elem + "']");
            //If element is found, and it's value is not empty, then it is valid
            if (element && element.val())
                isValid = true;
        });
        return isValid;
    };

    // Contact form on page '/kontakta-oss'
    $('.ui.form.contact-form').form({
        on: 'blur',
        fields: {
            name: {
                identifier: 'name',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Vänligen fyll i namn'
                    }
                ]
            },
            email: {
                identifier: 'email',
                rules: [
                    {
                        type: "isValid[phone]",
                        prompt: 'Vänligen fyll i e-post'
                    }
                ]
            },
            phone: {
                identifier: 'phone',
                rules: [
                    {
                        type: "isValid[email]",
                        prompt: 'Vänligen fyll i telefonnummer'
                    }
                ]
            }
        }
    });

    // Form on page '/bli-kund'
    $('.ui.form.offert-form').form({
        on: 'blur',
        fields: {
            name: {
                identifier: 'name',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Vänligen fyll i namn'
                    }
                ]
            },
            phone: {
                identifier: 'phone',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Vänligen fyll i telefonnummer'
                    }
                ]
            },
            email: {
                identifier: 'email',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Vänligen fyll i e-post'
                    }
                ]
            }
        }
    });

});