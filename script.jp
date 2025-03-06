// スクロール時にセクションが表示されるアニメーション
const sections = document.querySelectorAll('section');

const inView = () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      section.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', inView);

// 「さらに詳しく」ボタンの表示機能
function showActivities() {
  const extraActivities = document.getElementById('extraActivities');
  extraActivities.classList.toggle('hidden');
}

// 初期表示時にスクロールアニメーションをチェック
window.addEventListener('load', inView);
