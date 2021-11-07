$(function() {
    let trabalho = $('#trabalhos-recentes').position().top - 130
    let contato = $('#entre-em-contato').position().top - 130
    $('#btnInicio, #trabalhos, #contato').on('click', function(e) {
        e.preventDefault()
        $('html').animate({scrollTop: $(`#${this.href.split('#')[1]}`).position().top-30}, 1000)
    })
    $(window).on('scroll', function(e) {
        scroll = $(this).scrollTop()
        if(scroll < trabalho) {
            $('#btnInicio, #trabalhos, #contato').removeClass('active')
            $('#btnInicio').addClass('active') 
        }
        if(scroll >= trabalho) {
            $('#btnInicio, #trabalhos, #contato').removeClass('active')
            $('#trabalhos').addClass('active')
        }
        if(scroll >= contato) {
            $('#btnInicio, #trabalhos, #contato').removeClass('active')
            $('#contato').addClass('active')
        }
    })
    $('#formZap').on('click', function(e) {
        e.preventDefault()
        let nome = $('#nome').val()
        let email = $('#email').val()
        let msg = $('#mensagem').val()
        $('#mensagem').val(`${msg} \nby: ${nome} \nemail: ${email}`)
        $('form').submit()
    })

    $('.animate, .apresentacao, #boas-vindas').hide()
    setInterval(function() {
        $('#boas-vindas').fadeIn()
    }, 500)
    setInterval(function() {
        $('.apresentacao').fadeIn()
    }, 2000)
    setInterval(function() {
        $('.animate').fadeIn()
    }, 4000)
})