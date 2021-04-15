alcione()

function alcione(){
    while (true){
        var escolha = prompt('Escolha 1 ou 2: \n 1- Criar um perfil no TiK-Tok para recriar os memes recentes, aumentando assim seu sucesso.\n 2-Criar uma conta no Twitter, para se sentir mais proxima da população e atender a demanda do povo.');
            if(escolha == "1"){
                document.write(`
                    <header>
                    <div class="caixa">
                        <h1 class="nomeDoJogo">Presidency Game</h1>
                    </div>   
                    </header>
                    <main>
                    <p>O tiro saiu pela culatra, ao reproduzir os memes Alcione consegue estragar cada um deles, acabando assim com o jeitinho brasileiro.</p>
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
                        <p>Ao fazer isso, o povo vê que ela os escuta causando assim uma ótima impressão em todos, mas algumas pessoas, mesmo vendo isso começam a ataca-la, nesse momento ela precisa se decidir...</p>
                        <nav class="decisao">
                        <li><a href="alcione4.html">Decidir</a>
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