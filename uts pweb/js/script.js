// Login Form
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    alert(`Welcome, ${username}!`);
  });
  
  // Slider
  const slides = document.querySelector('.slides');
  const slide = document.querySelectorAll('.slide');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  let currentIndex = 0;
  
  function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
  
  next.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slide.length;
    updateSlidePosition();
  });
  
  prev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slide.length) % slide.length;
    updateSlidePosition();
  });
  
  // Order Form
  document.getElementById('orderForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;
    const address = document.getElementById('address').value;
    alert(`Order placed!\nProduct: ${product}\nQuantity: ${quantity}\nAddress: ${address}`);
  });
  