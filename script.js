function momsBeregner(beloeb, moms = 25) {
  let momsIProcent = moms / 100;
  let result = beloeb * momsIProcent;
  return result;
}

document
  .getElementById("momsForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let beloeb = document.getElementById("beloeb").value;
    let moms = document.getElementById("moms").value;
    if (moms === "") {
      moms = undefined;
    }

    let momsResult = momsBeregner(beloeb, moms);
    console.log("DKK", momsResult);
    let resultElement = document.getElementById("result");
    resultElement.innerHTML = `The calculated moms is: <strong>DKK ${momsResult}</strong>`;
  });
