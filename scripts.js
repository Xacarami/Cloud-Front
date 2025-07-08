document.getElementById('form').onsubmit = async (e) => {

    e.preventDefault();

    const nome = document.getElementById('nome').value;

    const descricao = document.getElementById('descricao').value;

    await fetch('/chamado', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ nome, descricao })
    });

    loadChamados();
};

async function loadChamados() {
    const res = await fetch('/chamados');
    const chamados = await res.json();
    const ul = document.getElementById('lista');
    ul.innerHTML = '';
    
    chamados.forEach(c => {
        ul.innerHTML += `<li>${c.nome}: ${c.descricao}</li>`;
    });
}

loadChamados();