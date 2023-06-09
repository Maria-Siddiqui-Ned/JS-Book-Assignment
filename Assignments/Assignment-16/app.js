function deleteRecord(r) {
  var i = r.parentNode.parentNode.rowIndex;
    console.log(i);
    document.getElementById("record").deleteRow(i);

}


// <!-- 5. Show a counter in browser. Counter should increase on click on increase button and decrease on click on decrease button. And show updated counter
// value in browser. -->
function add(){
  var i= parseInt(document.getElementById("counter").value);
  console.log(i);
  // document.getElementById('counter').value = document.getElementById('counter').value + i
  result= i + 1
  console.log(result)
  document.getElementById("counter").value = result
}

function minus(){
  var i= parseInt(document.getElementById("counter").value);
  console.log(i);
  // document.getElementById('counter').value = document.getElementById('counter').value + i
  result= i - 1
  console.log(result)
  document.getElementById("counter").value = result
}
