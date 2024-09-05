const clickBtn = document.getElementById('btn');
const textBtn = document.getElementById('text');

clickBtn.addEventListener('click', () =>{
  setTimeout(() => {
    textBtn.textContent = 'ボタンをクリックしました';
  }, 2000);
});