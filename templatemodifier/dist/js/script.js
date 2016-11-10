console.log("loaded");

var template
var newConsole

//navbar functionality
$(document).ready(function () {
  $(".item").click(function(e){
    template = "-"+$(this).attr('id');
    newConsole = "console"+template;
    $('.console').hide();
    $('#' + newConsole).show();
    reload()
  });
});


var newImage = $('#newImages').val();

function reload () {
  $('#view'+template).click(function() {
    console.log('clicked view');
    console.log(template)
    var header = $('#header'+template).val();
    var imageUrl = $('#newImage'+template).val();
    console.log(header)
    var content = $('#iframe'+template).contents().find("#header");
    console.log(content.text())
    content.text(header);
    var image = "<img src='"+imageUrl+"' width='500'>";
    console.log(image)
    content.prepend(image)
  });
};

//Guess Cart Abandon 1 US


$('#download').click(function(filename){
  filename = $('#title').val()+".html"
  var iframe = $('#iframe').contents().find('html');
  var link = document.createElement("a");
  link.setAttribute("download", filename);
  link.setAttribute("href", "data:text/html;charset=utf-8,"+encodeURIComponent(iframe.prop('outerHTML')));
  link.click();
  console.log (iframe.prop('outerHTML'))
});



//nav-bar
$(window).on("load resize",function(e) {
  var more = document.getElementById("js-centered-more");

  if ($(more).length > 0) {
    var windowWidth = $(window).width();
    var moreLeftSideToPageLeftSide = $(more).offset().left;
    var moreLeftSideToPageRightSide = windowWidth - moreLeftSideToPageLeftSide;

    if (moreLeftSideToPageRightSide < 330) {
      $("#js-centered-more .submenu .submenu").removeClass("fly-out-right");
      $("#js-centered-more .submenu .submenu").addClass("fly-out-left");
    }

    if (moreLeftSideToPageRightSide > 330) {
      $("#js-centered-more .submenu .submenu").removeClass("fly-out-left");
      $("#js-centered-more .submenu .submenu").addClass("fly-out-right");
    }
  }

  var menuToggle = $("#js-centered-navigation-mobile-menu").unbind();
  $("#js-centered-navigation-menu").removeClass("show");

  menuToggle.on("click", function(e) {
    e.preventDefault();
    $("#js-centered-navigation-menu").slideToggle(function(){
      if($("#js-centered-navigation-menu").is(":hidden")) {
        $("#js-centered-navigation-menu").removeAttr("style");
      }
    });
  });
});
