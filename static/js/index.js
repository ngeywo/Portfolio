let i_skill = 0;
let skills, previous;
let skills_description;

function animate_skills() {
    if (i_skill >= skills.length) {
        i_skill = 0;
    }
    if (previous !== undefined) {
        previous.css({'transform': 'scale(1, 1)', 'z-index': '0'})
    }
    let sk = $(skills.get(i_skill));
    sk.css({'transform': 'scale(1.7, 1.7)', 'z-index': '1'})
    skills_description.html(sk.attr('alt'))
    previous = sk;
    i_skill += 1;
}

function showFormMessage(message, color){
    let msg = $("<div class=\"message\"></div>");
    msg.html(message)
    msg.css({'background-color': color})
    $('#contact_us').append(msg)

    msg.animate({
        height: '20px'
    }, 100, function () {
        setTimeout(() => {
            msg.remove()
        }, 5000)
    })
}

function hijackForm(form) {
    let name = $('#form_name')
        , email = $('#form_email')
        , message = $('#form_message');

    let data = {
        'name': name.val(),
        'email': email.val(),
        'message': message.val()
    }

//     $.ajax({
//         url: '/api/v1/contact_us',
//         method: 'POST',
//         data: data,
//         dataType: "*",
//         success: function () {
//             name.val('')
//             email.val('')
//             message.val('')
//             showFormMessage("Success", 'green')
//         },
//         error: function (e) {
//             showFormMessage("Failed", 'red')
//         }
//     })
}

$(document).ready(function () {
    $('#menu_links a').click(function () {
        if ($(window).width() < 768) {
            $('#menu_links').css({'display': 'none'})
        }
    });

    $('#menu_icon').click(function () {
        if ($('#menu_links').css('display') === 'none') {
            $('#menu_links').css({'display': 'flex'})
        } else {
            $('#menu_links').css({'display': 'none'})
        }
    })
    skills_description = $('#skill_description')
    skills = $('#skills_icons img');
    setInterval(animate_skills, 3000);

    $('#contact_us_form').on('submit', function (e) {
        e.preventDefault()
        e.returnValue = false

        hijackForm($(this))
    })
})