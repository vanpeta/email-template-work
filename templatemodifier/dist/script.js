console.log("loaded");



var newImage = $('#newImages').val();

$('.view').click(function() {
  var newContent = $('#newValue').val();
  var imageUrl = $('#newImage').val();
  console.log(imageUrl)
  var content = $('#iframe').contents().find("#myContent");
  content.text(newContent);
  var image = "<img src='"+imageUrl+"' width='500'>";
  console.log(image)
  content.prepend(image)
});

$('#download').click(function(filename){
  filename = $('#title').val()+".html"
  var iframe = $('#iframe').contents().find('html');
  var link = document.createElement("a");
  link.setAttribute("download", filename);
  link.setAttribute("href", "data:text/html;charset=utf-8,"+encodeURIComponent(iframe.prop('outerHTML')));
  link.click();
  console.log (iframe.prop('outerHTML'))
});


// http://www.w3schools.com/css/img_lights.jpg
