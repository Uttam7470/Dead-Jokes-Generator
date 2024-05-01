const btn = document.querySelector("button");
const resultDiv = document.querySelector("#result");
const jokeShow = document.querySelector("p ");

const apiKey = "uf/5LKns52NJhEC5iEUjvw==Ka5URptJ49dKRvBe";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes";

async function getJoke() {
 
  const response = await fetch(apiUrl, options);
  const result = await response.json();
  console.log(result[0].joke);


  const para = document.createElement("p");

  para.innerHTML = result[0].joke;
  para.classList.add("para");

  resultDiv.append(para);
}

btn.addEventListener("click", () => {
  resultDiv.innerHTML = "";
  getJoke();
});
