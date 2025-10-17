// class contato
class contato {
    constructor(nome, sobrenome, email, cpf, telefone, contatoPref) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contatoPref = contatoPref;
    }
}

// Função para exibir o modal
function showModal(nomeUsuario) {
    const modal = document.getElementById('agradecimentoModal');
    const modalTitulo = document.getElementById('modalTitulo');
    const modalParagrafo = modal.querySelector('p');
    const modalButton = modal.querySelector('button');

    modalTitulo.style.color = '#00305e'; 
    modalButton.style.backgroundColor = '#00305e';

    modalTitulo.textContent = `Obrigada por nos contatar, ${nomeUsuario}!`;
    modalParagrafo.textContent = "Seus dados foram recebidos com sucesso. Em breve entraremos em contato.";
    modal.style.display = 'flex'; 
}

// Função para exibir uma mensagem de erro
function showErrorModal(mensagem) {
    const modal = document.getElementById('agradecimentoModal');
    const modalTitulo = document.getElementById('modalTitulo');
    const modalParagrafo = modal.querySelector('p');
    const modalButton = modal.querySelector('button');

    modalTitulo.style.color = '#ff0000'; // Vermelho para erro
    modalButton.style.backgroundColor = '#ff0000'; // Botão vermelho

    modalTitulo.textContent = `Atenção!`;
    modalParagrafo.textContent = mensagem;
    modal.style.display = 'flex'; 
}


// Função para esconder
function hideModal() {
    const modal = document.getElementById('agradecimentoModal');
    modal.style.display = 'none';
}

function Post(form) {
    
    event.preventDefault(); 
    
    //contato
    const contatoPrefValue = form.elements.namedItem("contato").value;

    // --- CONDIÇÃO DE VALIDAÇÃO ---
    if (contatoPrefValue === "") {
        // Se o valor for a string vazia da primeira <option>, exibe a mensagem de erro
        showErrorModal("Por favor, selecione uma opção de contato (TELEFONE ou E-MAIL) para continuar.");
        return; // Sai da função, impedindo o resto do processo
    }
    // ----------------------------

    let dadosContato = new contato(
        form.elements.namedItem("nome").value,
        form.elements.namedItem("sobrenome").value, 
        form.elements.namedItem("email").value, 
        form.elements.namedItem("cpf").value, 
        form.elements.namedItem("telefone").value, 
        contatoPrefValue // Usa o valor checado
    );
    
    // 1.dAdos no console
    console.log("Dados do formulário armazenados:", dadosContato);

    // 2. Chama a função
    showModal(dadosContato.nome);
}


window.Post = Post;
window.showModal = showModal;
window.hideModal = hideModal;
window.showErrorModal = showErrorModal;