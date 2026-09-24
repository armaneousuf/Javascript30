const searchInput = document.querySelector(".search-input");
const suggestions = document.querySelector(".suggestions");
const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
// console.log(searchInput, suggestions, endpoint)
let cities = [];
fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));

function findMatches(wordToMatch, cities) {
  const word = wordToMatch.toLowerCase();
  return cities.filter((place) => {
    return (
      place.city.toLowerCase().includes(word) ||
      place.state.toLowerCase().includes(word)
    );
  });
}

function numberWithCommans(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches() {
  const matchedArr = findMatches(this.value, cities);
  const html = matchedArr
    .map((place) => {
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(regex, `<span class="hl">$&</span>`);
      const stateName = place.state.replace(
        regex,
        `<span class="hl">$&</span>`,
      );
      return `<li>
    <span class="name">${cityName}, ${stateName}</span>
    <span class="population">${numberWithCommans(place.population)}</span>
    </li>`;
    })
    .join("");
  suggestions.innerHTML = html;
}

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
