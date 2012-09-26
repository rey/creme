$("document").ready(function(){
  $("a#send").click(function(){
    if ($("input#idea").length > 0){
      var idea = "@studio_creme, please could you draw me a "+$("input#idea").val();

      var href = 'http://twitter.com/home?status='+encodeURIComponent(idea + '.');
      window.open(href);
    }else{
      alert("You have to enter something in the input box")
    }
    return false;
  });
});