zeca()

function zeca(){
    while (true){
        var escolha = prompt('Escolha 1 ou 2: \n 1- Ir para casa e tentar descansar para o dia seguinte\n 2-Continuar bebendo até a hora do debate e seja tudo que deus quiser');
            if(escolha == "1"){
                document.write(`
                    <header>
                    <div class="caixa">
                        <h1 class="nomeDoJogo">Presidency Game</h1>
                    </div>   
                    </header>
                    <main>
                    <p>O caminho de volta para casa era muito escuro e como estava bêbado, um ladrão tenta te assaltar, você tenta revidar e acaba sendo esfaqueado.</p>
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
                        <p>Você faz o debate bêbado e no debate promete o "Auxilio Beberrão" que faz com que bebidas alcoolicas sejam vendidas a preços mais baixos e que as empresas produtoras tenham incentivos fiscais, ao sair do debate é cercado por jornalistas.<br>E tem uma decisão a tomar.</p>
                        <nav class="decisao">
                        <li><a href="zeca3.html">Decidir</a>
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