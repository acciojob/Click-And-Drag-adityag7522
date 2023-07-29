 const items = document.querySelector('.items');
  let isMouseDown = false;
  let startX;
  let scrollLeft;

  items.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX = e.clientX;
    scrollLeft = items.scrollLeft;
    items.classList.add('active');
  });

  items.addEventListener('mouseleave', () => {
    isMouseDown = false;
    items.classList.remove('active');
  });

  items.addEventListener('mouseup', () => {
    isMouseDown = false;
    items.classList.remove('active');
  });

  items.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.clientX;
    const walk = (x - startX); // Adjust the scrolling speed by changing the multiplier

    items.scrollLeft = scrollLeft - walk;
  });