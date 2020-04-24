setInterval(function() {
  if(document.body.clientWidth > 990) {
    if( $(window).scrollTop() > 400) {
      document.querySelector('#fixed-header').style.display = 'flex'
    }else {
      document.querySelector('#fixed-header').style.display = 'none'
    }
  }else {
    if( $(window).scrollTop() > 600) {
      document.querySelector('#fixed-header').style.display = 'flex'
    }else {
      document.querySelector('#fixed-header').style.display = 'none'
    }
  }
})
