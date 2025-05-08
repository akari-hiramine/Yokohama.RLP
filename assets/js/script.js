$(document).ready(function(){

  // ヘッダーの読み込み
  $(function(){
    $("#header").load("../includes/header.html");
  });

  // フッターの読み込み
  $(function(){
    $("#footer").load("../includes/footer.html");
  });
  
  // トップ画像・「あなたのシニアライフをサポートします。」アニメーション設定
  $(".title").css({
    opacity: 0,
    position: "relative",
    left: "-100px"
  }).animate({
    opacity: 1,
    left: "0px"
  }, 2000); // 1000ms = 1秒でフェードイン＋スライド
});