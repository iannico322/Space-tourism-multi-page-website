import data from './data.json' assert {type: 'json'};

let image = document.querySelector('.con-image')
let name = document.querySelector('.con-name')
let description = document.querySelector('.con-description')
let distance = document.querySelector('.con-distance')
let ett = document.querySelector('.con-ett')



let moon = document.querySelector('.moon')
let mars = document.querySelector('.mars')
let europa = document.querySelector('.europa')
let titan = document.querySelector('.titan')


let music = document.querySelector('.music')
music.play()


music.addEventListener('timeupdate',()=>{
   

    if (Math.floor(music.currentTime) % 2) {
        mars.click()
      }else if(Math.floor(music.currentTime) % 3){
        europa.click()
      }else if(Math.floor(music.currentTime) % 4){
        titan.click()
      }else if(Math.floor(music.currentTime)% 5){
        moon.click()
      }




})
data.destinations.filter(e=>e.name=="Moon").map(e=>(
    
    image.src = e.images.webp,
    name.textContent = e.name,
    description.textContent = e.description,
    distance.textContent = e.distance,
    ett.textContent = e.travel
    
 ))


function show(planet){
    data.destinations.filter(e=>e.name==planet).map(e=>(
        image.src = e.images.webp,
        name.textContent = e.name,
        description.textContent = e.description,
        distance.textContent = e.distance,
        ett.textContent = e.travel
        
     ))
}

moon.addEventListener('click',()=>{
    moon.className = "active moon"
    mars.className = "mars"
    europa.className = "europa"
    titan.className = "titan"
    show(moon.textContent)
})

mars.addEventListener('click',()=>{
    moon.className = " moon"
    mars.className = "active mars"
    europa.className = "europa"
    titan.className = "titan"
    show(mars.textContent)
})

europa.addEventListener('click',()=>{
    moon.className = " moon"
    mars.className = "mars"
    europa.className = "active europa"
    titan.className = "titan"
    show(europa.textContent)
})

titan.addEventListener('click',()=>{
    moon.className = " moon"
    mars.className = "mars"
    europa.className = "europa"
    titan.className = "active titan"
    show(titan.textContent)
})



