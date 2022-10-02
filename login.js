function criarconta(){
    let username = document.querySelector('input#nomeuser').value
    let email_do_usuario = document.querySelector('input#useremail').value
    let senha_do_usuario = document.querySelector('input#usersenha').value
    let res = document.querySelector('form#formu')
    let voltar = document.querySelector('button#voltar')


    if(email_do_usuario.length == 0 && username.length == 0 && senha_do_usuario.length == 0){
        alert("Por favor, preencha os campos corretamente.")
    }else {
            res.innerHTML = `Por falta de um dev back-end não temos um server side ainda :)`
        }

    }

