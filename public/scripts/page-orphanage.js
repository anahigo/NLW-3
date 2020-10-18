const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false
}

// get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

// create app
const map = L.map('mapid', options).setView([lat, lng], 15)

// create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
})

// create and add marker
L
  .marker([lat, lng], { icon })
  .addTo(map)

// image gallery

const selectImage = (event) => {
  // console.log("cliquei no botão")
  // console.log(event.currentImage)
  const button = event.currentTarget
  
  // remover todas as classes.active
  const buttons = document.querySelectorAll(".images button")
  // console.log(buttons)
  buttons.forEach((button) => {
    button.classList.remove('active')
  })
  
  // selecionar a imagem clicada
  const image = button.children[0]
  // console.log(button.children)
  const imageContainer = document.querySelector(".orphanage-details > img")

  // atualizar o container de image
  imageContainer.src = image.src

  // adicionar a classe .active para o botão clicado
    button.classList.add('active')
}
