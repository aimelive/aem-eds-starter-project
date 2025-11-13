export default function decorate(block) {
  const greeting = document.createElement('div');
  greeting.textContent = 'Hello World, this is my first component ever!';
  block.textContent = '';
  block.appendChild(greeting);
}
