
function write() {
  let data = document.getElementById('mail').value;
  fs.writeFile('data.txt', data, function (err) {
    if (err) return console.log(err);
  });
}
