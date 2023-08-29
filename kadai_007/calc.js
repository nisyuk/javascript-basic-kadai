// 変数numに0～4までのランダムな整数を代入する
let num = Math.floor(Math.random() * 15);

// num確認用
console.log(num + 'がnumに入っている');

// 変数numが3の倍数のときは「3の倍数です」という文字列を出力
if(num % 3 === 0){
   console.log('3の倍数です');
}

// 変数numが5の倍数のときは「5の倍数です」という文字列を出力
else if(num % 5 === 0){
  console.log('5の倍数です');
}

// 変数numが5の倍数のときは「5の倍数です」という文字列を出力
else if(num % 3 === 0 && num % 5 === 0){
  console.log('3と5の倍数です');
}

// 変数numが3の倍数と5の倍数以外のときはnumを出力
else{
  console.log(num);
}



