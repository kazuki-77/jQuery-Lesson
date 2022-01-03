$(function(){
  $('.box1').slideDown(function(){; 
    $('.box1').css({
      'background-color': '#0000FF',
      'height': '100px',
      'width': '200px'
    }).slideUp();
  });
});
/* javascriptでは引数の中に関数を入れることができる */
/* slideDown()の引数にfunctionを書き加えることで、スライドダウンした後にfunctionを実行することができるようになる */
/* slideDownの中のfunctionに、cssで色と大きさを変え、slideUp()をすることで用件を満たすことができる */
/* アニメーションの速度を変えるときはslideDown()の第一引数に数字を入力することで実現する */
/* 単位はミリ秒なので、１秒の場合は'1000'になる */