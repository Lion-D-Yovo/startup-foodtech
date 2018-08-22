document.addEventListener('DOMContentLoaded', function() {
    let i = 1;
    let widthWindow = $(window).width()-350;
  
    btnUpscale = function(element) {
      element.css({'transform':'scale(1.3)','background-color':'rgba(0,0,0,0.9)'})
    }
  
    btnDownscale = function(element) {
      element.css({'transform':'scale(1)','background-color':'rgba(0,0,0,0.1)'})
    }
  
    btnUpscale($('.btn_carousel:nth-child('+i+')'))
  
    $(' .arrow_right ').click(function(){
      btnDownscale($('.btn_carousel'))
  
      if (i < 3){
        $(' .carousel1 ').css({'transform':'translateX(-' + widthWindow*i + 'px)'})
        i++;
        console.log(i);
      }
      else {
        $(' .carousel1 ').css({'transform':'translateX(0px)'})
        i = 1
      }
      btnUpscale($('.btn_carousel:nth-child('+i+')'))
    })
  
    $(' .arrow_left ').click(function(){
      btnDownscale($('.btn_carousel'))
  
      if (i > 1){
        i--;
        $(' .carousel1 ').css({'transform':'translateX(-' + widthWindow*(i-1) + 'px)'})
      }
      else {
        i = 3
        $(' .carousel1 ').css({'transform':'translateX(-' + widthWindow*(i-1) + 'px)'})
      }
      btnUpscale($('.btn_carousel:nth-child('+i+')'))
    })
  
    $(' .btn_carousel ').click(function(){
      btnDownscale($(' .btn_carousel '))
      btnUpscale($(this))
      i = $(this).index('.container .btn_carousel') + 1
      $(' .carousel1 ').css({'transform':'translateX(-' + widthWindow*(i-1) + 'px)'})
    })
  
    setInterval(function(){
      btnDownscale($('.btn_carousel'))
      if (i < 3){
        $(' .carousel1 ').css({'transform':'translateX(-' + widthWindow*i + 'px)'})
        i++;
      }
      else {
        $(' .carousel1 ').css({'transform':'translateX(0px)'})
        i = 1
      }
      btnUpscale($('.btn_carousel:nth-child('+i+')'))
    },5000)
  
  })