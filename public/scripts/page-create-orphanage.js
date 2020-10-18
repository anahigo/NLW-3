// create app
const map = L.map('mapid').setView([-27.222633, -49.6455874], 15)

// create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
})

// create and add marker

let marker;

map.on('click', (event) => {
  // console.log(event)
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector('[name="lat"]').value = lat;
  document.querySelector('[name="lng"]').value = lng;

  // remove icon
  marker && map.removeLayer(marker)

  // add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map)
})

// add photos

const addPhotoField = () => {
  // console.log('está funcionando')

  // pick up the photo #images container
  const container = document.querySelector('#images')

  // take the container to duplicate .new-upload
  const fieldContainer = document.querySelectorAll('.new-upload')

  // clone the last image added
  const newFieldContainer = fieldContainer[fieldContainer.length - 1].cloneNode(true)

  // check if the field is empty. If yes, do not add to the image container
  // console.log(newFieldContainer.children)
  const input = newFieldContainer.children[0]

  // console.log(input.value == "")
  // console.log(input.value != "")
  if(input.value == "") {
    return
  }
  // clear the field before adding it to the image container
  input.value = ""

  //add the clone to the #images container 
  container.appendChild(newFieldContainer)
}

// del photo
const deleteField = (event) => {
  // console.log(event)
  // console.log(event.currentTarget)

  const span = event.currentTarget
  const fieldContainer = document.querySelectorAll('.new-upload')
  
  // console.log(fieldContainer.length)
  if(fieldContainer.length <= 1) {
    // clear the field
    span.parentNode.children[0].value= ""
    return
  }

  // console.log(cheguei aqui!)

  // delete field
  // console.log(span.parentNode)
  span.parentNode.remove()
}

// select yes and no
const toggleSelect = (event) => {
  // console.log(event)

  // remove the class .active from the buttons
  // console.log(document.querySelectorAll('.button-select button'))
  document.querySelectorAll('.button-select button')
  .forEach((button) => {
    button.classList.remove('active')
  })

  // put class .active on the clicked button
  const button = event.currentTarget
  button.classList.add('active')

  // update my hidden input with the selected value
  const input = document.querySelector('[name="open_on_weekends"]')
  // console.log(input)

  input.value = button.dataset.value
}