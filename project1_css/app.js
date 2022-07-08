const sidebar = document.querySelector('.sidebar')
console.log(sidebar)
// change on new branch to see what will happen after merge
const toggle = document.querySelector('.toggle')
toggle.addEventListener('click', () => {
  sidebar.classList.add('show')
})
const close_sidebar = document.querySelector('.sidebar button')
close_sidebar.addEventListener('click', () => {
  sidebar.classList.remove('show')
})
