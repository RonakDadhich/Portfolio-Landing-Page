window.onscroll = function(){
    if(document.body.onscroll > 0 || document.documentElement.scrollTop > 0){
        document.getElementById('navbar').classList.add('scrolled')
    }
    else{
        document.getElementById('navbar').classList.remove('scrolled')
    }
}
