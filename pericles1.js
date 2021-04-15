pericles()

function pericles(){
    while (true){
        var escolha = prompt('Escolha 1 ou 2: \n 1- Nunca foi sorte, sempre foi deus?\n 2-Se eu largar o freio?');
            if(escolha == "2"){
                document.write(`
                    <header>
                    <div class="caixa">
                        <h1 class="nomeDoJogo">Presidency Game</h1>
                    </div>   
                    </header>
                    <main>
                    <p>Que é baseada em, ver do que o Péricão é capaz, porém com seu retrôgrado pensamento em relação a direitos e deveres dos casais. Causa assim perda de popularidade e o faz sair da disputa.</p>
                        <nav class="decisao">
                        <li><a href="index.html">Tentar novamente.</a>
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
                            <p>Com muita luta e perseverança Péricles segue em sua campanha, mesmo com haters tirando sarro do nome de sua campanha o tempo todo nas redes sociais, porém a quantidade de ataques que Péricles estava sofrendo era grande demais então...</p>
                            <nav class="decisao">
                            <li><a href="pericles3.html">Decidir</a>
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