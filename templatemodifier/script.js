// console.log("loaded")

// var template = document.getElementById('template').href

// // Check for the various File API support.
// if (window.File && window.FileReader && window.FileList && window.Blob) {
//   alert("it works")
//   // Great success! All the File APIs are supported.
// } else {
//   alert('The File APIs are not fully supported in this browser.');
// }


// module.exports = function(content, filename, mime) {
//   if (mime == null) mime = 'text/csv'

//   var blob = new Blob([content], { type: mime })

//   var a = document.createElement('a')
//   a.download = filename
//   a.href = window.URL.createObjectURL(blob)
//   a.dataset.downloadurl = [mime, a.download, a.href].join(':')

//   var e = document.createEvent('MouseEvents')
//   e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false,
//     false, false, 0, null)
//   return a.dispatchEvent(e)
// }


var template = _.template('hello <%= user %>!');
template({user: 'Carlos'})
