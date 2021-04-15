zeca()

function zeca(){
    while (true){
        var escolha = prompt('Escolha 1 ou 2: \n 1-Por os ôculos escuros e sair pique Tony Stark? \n 2- Dar uma entrevista e responder as perguntas?');
            if(escolha == "1"){
                document.write(`
                    <header>
                    <div class="caixa">
                        <h1 class="nomeDoJogo">Presidency Game</h1>
                    </div>   
                    </header>
                    <main>
                    <p>Você coloca os ôculos e sai andando com o peito estufado, as pessoas acreditam que tudo o que prometeu era real e sua popularidade te faz disparar na frente dos outros cadidatos.<br>
                    Tempos depois, já no fim de uma gingatesca eleição você esta quase sendo eleito. Ai....</p>
                        <nav class="decisao">
                        <li><a href="zeca4.html">Ai...</a>
                    </nav>
                    </main>
                    <footer>
                    <p class="copyright">&copy; Copyright - Presidency Game 2021</p>
                    </footer>
                `);
                break;}
            else if (escolha == "2"){
                document.write(`
                    <header>
                    <div class="caixa">
                        <h1 class="nomeDoJogo">Presidency Game</h1>
                    </div>   
                    </header>
                    <main>
                        <p>Ao começar a dar entrevistas e responder as perguntas, fica cada vez mais evidente o quão bêbado você está, fazendo assim sua popularidade cair muitissimo e te impedindo de continuar na disputa a presidência</p>
                        <nav class="decisao">
                        <li><a href="index.html">Tentar novamente.</a>
                    </nav>
                    </main>
                    <footer>
                    <p class="copyright">&copy; Copyright - Presidency Game 2021</p>
                    </footer>          
                `);
                break
            }
            else{ alert("Escolha inválida, tente novamente com 1 ou 2")}
            }}