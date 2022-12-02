
// Review section

const slides = document.querySelectorAll(".card")
var counter = 0;
slides.forEach(
  (card,index) => {
    card.style.left = `${index * 100}%`

  })

const goPrev = ()=>{
    counter--
    slideImage()
   
}  

const goNext = ()=>{
    counter++
    slideImage()
}
const slideImage =() =>{
    slides.forEach(
        (card) => {
            card.style.transform = `transalateX(-${counter * 100}%)`
        }
    )
}