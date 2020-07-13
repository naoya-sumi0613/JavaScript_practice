// じゃんけんの手を入力してもらうプロンプト欄を生成
var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

// じゃんけんの手をランダムに作成する関数を呼び出す
var js_hand = getJShand();

// 結果を表示する
// キャンセルが押された場合
if (user_hand == null){
  alert('またチャレンジしてね')
}else{

  // 入力された値がグー・チョキ・パー以外の場合
  while(user_hand != "グー" && user_hand != "チョキ" && user_hand != "パー"){
    alert('グー・チョキ・パーのいずれかを入力してください');
    var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
  }
  // ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
  var judge = winLose(user_hand, js_hand);

  // 入力された値がグー・チョキ・パー以外の場合のループを抜けてきた
  // つまり入力された値がグー・チョキ・パーどれかの場合
  alert('あなたの選んだ手は' + user_hand + 'です。　\nJavaScriptの選んだ手は' + js_hand + 'です。　\n結果は' + judge + 'です。');
}

// ランダムでじゃんけんの手を作成する関数
function getJShand(){

  // 0~2のランダムな整数値を生成
  var js_hand_num = Math.floor( Math.random() * 3 );
  var hand_name;

  // 0ならグー、1ならチョキ、2ならパーを出す
  if(js_hand_num == 0){
    hand_name = "グー";
  }else if(js_hand_num == 1){
    hand_name = "チョキ";
  }else if(js_hand_num == 2){
    hand_name = "パー";
  }

  // 戻り値としてグー、チョキ、パーを返す
  return hand_name;
}

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user, js){
  var winLoseStr;

  // 入力した値がグーの場合
  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    }else if(js == "チョキ"){
      winLoseStr = "勝ち";
    }else if(js == "パー"){
      winLoseStr = "負け";
    }

  // 入力した値がチョキの場合
  }else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    }else if(js == "チョキ"){
      winLoseStr = "あいこ";
    }else if(js == "パー"){
      winLoseStr = "勝ち";
    }

  // 入力した値がパーの場合
  }else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    }else if(js == "チョキ"){
      winLoseStr = "負け";
    }else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }

 // じゃんけんの判定を返す
 return winLoseStr;
}