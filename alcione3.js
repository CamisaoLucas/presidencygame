alcione()

function alcione(){
    while (true){
        var escolha = prompt('Escolha 1 ou 2: \n 1- Escuta as criticas e ataques e combate fogo com fogo\n 2-Ignora os criticos e deixa que eles falem.');
            if(escolha == "1"){
                document.write(`
                    <header>
                    <div class="caixa">
                        <h1 class="nomeDoJogo">Presidency Game</h1>
                    </div>   
                    </header>
                    <main>
                    <p>O povo vendo quanta garra Alcione tem para combater os critico e haters vêem que ela lutará tambem por seus direitos fazendo assim de Alcione a nova... <br> PRESIDENTE DO BRASIL!!!</p>
                        <nav class="decisao">
                        <li><a href="index.html">Jogar novamente!</a>
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
                        <p>Ao ignorar, eles so a atacam cada vez mais, fazendo assim Alcione entrar em uma depressão e desitir da Presidencia..</p>
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