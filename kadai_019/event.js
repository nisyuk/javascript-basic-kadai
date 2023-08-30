// btnというidを持つ要素を取得し定数へ代入
const btn = document.getElementById('btn');

// textというidを持つ要素を取得し定数へ代入
const text = document.getElementById('text');

// id名btnの要素が代入されている定数btnをクリックしたときにイベント処理を実行する
btn.addEventListener('click', () => {
  text.textContent ='ボタンをクリックしました';
});
