$ = jQuery;
$(document).ready(function(){
  // $("section").first().show();
  if( window.location && window.location.hash === "" ){
    $("section").first().show();
  }else{
    var hash = window.location.hash
    console.log(hash)
    console.log(".nav a[anchor='"+ hash + "']")
    console.log($( ".nav a[anchor='"+ hash + "']" ).click())
    $( ".nav a[anchor='"+ hash + "']" ).click();
  };
  $(".nav a").click(function(e){
    $(".nav li").removeClass("active");
    $(this).parent().addClass("active");
    $("section").fadeOut("slow");
    $($(this).attr("anchor")).fadeIn('slow');
  });
  
  $("p.lead a").on("click", function(){
    $(".nav a[anchor='"+ $(this).attr("anchor") + "']").click();
  });

  $("ul.thumbnails img").click( function(e){
    $("#slider .modal-header h3").text($(e.target).attr("title"));
    $("#slider .modal-body img").attr("src", $(e.target).attr("src"));
    $("#slider").modal({
      show: true,
      backdrop: true,
      keyboard: true
    })
  });
});