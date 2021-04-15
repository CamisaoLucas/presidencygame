pericles()

function pericles(){
    while (true){
        var escolha = prompt('Escolha 1 ou 2: \n 1- Livre pra voar.\n 2-A gente faz a festa.');
            if(escolha == "1"){
                document.write(`
                    <header>
                    <div class="caixa">
                        <h1 class="nomeDoJogo">Presidency Game</h1>
                    </div>   
                    </header>
                    <main>
                    <p>Péricles percebe que a Presidência não era vida pra ele, que ele queria ser Livre pra voar e decidiu então Largar o freio e sair da corrida presidencial.</p>
                        <nav class="decisao">
                        <li><a href="index.html">Tentar novamente.</a>
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
                        <p>Péricles para sua última cartada decide se reunir mais uma vez com o Exaltasamba e fazer um mega show para conquistar o coração do restante dos brasileiros e ele consegue.<br> PARABÉNS VOCÊ VIROU PRESIDENTE!!!</p>
                        <nav class="decisao">
                        <li><a href="index.html">Decidir</a>
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