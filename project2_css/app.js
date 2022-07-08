// import { services, tours } from './data'

const tour1 = './images/tour-1.jpeg'
const tour2 = './images/tour-2.jpeg'
const tour3 = './images/tour-3.jpeg'
const tour4 = './images/tour-4.jpeg'
const tour5 = './images/tour-5.jpeg'
const tour6 = './images/tour-6.jpeg'

const services = [
  {
    icon: '<i class="fas fa-wallet fa-fw"></i>',
    title: 'Saving Money',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    icon: '<i class="fas fa-wallet fa-fw"></i>',
    title: 'Endless hiking',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    icon: '<i class="fas fa-wallet fa-fw"></i>',
    title: 'Amazing comfort',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
]

const tours = [
  {
    image: tour1,
    title: 'Tibet Adventure',
    days: 'August 26th, 2000',
    date: '6 days',
    location: 'China',
    price: '$2100',
    icon: '<i class="fas fa-wallet fa-fw"></i>',
  },
  {
    image: tour2,
    title: 'Best Of Java',
    days: 'October 1th, 2020',
    date: '11 days',
    location: 'Indonesia',
    price: '$1400',
    icon: '<i class="fas fa-wallet fa-fw"></i>',
  },
  {
    image: tour3,
    title: 'Explore Hong Kong',
    days: 'September 15th, 2020',
    date: '8 days',
    location: 'HongKong',
    price: '$5000',
    icon: '<i class="fas fa-wallet fa-fw"></i>',
  },
  {
    image: tour4,
    title: 'Kenya Highlights',
    days: 'December 5th, 2019',
    date: '20 days',
    location: 'Kenya',
    price: '$3000',
    icon: '<i class="fas fa-wallet fa-fw"></i>',
  },
]

const details = document.querySelector('.details')
const featureTours = document.getElementById('feature-tours')

const newarray1 = tours.map((item) => {
  const { image, icon, title, days, date, location, price } = item

  return `<article>
       <div class="image_tours">
        <img src=${image} alt="tour-1">
        <span class = "date">${days}</span>
       </div>
       <div class="content">
        <h4 style="display: flex;
         justify-content: space-around; align-items: center">${title} <span>${date} </span></h4>
        <p style="text-align: left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime </p>
        <p><span>${icon} ${location}</span> <span> From ${price}</span></p>
       </div>
      </article>
 `
})

newarray1.forEach((item) => (featureTours.innerHTML += item))

services.forEach((item) => {
  const { icon, title, content } = item
  details.innerHTML += `<article>
          <div class="span">${icon}</div>
          <h5 class="name">${title}</h5>
          <p>
            ${content}
          </p>
   </article>
  `
})

const galleryContainer = document.querySelector('.gallery-container')

const array2 = [tour1, tour2, tour3, tour4, tour5, tour6].forEach((item) => {
  galleryContainer.innerHTML += `
  <div class="image">
  <div class = "cover">
      <span class="icon"><i class="fas fa-search"></i></span>
  </div>
   <img src= '${item}'/>
  </div>
  `
})

// javacript logic
const home = document.querySelector('.hero')
const about = document.querySelector('.about')
const feature = document.querySelector('.feature-tours')
const service = document.querySelector('.services')
const gallery = document.querySelector('.gallery')
const contact = document.querySelector('.contact')

const nav = document.querySelector('nav')

const mot = document.querySelector('.mot')
const hai = document.querySelector('.hai')
const ba = document.querySelector('.ba')
const buon = document.querySelector('.buon')
const nam = document.querySelector('.nam')

const heightOfNav = nav.getBoundingClientRect().height
const span = document.querySelectorAll('.mot, .hai, .ba, .buon, .nam')
const toggleBtn = document.querySelector('.toggle-btn')
var heightSidebar
toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('show')
  heightSidebar = sidebar.getBoundingClientRect().height
})

span.forEach((item) => {
  item.addEventListener('click', () => {
    sidebar.classList.remove('show')
  })
})
const sidebar = document.querySelector('.sidebar')

const a = document.querySelectorAll('span a')
a.forEach((item) => {
  item.addEventListener('click', (e) => {
    // prevent default
    e.preventDefault()
    // navigate to specific spot
    const navHeight = nav.getBoundingClientRect().height
    const id = e.currentTarget.getAttribute('href').slice(1)
    const element = document.getElementById(id)
    let position = element.offsetTop - navHeight

    if (heightSidebar > 0) {
      position = position + heightSidebar
    }
    window.scrollTo({
      left: 0,
      top: position,
    })
  })
})
