var api_link = "https://restcountries.com/v3.1/all"
const mode = document.querySelector(".mode")  
const searchState = document.querySelector(".searchState")  
const regionFilter = document.querySelector(".regionFilter")  
const cards = document.querySelector(".cards")  
const form = document.querySelector("form")
const body = document.querySelector("body")
const modal = document.querySelector(".modal")
const region = document.querySelector(".region")

mode.addEventListener("click", () => {
  body.classList.toggle("active")
})

const getData = async (link) => {
  modal.style = "display: flex;"
  const request = await fetch(link)
  const data = await request.json()
  dataState(data)
  modal.style = "display: none;"
}
getData(api_link)

const dataState = (info) => {
  cards.innerHTML = ""
  info.forEach((item) => {
    cards.innerHTML += `
    <a href="state/index.html?name=${item.name.common}" class="card">
      <img src="${item.flags.png}" alt="">
      <div>
        <div class="name">${item.name.common}</div>
        <p>Population: <span class="population"> ${item.population}</span></p>
        <p>Region: <span class="region"> ${item.region}</span></p>
        <p>Capital: <span class="capital"> ${item.capital}</span></p>
      </div>
    </a>
    `
  })
}

regionFilter.addEventListener("change", () => {
  const card = document.querySelectorAll(".card")
  card.forEach((item) => {
    var region = item.querySelector(".region").textContent.toLowerCase()
    var selectRegion = regionFilter.value
    if (selectRegion == "all") {
      item.classList.remove("hidden")
    } else if (!region.includes(selectRegion)) {
      item.classList.add("hidden")
    } else {
      item.classList.remove("hidden")
    }
  })
})

searchState.addEventListener("input", () => {
  const card = document.querySelectorAll(".card")
  card.forEach((item) => {
    var name = item.querySelector(".name").textContent.toLowerCase().trim()
    var searchValue = searchState.value.toLowerCase().trim().replaceAll(" ", "")
    if (!name.includes(searchValue)) {
      item.classList.add("hidden")
    } else {
      item.classList.remove("hidden")
    }
  })
})