alcione()

function alcione(){
    while (true){
        var escolha = prompt('Escolha 1 ou 2: \n 1- Decide chamar um de seus grandes amigos, para fazer um video em seu instagram para aumentar o engajamento em sua campanha.\n 2-Ela pede apoio ao atual Presidente com sua campanha.');
            if(escolha == "1"){
                document.write(`
                    <header>
                    <div class="caixa">
                        <h1 class="nomeDoJogo">Presidency Game</h1>
                    </div>   
                    </header>
                    <main>
                    <p>Então Axl Rose faz uma live no Instagram dela com uma camisa com o rosto de Alcione escrito, "Presidente do Povo".
                    Sua popularidade aumenta devido a fama de Axl e aos memes gerados pela comunidade brasileira.<br> Aproveitando o sucesso momentaneo Alcione decide...</p>
                        <nav class="decisao">
                        <li><a href="alcione3.html">Decidir</a>
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
                        <p>Jair então posta um video em seu twitter declarando o apoio a Alcione e cantando "Voce me vira a cabeça".<br>
                        Porém devido a baixa popularidade do Presidente, Dona Marron fica tão atrás que é impossivel de ela continuar na disputa.</p>
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