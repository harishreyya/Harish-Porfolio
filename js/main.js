 
  let index = 0;
  const totalWorkItems = $(".work-item").length; 

   $(window).on("load",function(){
      $(".preloader").addClass("loaded");
   })

  $(document).ready(function () {

    // nav toggle
    $(".nav-toggle").click(function(){
      $(".header .nav").slideToggle();
    })
    $(".header .nav a").click(function(){
      if($(window).width() < 768){
         $(".header .nav").slideToggle();
      }
    })

    // fixed header 
    $(window).scroll(function(){
      if($(this).scrollTop() > 100){
        $(".header").addClass("fixed");
      }
      else{
        $(".header").removeClass("fixed");
      }
    })

  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;
     $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });


  $(".exp-tab").click(function(){
    $(".apart-tab").removeClass('yellow-font')
    $(".exp-tab").addClass('yellow-font')
   $(".some-activities").html('<span class="highlight-key">Company Name :</span> RangDe P2P Financial Services Pvt. Ltd <br><span class="highlight-key">Duration :</span> JUN 2022 TO MARCH 2023 <br><span class="highlight-key">Tech Stacks :</span> HTML | CSS | JavaScript | jQuery | APIs | ReactJs | Themeleaf <br><span class="highlight-key">Role :</span> Web Developer<br><span class="highlight-key">Responsibilities :</span><br>&#128073; Build pages like Invest, Regions, Individuals, Funds, ContactUs, SIProfile<br>&#128073; Worked on Referrals, Dashboard, AboutUs, login, FAQs, header, footer<br>&#128073; SEO maintained code and testing<br>&#128073; Weekend team support')
  })

  $(".apart-tab").click(function(){
    $(".apart-tab").addClass('yellow-font')
    $(".exp-tab").removeClass('yellow-font')
    $(".some-activities").html('<br>Some other activities that I love to do!<br><span>&#128073; Painting</span> <br><span>&#128073; Travelling</span><br><br>I believe in learning new things...."Today" because, "TOMORROW NEVER COMES "')
   })
    
  var typed = new Typed('.element', {
    strings: ['Full Stack Developer', 'FrontEnd Developer','Full Stack Developer', 'FrontEnd Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
  loopCount: Infinity,
  startDelay: 10
  });

  })
  
  