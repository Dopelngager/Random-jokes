import getDataEn from "./api_en.js";
import getDataRu from "./api_ru.js";

const langs = document.querySelectorAll(".lang");
const BAMF = document.querySelector(".BAMF");
let lang = "en";
langs.forEach((el) =>
  el.addEventListener("click", async (e) => {
    if (e.target.id === "EN" && e.target.name !== "active") {
      e.target.name = "active";
      document.getElementById("RU").name = "";
      document.getElementById("jokedata").style =
        "font-family: 'Permanent Marker',sans-serif;";
      lang = "en";
      await switchLang();
    }
    if (e.target.id === "RU" && e.target.name !== "active") {
      e.target.name = "active";
      document.getElementById("EN").name = "";
      document.getElementById("jokedata").style =
        "font-family: 'Times New Roman', Times, serif;";
      lang = "ru";
      await switchLang();
    }
  })
);

BAMF.addEventListener("click", switchLang);

async function switchLang() {
  if (lang === "en") {
    const response = await getDataEn();
    const container = document.createElement("container");
    container.classList.add("container-styles");
    const block = document.createElement("div");
    block.classList.add("block");
    container.append(block);
    const jokeData = document.getElementById("jokedata");
    jokeData.innerHTML = response.value.joke;
    const mainContainer = document.querySelector("#main");
    mainContainer.insertBefore(container, mainContainer.firstChild);
  }
  if (lang === "ru") {
    const response = await getDataRu();
    const container = document.createElement("container");
    container.classList.add("container-styles");
    const block = document.createElement("div");
    block.classList.add("block");
    container.append(block);
    const jokeData = document.getElementById("jokedata");
    jokeData.innerHTML = response;
    const mainContainer = document.querySelector("#main");
    mainContainer.insertBefore(container, mainContainer.firstChild);
  }
}

window.onload = () => {
  switchLang();
};
