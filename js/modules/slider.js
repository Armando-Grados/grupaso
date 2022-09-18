
const slider = () => {
    //slide 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip' | 'creative' | 'cards'	
      const swiper = new Swiper('#heroSlider', {
        // Optional parameters
        // direction: 'vertical',
        //loop: true,
        //effect:'cube',
        speed: 2000,
    
    
        //'horizontal' | 'vertical'
        direction:'horizontal',
        // If we need pagination
        //comentarios del profesor
        // --swiper-navigation-size: 44px;
        /*
        --swiper-navigation-color: var(--swiper-theme-color);
        */
        pagination: {
          clickable: true,
          el: '.swiper-pagination',
          //type: 'bullets' | 'fraction' | 'progressbar' | 'custom'
          type:'bullets'
        },
    
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay:true,
    
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true,
        },
        autoplat:{
          delay:5000,
        }
      });
    };
  
  
    const mostSelledSlider =  new Swiper('#mostSelledSlider',{
      //allowSliderNext: true,
      slidesPerView: 1,
      speed: 2000,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        // when window width is >= 320px
        768: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        320: {
          slidesPerView: 1
          //spaceBetween: 20
        }
      },
      // autoplay:{
      //   delay:5000,
      // }
    });
    
    export default slider;
  