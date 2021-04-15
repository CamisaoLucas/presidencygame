zeca()

function zeca(){
    while (true){
        var escolha = prompt('Escolha 1 ou 2: \n 1-Você faz uma festa beneficente para comemorar? \n 2- Você exalta que tem o apoio de diversos politicos atuais?');
            if(escolha == "2"){
                document.write(`
                    <header>
                    <div class="caixa">
                        <h1 class="nomeDoJogo">Presidency Game</h1>
                    </div>   
                    </header>
                    <main>
                    <p>Sua popularidade sobe pouquissimo com isso, mas como já estava na frente...<br> PARABÉNS VOCÊ FOI ELEITO!!! </p>
                        <nav class="decisao">
                        <li><a href="index.html">Jogar Novamente!</a>
                    </nav>
                    </main>
                    <footer>
                    <p class="copyright">&copy; Copyright - Presidency Game 2021</p>
                    </footer>
                `);
                break;}
            else if (escolha == "1"){
                document.write(`
                    <header>
                    <div class="caixa">
                        <h1 class="nomeDoJogo">Presidency Game</h1>
                    </div>   
                    </header>
                    <main>
                        <p>Você cai em popularidade pois estamos em tempos de pandemia, e infelizmente acaba perdendo a eleição.</p>
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