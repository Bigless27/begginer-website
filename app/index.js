$(document).ready(() => {
    $('#contact-form').submit((event) => {
        event.preventDefault()
        let data = $("#contact-form").serialize();
        console.log(JSON.stringify(data))
        $.post({
            url: "http://localhost:8080/api/mail",
            data
        })
            .then((data) => {
                console.log(data);
            })

    })
})