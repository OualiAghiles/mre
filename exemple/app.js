function word(selector) {
  var btn = document.querySelector(selector)
  btn.addEventListener('click', function (e) {
    e.preventDefault()
    if(this.classList.contains('active')){
      this.classList.remove('fadeIn')
      this.offsetWidth
      this.classList.remove('active')
    } else {
      this.classList.add('active')
      this.offsetWidth
      this.classList.add('fadeIn')
    }

  })
  document.addEventListener('click', function (event) {
    //event.preventDefault()
    var target = document.querySelector('.menu').contains(event.target)
    var dropdown = document.querySelector('.dropdown').contains(event.target)
    if(!target && !dropdown){
      document.querySelector('.menu').classList.remove('fadeIn')
      document.querySelector('.menu').offsetWidth
      document.querySelector('.menu').classList.remove('active')
    }
  })
}



word('.menu')
