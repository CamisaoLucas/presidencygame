pericles()

function pericles(){
    while (true){
        var escolha = prompt('Escolha 1 ou 2: \n 1- Cria uma nova campanha.\n 2- Se agarra a sua campanha.');
            if(escolha == "1"){
                document.write(`
                    <header>
                    <div class="caixa">
                        <h1 class="nomeDoJogo">Presidency Game</h1>
                    </div>   
                    </header>
                    <main>
                    <p>Os haters conseguiram o que queriam e vão sempre te desestabilizar, voce não tem o que é preciso para ser Presidente.</p>
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
                        <p>Mostra a todos o quanto sua campanha é ótima, e chama o Padre Fábio de Melo para colaborar com uma nova canção,<br> conquistando assim o coração de diversos eleitores religiosos. Entretando ao final da corrida Presidencial, Péricles se depara com um dilema moral.</p>
                        <nav class="decisao">
                        <li><a href="pericles4.html">Decidir</a>
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