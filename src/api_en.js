const url = "https://api.icndb.com/jokes/random";
async function getData() {
  const res = await fetch(url);
  const joke = await res.json();
  return joke;
}
export default getData;
