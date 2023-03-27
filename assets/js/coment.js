function viewReply(){
    document.getElementById('reply-section').style.display = 'block';

}
function coverReply(){
    document.getElementById('reply-section').style.display = 'none';

}


function viewComment(){
    document.getElementById('comment-section').style.display = 'block';

}
function coverComment(){
    document.getElementById('comment-section').style.display = 'none';

}

/*star*/

const allStar = document.querySelectorAll('.rating-feeling .star')
const ratingValue = document.querySelector('.rating-feeling input')
allStar.forEach((item, idx)=>{
    item.addEventListener('click',function () {
        let click = 0
        ratingValue.value = idx + 1
        console.log(ratingValue.value)

        allStar.forEach(i=>{
            i.classList.replace('bxs-star', 'bx-star')
            i.classList.remove('active')
        })
        for(let i=0; i<allStar.length;i++){
            if(i <= idx ){
                allStar[i].classList.replace('bx-star', 'bxs-star')
                allStar[i].classList.add('active')
            } else {
                allStar[i].style.setProperty('--i', click)
                click++
            }
        }
    })
})




/*modal
const openModal = document.querySelector('.button-one')
const modal = document.querySelector('.wrapper-feeling')
const closeModal = document.querySelector('.btn-fl')

openModal.addEventListener('click', ()=>{
    modal.classList.add('modal-show')
})

closeModal.addEventListener('click', (e)=>{
    e.preventDefault()
    modal.classList.remove('modal-show')
})
*/























