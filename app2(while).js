var max = 100;
var num = 1;
var count = 0;

while(num < max){
  num = num * 2;
  count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

// 最初の1回だけ必ず処理を行い、その後条件式を評価する do...while文 というものもある
// do{
//  最低1回は行われる処理
// }while(条件式);