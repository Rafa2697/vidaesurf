class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();

    /*tentativa de fazer card-slide
  
  const imgs = document.getElementById("fotos");
  const img = document.querySelectorAll("#fotos img");

  let idx = 0;

  function carrossel(){
    idx++;

    if(idx > img.length - 1){
      idx = 0;
    }

    imgs.style.transform = `translateX(${idx *500 }px)`;
  }

  setInterval(carrossel, 1800);
  */
  


 
  $(function(){

    $(".slick-carousel").slick({
      infinite:true,
      slidesToShow: 3,
      slidesToScrolls: 1,
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: $(''),
      nextArrow: $(''),
      
    });

  })


  