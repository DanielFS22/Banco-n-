  <h1>Banco</h1>

  <p>
        Este projeto simula um sistema bancário simples, onde os usuários podem realizar operações básicas, como consultar saldo, extrato, fazer saques, depósitos, transferências e sair do sistema. O sistema também exige autenticação por senha para realizar operações financeiras.
    </p>

  <h2>Funcionalidades</h2>
    <ol>
        <li><strong>Saudação:</strong> O usuário é saudado após informar seu nome.</li>
        <li><strong>Menu de Operações:</strong> O usuário pode escolher entre seis opções:
            <ul>
                <li>1: Consultar saldo</li>
                <li>2: Consultar extrato</li>
                <li>3: Fazer saque</li>
                <li>4: Fazer depósito</li>
                <li>5: Fazer transferência</li>
                <li>6: Sair</li>
            </ul>
        </li>
    </ol>

  <h2>Detalhes das Funções</h2>

  <h3>1. <code>fazer_transferência()</code></h3>
    <p>
        Permite ao usuário transferir um valor para outra conta. O usuário deve informar o número da conta de destino e o valor da transferência. É necessário informar a senha para confirmar a operação. Se o valor da transferência for maior que o saldo disponível, o programa informa que o saldo é insuficiente.
    </p>

   <h3>2. <code>ver_extrato()</code></h3>
    <p>
        Exibe o extrato da conta do usuário. O usuário deve informar a senha para visualizar o extrato, que inclui transferências, saques e depósitos realizados.
    </p>

   <h3>3. <code>ver_saldo()</code></h3>
    <p>
        Exibe o saldo atual da conta do usuário. A senha deve ser informada para confirmar a visualização do saldo.
    </p>

  <h3>4. <code>fazer_deposito()</code></h3>
    <p>
        Permite ao usuário realizar um depósito. O valor do depósito deve ser informado e o usuário deve fornecer a senha para confirmar a operação. O valor do depósito deve ser maior que zero.
    </p>
    <h3>5. <code>fazer_saque()</code></h3>
    <p>
        Permite ao usuário realizar um saque. O valor do saque deve ser informado e o usuário deve fornecer a senha para confirmar a operação. O valor do saque deve ser menor ou igual ao saldo disponível.
    </p>
    <h3>6. <code>erro()</code></h3>
    <p>
        Exibe uma mensagem de erro se o usuário escolher uma opção inválida no menu principal.
    </p>
    <h3>7. <code>sair()</code></h3>
    <p>
        Permite ao usuário sair do sistema. O usuário deve confirmar se deseja realmente sair. Após a confirmação, uma mensagem de despedida é exibida e o navegador é fechado.
    </p>

  <h2>Observações</h2>
    <p>
        O sistema utiliza uma senha fixa (3589) para autenticação nas operações financeiras. A senha deve ser inserida corretamente para realizar saques, depósitos, transferências e visualizar o extrato e o saldo.
    </p>

  <p>
        O sistema foi projetado para executar operações básicas de forma simplificada e ilustrativa, ideal para aprendizado e prática de conceitos de programação em JavaScript.
    </p>
