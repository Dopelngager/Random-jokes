const url = "./src/quotes.json";
async function getDataRu() {
  const res = await fetch(url);
  const joke = await res.json();
  return joke[getRandomInt(100)].joke;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default getDataRu;
