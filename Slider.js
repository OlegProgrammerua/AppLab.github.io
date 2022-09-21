$(function(){
    $('.Review_slider').slick({
        infinite: false,
        prevArrow:'.arrow--left',
        nextArrow:'.arrow--right',
        fade:true,
        
      });
})


$('.nav a').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body')
      .animate({
        scrollTop: $(hash).offset().top
      },800);
  }
});
let nav=$("#nav");
let navToggle = $("#navtoggle")
navToggle.on("click", function(event){
  event.preventDefault();
  nav.toggleClass("show");
});
//Header
let header=$("#header");
    let intro=$("#Home");
    let scrollPos=$(window).scrollTop();
    let introH=intro.innerHeight();
    console.log(scrollPos);
    checkScroll(scrollPos, introH);
    $(window).on("scroll resize", function(){
        let introH=intro.innerHeight();
        scrollPos=$(this).scrollTop();
        checkScroll(scrollPos, introH)
        
    });
    function checkScroll(scrollPos, introH){
        if(scrollPos>introH){
            header.addClass("fixed");
        }
        else{
            header.removeClass("fixed");
        }
    }
