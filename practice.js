var data = ['apple','apricot','avocado','banana','bilberry','blackberry','blackcurrant','blueberry','boysenberry','cantaloupe','currant','cherry','cherimoya','cloudberry','coconut','cranberry','damson','date','dragonfruit','durian','elderberry','feijoa','fig','goji berry','gooseberry','grape','raisin','grapefruit','guava','huckleberry','jabuticaba','jackfruit','jambul','jujube','juniper berry','kiwi fruit','kumquat','lemon','lime','loquat','lychee','mango','marion berry','melon','cantaloupe','honeydew','watermelon','miracle fruit','mulberry','nectarine','olive','orange','blood orange','clementine','mandarine','tangerine','papaya','passionfruit','peach','pear','persimmon','physalis','plum/prune','pineapple','pomegranate','pomelo','purple mangosteen','quince','raspberry','salmonberry','rambutan','redcurrant','salal berry','salak','satsuma','star fruit','strawberry','tamarillo','tamarind','ugli fruit'];

$('#submit').on('click', function(){
  var text = $('#keyword').val();
  console.log(text);
});




/*
$('#keyword').on('keyup', function () {//keyupはキーがおされ上がった瞬間に実行される。
  keyupStack.push(1);//入力されている文字数。何か入力されていれば配列に1が入る。
  setTimeout(function () {
    keyupStack.pop();//配列の一番後ろのものを削除
    //このメソッドはキーボードが打たれるたびに実行される。キーボードが打たれて0.3秒後にこのメソッドは実行される。
    if (keyupStack.length === 0) {//
      // 部分一致を可能にする(例: .*a.*b.*c.*)、*は0回以上の繰り返し、.は改行以外のすべての文字との一致
      var buf = '.*' + $(this).val().replace(/(.)/g, "$1.*");//今回のthisは#keyword。(.)は何かしらすべての文字。
      //gはグローバルマッチといい、文字列内で指定した文字が複数入っている場合、そのすべてを置換するというオプション。
      //検索文字列の()は置換後にそのまま残す部分を表す。置換後では($1、$2で参照できる)
      //入力された値の中で、何か1文字を、その一文字の後ろにたくさん文字があるものと置き換える。
      //$1は(.)の中身、つまりuserが入力した文字の一文字目、.は何か1文字、*はそれが繰り返されている。つまり、userが何か入力した文字の後ろに何か文字が1回以上続いているもの
      var reg = new RegExp(buf);
      // 最後にkeyupされてから次の入力がなかった場合
      var filteredLists = $.grep(data, function (d) {//grepメソッドは、配列の中からフィルタ関数を利用して、特定の値だけを残した配列を返す。引数は第一に配列、第二はeachと同じで配列を一時的に保存しておく変数を用意する。
       return reg.test(d);//testメソッドは検索した正規表現が引数で渡したものと一致するかどうかを判断し、booleanで返す。
       //grepメソッドは受け取った値を配列に残したければtrueを、除去したければfalseを返さなければならないので、testメソッドを使っている。
       //ここではユーザーが入力したものが配列dataの中のものと一致するかを判断している。
      }.bind(this));//このthisによってif文の中で使うthisをこのfilterdListsの中でも固定する。
      if (filteredLists.length === 0) {
        createNoHitsRow();
      } else{
        createRow(filteredLists);//createRowメソッドを呼び出している。
      }
    }
  }.bind(this), 300);//setTimeout関数は第一引数に関数（処理）を、第二引数にどんだけ遅らせるかを記述する。
});
 
var createRow = function (lists) {//listsはdata
  var list = $('#list');
  list.empty();//各子要素のすべてを削除し、空にする。イベントハンドラなどの情報も削除する。
  $.each(lists, function (i, v) {//eachの引数でlistsオブジェクト（配列）を渡している。このlistsは引数で受け取っている。iはdataのindex、vはdataの値を渡している。配列を引数で渡した時はiでindex、vで値を渡せる？？
    var item = $('<li>').append(v);//jQUeryオブジェクトliの中身に引数vで受け取ったものを入れている。
    list.append(item);//変数listはjQUeryオブジェクトlistなので、その子要素に先ほど作成したitemを追加している。
  });
};

var createNoHitsRow = function (){
  var list = $('#list');
  list.empty();
  list.append('<li>ヒットしませんでした。</li>');
};

// 初期表示
createRow(data);
*/
