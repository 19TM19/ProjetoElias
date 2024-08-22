function addItem() {
    const itemInput = document.getElementById('itemInput');
    const itemList = document.getElementById('itemList');
    const itemText = itemInput.value.trim();


    if (itemText !== "") {
        const listItem = document.createElement('li');
        listItem.textContent = itemText;


        // Adiciona a classe 'task' para cada item adicionado
        listItem.classList.add('task');
       
        // Adiciona evento de clique para marcar/desmarcar item
        listItem.addEventListener('click', () => {
            listItem.classList.toggle('marcado');
        });


        itemList.appendChild(listItem);
        itemInput.value = ""; // Limpa o campo de input
    } else {
        alert('Por favor, insira um item.');
    }
}


// Função para remover itens marcados
function removeMarkedItems() {
    const items = document.querySelectorAll('.marcado');
    items.forEach(item => item.remove());
}


// Adiciona evento ao botão de adicionar item
document.getElementById('addBtn').addEventListener('click', addItem);


// Adiciona evento ao botão de remover itens marcados
document.getElementById('removeBtn').addEventListener('click', removeMarkedItems);
