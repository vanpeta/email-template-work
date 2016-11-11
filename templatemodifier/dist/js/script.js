console.log('loaded');

var template
var newConsole

//navbar functionality
$(document).ready(function () {
  $('.item').click(function(e){
    template = "-"+$(this).attr('id');
    newConsole = "console"+template;
    $('.console').hide();
    $('#' + newConsole).show();
    view();
    $(':input').mouseover(function() {
      var element = this.id
      console.log(element)
    });
    download();
  });
});


var newImage = $('#newImages').val();

function view () {
  $('#view'+template).click(function() {
    //Get form values
    var header = $('#header'+template).val();
    var subheader1 = $('#subheader1'+template).val();
    var subheader2 = $('#subheader2'+template).val();
    var mainImage = $('#mainimage'+template).val();
    var mainDescription = $('#maindescription'+template).val();
    var mainPrice = $('#mainprice'+template).val();
    var CTA = $('#CTA'+template).val();
    var header2 = $('#header2'+template).val();
    var image1 = $('#image1'+template).val();
    var image2 = $('#image2'+template).val();
    var image3 = $('#image3'+template).val();
    var image4 = $('#image4'+template).val();
    var description1 = $('#description1'+template).val();
    var description2 = $('#description2'+template).val();
    var description3 = $('#description3'+template).val();
    var description4 = $('#description4'+template).val();
    var price1 = $('#price1'+template).val();
    var price2 = $('#price2'+template).val();
    var price3 = $('#price3'+template).val();
    var price4 = $('#price4'+template).val();

    //Get iframes elements
    var iframe = $('#iframe'+template).contents()
    var iframeHeader = iframe.find('#header');
    var iframeSubheader1 = iframe.find('#subheader1');
    var iframeSubheader2 = iframe.find('#subheader2');
    var iframeMainImage = iframe.find('#main-image');
    var iframeMainDescription = iframe.find('#main-descritpion');
    var iframeMainPrice = iframe.find('#main-price');
    var iframeCTA = iframe.find('#CTA');
    var iframeHeader2 = iframe.find('#header2');
    var iframeImage1 = iframe.find('#image1');
    var iframeImage2 = iframe.find('#image2');
    var iframeImage3 = iframe.find('#image3');
    var iframeImage4 = iframe.find('#image4');
    var iframeDescription1 = iframe.find('#description1');
    var iframeDescription2 = iframe.find('#description2');
    var iframeDescription3 = iframe.find('#description3');
    var iframeDescription4 = iframe.find('#description4');
    var iframePrice1 = iframe.find('#price1');
    var iframePrice2 = iframe.find('#price2');
    var iframePrice3 = iframe.find('#price3');
    var iframePrice4 = iframe.find('#price4');

    //Transform template
    iframeHeader.text(header);
    iframeSubheader1.text(subheader1);
    iframeSubheader2.text(subheader2);
    iframeMainImage.attr('src', mainImage);
    iframeMainDescription.text(mainDescription);
    iframeMainPrice.text(mainPrice);
    iframeCTA.text(CTA);
    iframeHeader2.text(header2);
    iframeImage1.attr('src', image1);
    iframeImage2.attr('src', image2);
    iframeImage3.attr('src', image3);
    iframeImage4.attr('src', image4);
    iframeDescription1.text(description1);
    iframeDescription2.text(description2);
    iframeDescription3.text(description3);
    iframeDescription4.text(description4);
    iframePrice1.text(price1);
    iframePrice2.text(price2);
    iframePrice3.text(price3);
    iframePrice4.text(price4);

  });
};

//Guess Cart Abandon 1 US
function download() {
  $('#download'+template).click(function(filename){
    filename = $('#title'+template).val()+".html"
    var iframe = $('#iframe'+template).contents().find('html');
    var link = document.createElement("a");
    link.setAttribute("download", filename);
    link.setAttribute("href", "data:text/html;charset=utf-8,"+encodeURIComponent(iframe.prop('outerHTML')));
    link.click();
    console.log (iframe.prop('outerHTML'))
  });
}



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
