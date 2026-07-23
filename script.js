document.querySelectorAll('.topic-card').forEach((card, index) => {
  card.style.animation = `enter .45s ${index * 75}ms both ease-out`;
});

const style = document.createElement('style');
style.textContent = '@keyframes enter{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}';
document.head.appendChild(style);
