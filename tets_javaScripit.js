var a = window.document.getElementById("area")
var h = window.document.getElementById("area_head")
var p1 = window.document.getElementById("area_p1")
var p2 = window.document.getElementById("area_p2")
var inpu = window.document.getElementById("input_ver")
var nome_p = window.document.getElementById("area_p0")
var nome_pessoa = ""

//quando a pessoa confirmar o nome
function confirmou_nome() {
    var res2 = window.document.getElementById('res2')

    if (nome_pessoa.value == '') {
        window.alert('O campo do nome precisa ser preenchido! preencha o campo e tente novamente!')
    } else {
        nome_pessoa = document.getElementById("nome_individuo").value;
        nome_em_maiusculo = nome_pessoa.toUpperCase()
        if (nome_pessoa == 'leandro') {
            msg = res2.innerHTML = `O ${nome_em_maiusculo} é uma pessoa incrivel !! Ouvi dizer que ele tem 4 filhas gêmeas que foram feitas em dois casamentos! A bicho danado!!`
            img.setAttribute('src', 'foto-leandro.png')
        } else if (nome_pessoa == 'maria') {
            msg = res2.innerHTML = `A ${nome_em_maiusculo} é mãe do leandro e avó da livia e lavinia !`
        } else if (nome_pessoa == 'daniel') {
            msg = res2.innerHTML = `O seu ${nome_em_maiusculo} é marido da Dona maria e avô da livia e lavinia! E pai do Leandro também ! O bicho e foda em!!`
        } else if (nome_pessoa == 'livia') {
            msg = res2.innerHTML = `Essa ${nome_em_maiusculo} e Danada de mais! o leandro é pai dela! e todo dia ele fala para ela e sua irmã lavinia arrumar o seu quarto!`
        } else if (nome_pessoa == 'lavinia') {
            msg = res2.innerHTML = `Essa ${nome_em_maiusculo} tem que aprender a dormir cedo se não ela não vai crescer!!`
        }

    }
}

//Quando o mouse passar por cima do titulo nome da pessoa

function mouse_entroup0() {
    nome_p.style.border = '1px solid tomato'
}
function mouse_saiup0() {
    nome_p.style.border = '0px'
}

//quando o mouse passar em cima do verficar
function mouse_entrouin() {
    impu.style.boxShadow = '5px 5px 20px red'
}
function mouse_saiuin() {
    impu.style.boxShadow = '0px'

}

//Quando o mouse entra dentro da section

function mouse_entrou() {
    a.style.boxShadow = '5px 5px 20px';
    a.style.width = '450px'
    a.style.background = 'rgb(59, 138, 138)'
    a.style.border = '2px solid tomato'
}
function mouse_saiu() {
    a.style.boxShadow = '0px 0px 3px'
    a.style.width = '400px'
    a.style.fontStyle = 'normal'
    a.style.fontSize = '15px'
    a.style.background = 'rgb(59, 138, 138)'
    a.style.border = '1px solid darkcyan'



}
function mouse_moviment() {
    a.style.boxShadow = '0px 0px 30px'
    a.style.fontStyle = 'italic'
    a.style.borderColor = 'orange'
    a.style.fontSize = '20px'
    a.style.background = 'rgb(59, 138, 138)'

}

//mouse passa em cima do NOme Leandro 

function mouse_entrouh() {
    h.style.fontSize = '38px'
    h.style.textShadow = '0px 0px 7px orange'
}
function mouse_saiuh() {
    h.style.fontSize = '30px'
    h.style.textshadow = '2px 2px 5px orange'
}
//mouse passa em cima do ano de nascimento
function mouse_entroup1() {
    p1.style.border = '1px solid red'
    p1.style.textshadow = '2px 2px 5px orange'
}
function mouse_saiup1() {
    p1.style.border = '0px'
    p1.style.textshadow = '0px'
}
// mouse pass em cima do sexo

function mouse_entroup2() {
    p2.style.border = '1px solid red'
    p2.style.textshadow = '2px 2px 5px orange'

}
function mouse_saiup2() {
    p2.style.border = '0px'
    p2.style.textshadow = '0px'

}


// função principal do programa

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('verifique os dados e tente novamente!!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = `Masculino`

            if (idade >= 1 && idade < 10) {
                // temos uma criança
                img.setAttribute('src', 'menino.png')
            } else if (idade > 10 && idade < 18) {
                //temos um aborecente
                img.setAttribute('src', 'menino_adolescente.png ')
            } else if (idade > 18 && idade < 50) {
                //temos um adulto
                img.setAttribute('src', 'homen_meia_idade.png ')
            } else {
                // temos um idoso
                img.setAttribute('src', 'senhornew.png')
            }

        } else if (fsex[1].checked) {
            genero = `Lady`

            if (idade > 1 && idade < 10) {
                // temos uma criança
                img.setAttribute('src', 'menina.png ')
            } else if (idade > 10 && idade < 18) {
                //temos um aborecente
                img.setAttribute('src', 'menina_adolescente.png ')
            } else if (idade > 18 && idade < 50) {
                //temos um adulto
                img.setAttribute('src', 'mulher.png ')
            } else {
                // temos um idoso
                img.setAttribute('src', 'mulher_velha.png ')
            }
        }
    }

    res.innerHTML = `Nome da pessoa é ${nome_em_maiusculo} do genero ${genero} com ${idade} anos! ${msg}`
    res.style.textAlling = 'center'
    if (nome_em_maiusculo == 'LEANDRO') {
        res2.appendChild(img)
    } else {
        res.appendChild(img)
    }

} 
