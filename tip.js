input_box = document.querySelector("input");
btn = document.querySelector("button");
output = document.querySelector(".output");

//once the button is clicked
//get the value of input box
//and find 2% as tip
// show the ouytput

//event=>click
//addevent listener

btn.addEventListener("click", claculateTip);

function claculateTip() {
  console.log(input_box.value);
  let value = input_box.value;
  tip = value * 0.02;
  output.innerHTML = `you should ${tip}`;
}
