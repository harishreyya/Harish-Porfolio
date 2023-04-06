 
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

    // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
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
    
  // 	// set lightbox img max height
  // 	const wHeight = $(window).height();
  // 	$(".lightbox-img").css("max-height",wHeight+"px");

  // 	// lightbox 
  // 	$(".work-item-inner").click(function(){
  // 		index = $(this).parent(".work-item").index();
  // 		$(".lightbox").addClass("open");
  // 		lightboxSlideShow();
  // 	})
  // 	$(".lightbox .prev").click(function(){
  //      if(index == 0){
  //      	 index = totalWorkItems-1;
  //      }
  //      else{
  //      	index--;
  //      }
  //      lightboxSlideShow();
  // 	})
  // 	$(".lightbox .next").click(function(){
  // 		if(index == totalWorkItems-1){
  // 			index = 0
  // 		}
  // 		else{
  // 			index++;
  // 		}
  // 		lightboxSlideShow();
  // 	})

  // 	// close lightbox 
  // 	$(".lightbox-close").click(function(){
  // 		$(".lightbox").removeClass("open");
  // 	})

  // 	// close lightbox when clicked outside of img-box 
  //    $(".lightbox").click(function(event){
  //      if($(event.target).hasClass("lightbox")){
  //      	 $(this).removeClass("open");
  //      }
  //    })
  var typed = new Typed('.element', {
    strings: ['Full Stack Developer', 'FrontEnd Developer','Full Stack Developer', 'FrontEnd Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
  loopCount: Infinity,
  startDelay: 10
  });

  })

  // function lightboxSlideShow(){
  //   const imgSrc = $(".work-item").eq(index).find("img").attr("data-large");
  //   const category = $(".work-item").eq(index).find("h4").html();
  //   $(".lightbox-img").attr("src",imgSrc);
  //   $(".lightbox-category").html(category)
  //   $(".lightbox-counter").html(totalWorkItems + "/" + (index+1));
  // }
  

  /*------
  
Company Name : RangDe P2P Financial <br>
Services Pvt. Ltd <br>
Duration: JUN 2022 TO MARCH 2023 <br>
Tech Stacks: HTML | CSS | JavaScript |
jQuery | APIs | Themeleaf | ReactJs <br>
Role: Web Developer<br>
Responsibility:<br>
Buildpages like Invest, AboutUs, ContactUs, SIProfile<br>
Worked on referrals, login, header, footer<br>
SEO maintained code and testing<br>
Weekend team support
 -----*/
  