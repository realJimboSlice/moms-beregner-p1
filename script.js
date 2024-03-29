function momsBeregner(beloeb, moms = 25) {
  let momsIProcent = moms / 100;
  let result = beloeb * momsIProcent;
  let sum = beloeb + result;
  return sum;
}

document
  .getElementById("momsForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let beloeb = parseFloat(document.getElementById("beloeb").value);
    let moms = document.getElementById("moms").value;
    if (moms === "") {
      moms = undefined;
    } else {
      moms = parseFloat(moms);
    }

    let momsResult = momsBeregner(beloeb, moms);
    console.log("DKK", momsResult);
    let resultElement = document.getElementById("result");
    resultElement.innerHTML = `The calculated beloeb + moms is: <strong>DKK ${momsResult}</strong>`;
  });
