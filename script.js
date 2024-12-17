let cart = [];

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const totalPrice = document.getElementById('totalPrice');
    cartItems.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
        cartItems.appendChild(listItem);
        total += item.price;
    });

    totalPrice.textContent = total.toFixed(2);
}

function checkout() {
    if (cart.length === 0) {
        alert('Carrinho vazio!');
        return;
    }

    let items = '';
    cart.forEach(item => {
        items += `${item.name} - R$ ${item.price.toFixed(2)}\n`;
    });

    alert(`Compra finalizada!\n\nProdutos:\n${items}\nTotal: R$ ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}`);
    cart = [];
    updateCart();
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada!');
});
const produtos = [
    { nome: "Camiseta", preco: "R$ 50,00", imagem: "img1.jpg" },
    { nome: "Calça", preco: "R$ 80,00", imagem: "img2.jpg" }
  ];
  
  const container = document.querySelector('.produtos');
  
  produtos.forEach(produto => {
    const div = document.createElement('div');
    div.classList.add('produto');
    div.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}" width="150" height="150">
      <h3>${produto.nome}</h3>
      <p>${produto.preco}</p>
    `;
    container.appendChild(div);
  });
  function abrirOutraAba(url) {
    window.open(url, '_blank');
}

function irParaPagina(url) {
  window.location.href = url; // Redireciona para outra página
}
