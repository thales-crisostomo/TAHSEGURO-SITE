

$(document).ready(function(){
   
    //const url_api = 'https://v3fzlvqxqf.execute-api.sa-east-1.amazonaws.com/prod/v1/'
    const url_api = 'https://41lh09l2zk.execute-api.us-east-1.amazonaws.com/prod/'
    function Rola_Tela() {
        $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    }
    
    url = window.location.href 
    
    //url = 'dasjdoaskdsa/asdkasod?31231232oasdkosa'
    url = url.split('?')[1]
    if(url){
        var decoded = window.atob(url);
    }
    
    $('#resenha').keypress(function(event){
	   
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
   
            resenha = $('#resenha').val();
            resenha = resenha.trim ();
            
            senha = $('#senha').val();
            senha = senha.trim ();
       
          if(resenha.length > 0 && senha.length > 0){
              $("#text-salvar").css('display', 'none');
              $(".spinner").css('display', 'flex');
              $('.salvar').css('background', '#FD5266');
              $('.salvar').css('color', 'white');
              $('.salvar').css('cursor', 'pointer');
              if(resenha != senha){
                  $.Senhas_Diferentes()
              }else{
                  $.Salva_Nova_Senha()
              }
             
          }
        }
    });
    
    
    $('#ver-senha').click(function() {
	   var tipo_input = $("#senha");
       tipo_input = tipo_input.attr('type');
        
       if(tipo_input === 'password'){
           $('#senha').get(0).type = 'text';
           $('#ver-senha').html('<i class="fas fa-eye" style="color: gray; padding-right: 10px"></i>')
       }else{
           $('#senha').get(0).type = 'password';
           $('#ver-senha').html('<i class="fas fa-eye-slash" style="color: gray; padding-right: 10px"></i>')
       }
	});
    
    $('#ver-resenha').click(function() {
	   var tipo_input = $("#resenha");
       if(tipo_input = tipo_input.attr('type')){
           $('#resenha').get(0).type = 'text';
           $('#ver-resenha').html('<i class="fas fa-eye" style="color: gray; padding-right: 10px"></i>')
       }else{
           $('#resenha').get(0).type = 'password';
           $('#ver-resenha').html('<i class="fas fa-eye-slash" style="color: gray; padding-right: 10px"></i>')
       }
	});
    
    //////LIBERA O BOTÃO ENTRAR
    
    $('#senha').on("change keyup", function() {
        senha = $('#senha').val();
        resenha = $('#resenha').val();
        
        if(senha.length > 0 && resenha.length > 0 ){
            $('.salvar').css('background', '#FD5266');
            $('.salvar').css('color', 'white');
            $('.salvar').css('cursor', 'pointer');
            $(".salvar").mouseenter(function(){
                $('.salvar').css('box-shadow','1px 1px 1px gray'); 
            });
            $(".salvar").mouseleave(function(){
                $('.salvar').css('box-shadow','1px 5px 5px rgba(0,0,0,0.2)'); 
            });
        }else{
            $('.salvar').css('background', 'rgba(253, 82, 102, 0.6)');
            $('.salvar').css('color', 'rgba(255,255,255,0.5)');
            $('.salvar').css('cursor', 'default');
            $('.salvar').unbind('mouseenter mouseleave');
        }
    });
    
    $('.salvar').css('background', 'rgba(253, 82, 102, 0.6)');
    $('.salvar').css('color', 'rgba(255,255,255,0.5)');
    
    $('#resenha').on("change keyup", function() {
        senha = $('#senha').val();
        resenha = $('#resenha').val();
        
        
        if(senha.length > 0 && resenha.length > 0 ){
            $('.salvar').css('background', '#FD5266');
            $('.salvar').css('color', 'white');
            $('.salvar').css('cursor', 'pointer');
            $(".salvar").mouseenter(function(){
                $('.salvar').css('box-shadow','1px 1px 1px gray'); 
            });
            $(".salvar").mouseleave(function(){
                $('.salvar').css('box-shadow','1px 5px 5px rgba(0,0,0,0.2)'); 
            });
        }else{
            $('.salvar').css('background', 'rgba(253, 82, 102, 0.6)');
            $('.salvar').css('color', 'rgba(255,255,255,0.5)');
            $('.salvar').css('cursor', 'default');
            $('.salvar').unbind('mouseenter mouseleave');
        }
    });
    
    $.Error_Senha = function () {
       Rola_Tela() 
       $("#error").css('display', 'flex');
       $(".spinner").css('display', 'none');
       $("#text-alerta").html('');
       $("#text-alerta").fadeIn(500);
       $("#text-alerta").css('color', 'tomato');
       $("#text-alerta").html('Erro ao atualizar senha.');
  
       var timer = setInterval(() => { 
           //window.location.href = "../e-comerce/index.html";
           $("#error").css('display', 'none');
           $("#text-salvar").css('display', 'flex');
           $("#text-alerta").fadeOut(500);
           clearInterval(timer);
       }, 2500);

    }
    
    $.Sucesso_Senha = function () {   
       Rola_Tela()
       $("#sucesso").css('display', 'flex');
       $(".spinner").css('display', 'none');
       $("#text-alerta").html('');
       $("#text-alerta").fadeIn(500);
       $("#text-alerta").css('color', '#66bb6a');
       $("#text-alerta").html('Senha atualizada com sucesso!');
       
       var timer = setInterval(() => { 
           window.close();
           $("#sucesso").css('display', 'none');
           $("#text-salvar").css('display', 'flex');
           $("#text-alerta").fadeOut(500);
           clearInterval(timer);
       }, 2500);
    }
    $.Senhas_Diferentes = function () {   
       Rola_Tela()
       $("#error").css('display', 'flex');
       $(".spinner").css('display', 'none');
       $("#text-alerta").html('');
       $("#text-alerta").fadeIn(500);
       $("#text-alerta").css('color', 'tomato');
       $("#text-alerta").html('Senhas não iguais.');
       
       var timer = setInterval(() => { 
           $("#error").css('display', 'none');
           $("#text-salvar").css('display', 'flex');
           $("#text-alerta").fadeOut(500);
           clearInterval(timer);
       }, 2500);
    }
    
    $.Salva_Nova_Senha = function () {   
        
         senha = $('#senha').val();
         resenha = $('#resenha').val();
         senha = senha.trim();
         resenha = resenha.trim();
        
        $.ajax({
               url: url_api + 'v1/user/recover/new/' + decoded,
               type: "POST",
               crossDomain: true,
               headers: {
                   Accept: 'application/json',
                  'Content-Type': 'application/json'
               },
               data: JSON.stringify({
                   password: senha,
               }),
               success: function( responseJson ) {
                   // console.log(JSON.stringify(responseJson))
                    if(responseJson.error){
                        $.Error_Senha();
                    }
                    if(responseJson.message == 'Nova senha atualizada com sucesso!'){
                        $.Sucesso_Senha();
                    }
               },
               error: function(jqXHR, textStatus, errorThrown) {
                    console.log(jqXHR)
                    $.Error_Senha();
               }  
        });
      
    }
    
    ////FAZ O LOGIN
    $('.salvar').click(function() {
    
        senha = $('#senha').val();
        resenha = $('#resenha').val();

        if(senha.length > 0 && resenha.length > 0){
            $("#text-salvar").css('display', 'none');
            $(".spinner").css('display', 'flex');   
            
            if(resenha != senha){
                $.Senhas_Diferentes()
            }else{
                $.Salva_Nova_Senha()
            }
        }
    });
});