const nav = document.querySelector('#navbar')
window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset
    const navHeight = document.querySelector('#navbar').getBoundingClientRect().height
    if(scrollHeight > navHeight){
        nav.classList.add('back-color')
    }else{
        nav.classList.remove('back-color')
    }
})