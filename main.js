$(document).ready(function(){
    let nome= ""
    let mensagem = ""
    let tempo = " "




    $("form").submit(function(e){
        e.preventDefault()
    })



    $("#btn-tempo").click(function(){
        tempo = $("#tempo").val()
        console.log(`${tempo}`)
    })



    $("#btn-fem").click(function(){
        nome = $("#nome-feminino").val()

        mensagem = `
        <p>Olá tudo jóia ${nome} esse contato é da Corpore Academia. Consta no seu cadastro que ${tempo} seu aniversário. Gostaríamos de lhe desejar um Feliz Aniversário, muitos anos de vida e muita saúde!!!</p>

        
        <p>Além disso... ${nome}, vimos aqui que vc está sumida da academia. Que tal retornar e dar sequência no seu projeto de qualidade de vida? 😁😁😁</p>


        <p>Temos alguns planos promocionais muito interessantes, mais em conta que o valor da mensalidade. Se tiver interesse em conhecer sem compromisso, só me chamar aqui. 😉</p>
        `

        $("#mensagem").html(mensagem)
        $("#nome-feminino").val(" ")
    })


    $("#btn-masc").click(function(){
        nome = $("#nome-masculino").val()

        mensagem = `
        <p>Olá tudo jóia ${nome} esse contato é da Corpore Academia. Consta no seu cadastro que ${tempo} seu aniversário. Gostaríamos de lhe desejar um Feliz Aniversário, muitos anos de vida e muita saúde!!!</p>

        
        <p class="pt-3 pb-3">Além disso... ${nome}, vimos aqui que vc está sumido da academia. Que tal retornar e dar sequência no seu projeto de qualidade de vida? 😁😁😁</p>


        <p >Temos alguns planos promocionais muito interessantes, mais em conta que o valor da mensalidade. Se tiver interesse em conhecer sem compromisso, só me chamar aqui. 😉</p>
        `

        $("#mensagem").html(mensagem)
        $("#nome-masculino").val(" ")
    })

})