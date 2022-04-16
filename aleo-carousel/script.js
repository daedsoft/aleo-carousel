const cardsContainer = document.querySelector('.carousel__middle')
const btnLeft = document.querySelector('#btnLeft')
const btnRight = document.querySelector('#btnRight')

let cardWidth = 220
let scrollContainer = 0

const moveCards = (direction) => {
    let containerWidth = cardsContainer.clientWidth
   
    if (direction == 'right'){
        if (containerWidth > scrollContainer){            
            scrollContainer += cardWidth
            cardsContainer.scroll(scrollContainer, 0)            
        }        
    }else if (direction == 'left'){
        if (scrollContainer > 0){
            scrollContainer -= cardWidth
            cardsContainer.scroll(scrollContainer, 0)
        }
    }
}

btnLeft.addEventListener('click', ()=> {
    moveCards('left')    
})

btnRight.addEventListener('click', ()=> {
    moveCards('right')    
})