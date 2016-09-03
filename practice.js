var data = ['apple','apricot','avocado','banana','bilberry','blackberry','blackcurrant','blueberry','boysenberry','cantaloupe','currant','cherry','cherimoya','cloudberry','coconut','cranberry','damson','date','dragonfruit','durian','elderberry','feijoa','fig','goji berry','gooseberry','grape','raisin','grapefruit','guava','huckleberry','jabuticaba','jackfruit','jambul','jujube','juniper berry','kiwi fruit','kumquat','lemon','lime','loquat','lychee','mango','marion berry','melon','cantaloupe','honeydew','watermelon','miracle fruit','mulberry','nectarine','olive','orange','blood orange','clementine','mandarine','tangerine','papaya','passionfruit','peach','pear','persimmon','physalis','plum/prune','pineapple','pomegranate','pomelo','purple mangosteen','quince','raspberry','salmonberry','rambutan','redcurrant','salal berry','salak','satsuma','star fruit','strawberry','tamarillo','tamarind','ugli fruit'];

var list = $('#list');
var timer_id = null;
var preInput = '';

  //完全一致
  // var hit_data = data.filter(function(d){
  //   return (d === input);
  // });

  //前方一致
  // var reg = new RegExp("^" + input);
  // var hit_data = data.filter(function(d){
  //   return (d.match(reg));
  // });

  //複数一致
  // var s_words = input.split(" ");
  // var reg = new RegExp(s_words.join('|'));
  // console.log(reg);

  //インクリメントサーチ
$('#keyword').on('keyup', function(){
  list.empty();
  var input = $('#keyword').val();
  if (preInput !== input){
    console.log("動いた");
    clearTimeout(timer_id);
    timer_id = setTimeout(incremental_search, 500);
  }
  preInput = input;

  incremental_search = function(){
    var s_words = input.split(" ");
    var reg = new RegExp(s_words.join('|'));
    console.log(reg);

    var hit_data = data.filter(function(d){
      return (d.match(reg));
    });


    if (hit_data.length === 0){
      list.append('<li>ヒットしませんでした。</li>');
      } else {
        $.each(hit_data, function(index, val){
          var item = $('<li>').append(val);
          list.append(item);
        })
      }
    }

})
