// 105, 75
setInterval(function() {
  if( $(window).scrollTop() > 155) {
    document.querySelector('header').classList.add('fixed-top')
    document.querySelector('#carousel-mcs').style.marginTop = '7rem'
  }else {
    document.querySelector('header').classList.remove('fixed-top')
    document.querySelector('#carousel-mcs').style.marginTop = 'unset'
  }
})
