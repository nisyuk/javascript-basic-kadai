// id名btnを持つ要素を取得して定数に代入
const btn = document.getElementById('btn');

// ボタンをクリックした時の動作
btn.addEventListener('click', () => {
  const text = document.getElementById('text');

  // 2秒の待ち時間を設定し、非同期処理を実行
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});
