/*
Theme Name: Morphy
Description: Architecture/Agency HTML Template
Author: RafavaThemes
Version: 1.0
*/

/* ==================================================================
 
 * Table of Contents:
 *
 * 1.0 - Load functions
 * 2.0 - Background Image
 * 3.0 - Skroll
 * 4.0 - Responsive heading
 * 5.0 - Morph open
 * 6.0 - Morph close
 * 7.0 - Carousel
 * 8.0 - Isotope functions
 * 9.0 - Isotope (Grid)
 * 10.0- Resize morph blocks
 * 11.0- Init hide carousel
 * 12.0- Google map
 * 13.0- Photoswipe
 * 14.0- Contact form

================================================================== */

$(window).load(function(){
	 "use strict";
         
	    setTimeout(function(){               
		    $('.wp-loader').velocity({
	            opacity : 0,translateY: "-60px"}, {duration: 450,
		    	complete: function(){
	                $('#bg-loader').velocity({translateY : "-100%"},{duration: 1250,easing: [0.7,0,0.3,1],display: "none"}
	            )}
		    })      
	    },800);

	    setTimeout(function(){   
	  		$(".vegas-container").addClass("scale-show");
	    },1000);
  
  		setTimeout(function(){     	
			$(".heading-text-1").addClass("slideInUp animated");
	  		$(".heading-text-2").addClass("slideInUp delay animated");
	    },1800);

});

$(document).ready(function() {
    "use strict";

		//BACKGROUND IMAGE
		var main = $(".bg-images");
		main.vegas({
		    slides: [
		       { src: "img/background.jpg" },  //('jump',0)
		       { src: "img/background.jpg" },  //('jump',1)
		       { src: "img/background.jpg" },  //('jump',2)
		       { src: "img/background.jpg" },  //('jump',3)
		       { src: "img/background.jpg" },  //('jump',4)
		       { src: "img/background.jpg" },  //('jump',5)
		       { src: "img/background.jpg" },  //('jump',6)
		       { src: "img/background.jpg" },  //('jump',7)
		       { src: "img/background.jpg" }   //('jump',8)
		    ],
		    delay:300,
		    timer:false,
		    autoplay:false,
		    align:'58%'	    
		});	
		
		if ($.vegas.isNotMobile()) {
		var morph = $(".morph"); 
		var morph_title = $(".morph-title"); 
		
		//ABOUT
 		var about = $(".button-a"); 
	    about.on("click", function(){
	     	if (!morph.hasClass("open")) {
	        main.vegas('options', 'transition', 'fade').vegas('jump',0);
	        }
	    });

 		//PROJECT1
	    var mp_1 = $(".mp_1").find(morph_title); 
	    mp_1.on("mouseenter", function(){
	     	if (!morph.hasClass("open")) {
	        main.vegas('options', 'transition', 'fade').vegas('jump',1);
	        }
	    });

 		//PROJECT2
	    var mp_2 = $(".mp_2").find(morph_title); 
	    mp_2.on("mouseenter", function(){
	     	if (!morph.hasClass("open")) {
	        main.vegas('options', 'transition', 'fade').vegas('jump',2);
	        }
	    });

	    //PROJECT3
	    var mp_3 = $(".mp_3").find(morph_title); 
	    mp_3.on("mouseenter", function(){
	     	if (!morph.hasClass("open")) {
	        main.vegas('options', 'transition', 'fade').vegas('jump',3);
	        }
	    });

	    //PROJECT4
	    var mp_4 = $(".mp_4").find(morph_title); 
	    mp_4.on("mouseenter", function(){
	     	if (!morph.hasClass("open")) {
	        main.vegas('options', 'transition', 'fade').vegas('jump',4);
	        }
	    });

	    //PROJECT5
	    var mp_5 = $(".mp_5").find(morph_title); 
	    mp_5.on("mouseenter", function(){
	     	if (!morph.hasClass("open")) {
	        main.vegas('options', 'transition', 'fade').vegas('jump',5);
	        }
	    });

	    //PROJECT6
	    var mp_6 = $(".mp_6").find(morph_title); 
	    mp_6.on("mouseenter", function(){
	     	if (!morph.hasClass("open")) {
	        main.vegas('options', 'transition', 'fade').vegas('jump',6);
	        }
	    });

	    //LONDON
	    var mo_1 = $(".mo_1").find(morph_title); 
	    mo_1.on("mouseenter", function(){
	     	if (!morph.hasClass("open")) {
	        main.vegas('options', 'transition', 'fade').vegas('jump',7);
	        }
	    });

	    //PARIS
	    var mo_2 = $(".mo_2").find(morph_title); 
	    mo_2.on("mouseenter", function(){
	     	if (!morph.hasClass("open")) {
	        main.vegas('options', 'transition', 'fade').vegas('jump',8);
	        }
	    });
	    }
		
	    //SKROLL (PARALLAX)
		var s = skrollr.init({forceHeight:false});
		if (s.isMobile()) {
		    s.destroy();
		}

	    //RESPONSIVE HEADING
  		function responsiveHeading(){
		    $('.left-content .heading-text-1 h1').quickfit({ max: 95,tolerance:0.15});
		    $('.left-content .heading-text-2 h1').quickfit({ max: 80,tolerance:0.15});
		}
		responsiveHeading();
		$(window).on('resize', function(){
			responsiveHeading();  	  
		});
		
		//MORPH OPEN		
		$(".morph-title").on("click", function(e) {
			if (!$(".morph").hasClass("open")) {
				$('.left-container').removeClass("col-md-5").addClass('col-md-4');
	        	$(this).parent().addClass("open").siblings().removeClass("open");
	        	$('.morph-show').find('.morph-title').not(this).addClass('fade').parent().addClass('pointer');
	        	$('.button-group-menu').addClass("low-opa");  
	        	$('.morph-close').addClass("open-close-button"); 
        		$('.animated-overlay').animate({"top":"0%"}, 150);
				if ($(window).width() > 1024) {
					$("html, body").animate({ scrollTop: 0 }, 0);
				}
			} 
			setTimeout(function(){
            	responsiveHeading();
         	}, 450);   
         	e.stopPropagation(); 
    	});
    	//MORPH CLOSE	
		$(".morph-close,.morph-close-mobile").on("click", function(e) {
			setTimeout(function(){
				$('.left-container').removeClass("col-md-4").addClass('col-md-5');
				$('.open').addClass("pointer"); 
	        	$('.morph').removeClass('open');
	        	$('.morph-close').removeClass("open-close-button"); 
		        $('.animated-overlay').animate({"top":"100%"}, 0);
        	},65)
         	setTimeout(function(){
		     	$(".morph").children().removeClass('fade'); 
		     	$('.button-group-menu').removeClass("low-opa") ;  
    		},350)
    		setTimeout(function(){
            	responsiveHeading();	
         	}, 450);
         	setTimeout(function(){
    			$('.morph').removeClass("pointer");
         	}, 500);
    		if ($(window).width() > 1024) {
    			$("html, body").animate({ scrollTop: 0 }, 600);
    		}
    		e.stopPropagation();
    	});

		//CAROUSEL
		var carousel = $(".owl-carousel") ;          
		carousel.slick({
	        infinite: true,
	  		slidesToShow: 4,
	  		slidesToScroll: 1,
	  		arrows: false,
	  		draggable:false,
	  		responsive: [
			    {
			      breakpoint: 1200,
			      settings: {
			        slidesToShow: 3
			      }
			    },
			     {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 5
			      }
			    },
			    {
			      breakpoint: 991,
			      settings: {
			        slidesToShow: 4
			      }
			    },
			     {
			      breakpoint: 768,
			      settings: {
			        slidesToShow: 3
			      }
			    },
			    {
			      breakpoint: 469,
			      settings: {
			        slidesToShow: 2
			      }
			    },
			    {
			      breakpoint: 321,
			      settings: {
			        slidesToShow: 1
			      }
			    }
		  	]
        });
		$(".navigation ul .next").on("click", function() {
		    carousel.slick('slickNext');
		   });
		$(".navigation ul .prev").on("click", function() {
		    carousel.slick('slickPrev');
		});
		
		//DISABLE ISOTOPE TRANSITIONS
		Isotope.prototype._positionItem = function( item, x, y ) {
		    item.goTo( x, y );
		};
	  	
	  	//DISABLE RESIZE IF CONTENT OPEN
	 	Isotope.prototype.onresize = function( ) {
			if (!$(".morph").hasClass("open")) {
		    	this.resize();
		   }
		};
		
		//ADD-REMOVE CLASS ON REVEAL
		var itemReveal = Isotope.Item.prototype.reveal;
		Isotope.Item.prototype.reveal = function() {
		  itemReveal.apply( this, arguments );
		  $( this.element ).addClass('morph-show').removeClass('pointer');
		};
		//ADD-REMOVE CLASS ON HIDE
		var itemHide = Isotope.Item.prototype.hide;
		Isotope.Item.prototype.hide = function() {
		  itemHide.apply( this, arguments );
		  $( this.element ).removeClass('morph-show').addClass('pointer');
		};

		//ISOTOPE (GRID)
		var $grid = $('#grid').isotope({
      		layoutMode: 'vertical',
      		filter: '.offices',//THIRD	
     		itemSelector:".morph",
      		percentPosition: true,
      		transitionDuration: '0',
      		hiddenStyle: {
			  opacity: 0
			},
			visibleStyle: {
			  opacity: 1
			}
    	});
		$grid.isotope({ filter: '.projects' });//SECOND
		$grid.isotope({ filter: '.about' });//FIRST
		$grid.isotope( 'option', {
		  transitionDuration: '0.35s'
		});
		// bind filter button click
		$('.filters-button-group-menu').on( 'click', 'button', function() {
		    var filterValue = $(this).attr('data-filter');
		  	$grid.isotope({ filter: filterValue });
		});
		// change is-checked class on buttons
		$('.button-group-menu').each( function( i, buttonGroup ) {
		    var $buttonGroup = $( buttonGroup );
		    $buttonGroup.on( 'click', 'button', function() {
		      $buttonGroup.find('.is-checked-menu').removeClass('is-checked-menu');
		      $( this ).addClass('is-checked-menu');		  
		    });
		});

		//RESIZE BLOCKS WHEN CLOSE CONTENT
		$('.morph-close,.morph-close-mobile').on("click",function(){
			setTimeout(function(){
				if (!$(".morph").hasClass("open")) {
	            	$grid.isotope('layout');
	            }
        	},1500)
        }); 
		
		//INIT HIDE CAROUSEL
		$grid.on( 'arrangeComplete', function( event, filteredItems ) {
		    if ($(".button-group-menu ul li .button-b").hasClass("is-checked-menu")) {
		        carousel.slick('setPosition');   
		    } 
		});

		//GOOGLE MAP
	    function initializeGoogleMap() {
	        var styles = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#0c0b0b"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#090909"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#d4e4eb"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#fef7f7"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#9b7f7f"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#fef7f7"}]}];
	        //LONDON MAP
	        var location1 = new google.maps.LatLng(51.507193,-0.127802);
	        var map1 = new google.maps.Map(document.getElementById('map_div_1'), {
	      		center: location1,
		        zoom: 15,
		        scrollwheel: false,
		        navigationControl: false,
		        mapTypeControl: false,
		        scaleControl: false,
		        disableDefaultUI: true,
		        styles: styles
    		});
    		var marker1 = new google.maps.Marker({
	        	position: location1
	        });
	        marker1.setMap(map1);
    		//PARIS MAP
    		var location2 = new google.maps.LatLng(48.856527,2.352104);
    		var map2 = new google.maps.Map(document.getElementById('map_div_2'), {
	      		center: location2,
		        zoom: 15,
		        scrollwheel: false,
		        navigationControl: false,
		        mapTypeControl: false,
		        scaleControl: false,
		        disableDefaultUI: true,
		        styles: styles
    		});
    		var marker2 = new google.maps.Marker({
	        	position: location2
	        });
	        marker2.setMap(map2);
			//RELOAD GOOGLE MAPS
	        $grid.on( 'arrangeComplete', function( event, filteredItems ) {
		    	if ($(".button-group-menu ul li .button-c").hasClass("is-checked-menu")) {
		    		//LONDON MAP
		    		google.maps.event.trigger(map1, 'resize');
					map1.setCenter(location1);
					//PARIS MAP
					google.maps.event.trigger(map2, 'resize');
					map2.setCenter(location2);
		      	} 
			});
	    }
    	initializeGoogleMap();

	  	//PHOTOSWIPE
	    var initPhotoSwipeFromDOM = function(gallerySelector) {
	    // parse slide data (url, title, size ...) from DOM elements 
	    // (children of gallerySelector)
	    var parseThumbnailElements = function(el) {
	        var thumbElements = el.childNodes,
	            numNodes = thumbElements.length,
	            items = [],
	            figureEl,
	            linkEl,
	            size,
	            item;

	        for(var i = 0; i < numNodes; i++) {

	            figureEl = thumbElements[i]; // <figure> element

	            // include only element nodes 
	            if(figureEl.nodeType !== 1) {
	                continue;
	            }

	            linkEl = figureEl.children[0]; // <a> element

	            size = linkEl.getAttribute('data-size').split('x');

	            // create slide object
	            item = {
	                src: linkEl.getAttribute('href'),
	                w: parseInt(size[0], 10),
	                h: parseInt(size[1], 10)
	            };

	            if(figureEl.children.length > 1) {
	                // <figcaption> content
	                item.title = figureEl.children[1].innerHTML; 
	            }

	            if(linkEl.children.length > 0) {
	                // <img> thumbnail element, retrieving thumbnail url
	                item.msrc = linkEl.children[0].getAttribute('src');
	            } 

	            item.el = figureEl; // save link to element for getThumbBoundsFn
	            items.push(item);
	        }

	        return items;
	    };

	    // find nearest parent element
	    var closest = function closest(el, fn) {
	        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
	    };

	    // triggers when user clicks on thumbnail
	    var onThumbnailsClick = function(e) {
	        e = e || window.event;
	        e.preventDefault ? e.preventDefault() : e.returnValue = false;

	        var eTarget = e.target || e.srcElement;

	        // find root element of slide
	        var clickedListItem = closest(eTarget, function(el) {
	            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
	        });

	        if(!clickedListItem) {
	            return;
	        }

	        // find index of clicked item by looping through all child nodes
	        // alternatively, you may define index via data- attribute
	        var clickedGallery = clickedListItem.parentNode,
	            childNodes = clickedListItem.parentNode.childNodes,
	            numChildNodes = childNodes.length,
	            nodeIndex = 0,
	            index;

	        for (var i = 0; i < numChildNodes; i++) {
	            if(childNodes[i].nodeType !== 1) { 
	                continue; 
	            }

	            if(childNodes[i] === clickedListItem) {
	                index = nodeIndex;
	                break;
	            }
	            nodeIndex++;
	        }

	        if(index >= 0) {
	            // open PhotoSwipe if valid index found
	            openPhotoSwipe( index, clickedGallery );
	        }
	        return false;
	    };

	    // parse picture index and gallery index from URL (#&pid=1&gid=2)
	    var photoswipeParseHash = function() {
	        var hash = window.location.hash.substring(1),
	        params = {};

	        if(hash.length < 5) {
	            return params;
	        }

	        var vars = hash.split('&');
	        for (var i = 0; i < vars.length; i++) {
	            if(!vars[i]) {
	                continue;
	            }
	            var pair = vars[i].split('=');  
	            if(pair.length < 2) {
	                continue;
	            }           
	            params[pair[0]] = pair[1];
	        }

	        if(params.gid) {
	            params.gid = parseInt(params.gid, 10);
	        }

	        return params;
	    };

	    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
	        var pswpElement = document.querySelectorAll('.pswp')[0],
	            gallery,
	            options,
	            items;

	        items = parseThumbnailElements(galleryElement);
	        	// define options (if needed)
	        	options = {
	            showHideOpacity:true,
	            bgOpacity:0.98,
	            history:false,
	            closeOnVerticalDrag:false,
	            // define gallery index (for URL)
	            galleryUID: galleryElement.getAttribute('data-pswp-uid')

        	};
	        // PhotoSwipe opened from URL
	        if(fromURL) {
	            if(options.galleryPIDs) {
	                // parse real index when custom PIDs are used 
	                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
	                for(var j = 0; j < items.length; j++) {
	                    if(items[j].pid == index) {
	                        options.index = j;
	                        break;
	                    }
	                }
	            } else {
	                // in URL indexes start from 1
	                options.index = parseInt(index, 10) - 1;
	            }
	        } else {
	            options.index = parseInt(index, 10);
	        }

	        // exit if index not found
	        if( isNaN(options.index) ) {
	            return;
	        }

	        if(disableAnimation) {
	            options.showAnimationDuration = 0;
	        }

	        // Pass data to PhotoSwipe and initialize it
	        gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    		gallery.init();
	    };

	    // loop through all gallery elements and bind events
	    var galleryElements = document.querySelectorAll( gallerySelector );

	    for(var i = 0, l = galleryElements.length; i < l; i++) {
	        galleryElements[i].setAttribute('data-pswp-uid', i+1);
	        galleryElements[i].onclick = onThumbnailsClick;
	    }

	    // Parse URL and open gallery if it contains #&pid=3&gid=1
	    var hashData = photoswipeParseHash();
	    if(hashData.pid && hashData.gid) {
	        openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
	    }
		};
		// execute above function
		initPhotoSwipeFromDOM('.my-gallery');

	    //CONTACT FORM
	    $("#contactForm input,#contactForm textarea").jqBootstrapValidation({       
	        preventSubmit: true,
	        submitError: function($form, event, errors) {
	        },
	        submitSuccess: function($form, event) {
	        event.preventDefault(); 
	        var name = $("input#name").val();  
	        var email = $("input#email").val(); 
	        var message = $("textarea#message").val();
	        var firstName = name; 
	        if (firstName.indexOf(' ') >= 0) {
	        firstName = name.split(' ').slice(0, -1).join(' ');
	        }        
	        $.ajax({
	            url: "js/mailer.php",
	            type: "POST",
	            data: {name: name, email: email, message: message},
	            cache: false,
	            success: function() {  
	            // Success message
	            $('#success').html("<div class='alert alert-success'>");
	            $('#success > .alert-success').append("Your message has been sent. ");
	            $('#success > .alert-success').append('</div>');
	            //clear all fields
	            $('#contactForm').trigger("reset");
	            },
	            error: function() {      
	            // Fail message
	            $('#success').html("<div class='alert alert-danger'>");
	            $('#success > .alert-danger').append("Sorry "+firstName+" it seems that my mail server is not responding");
	            $('#success > .alert-danger').append('</div>');
	            //clear all fields
	            $('#contactForm').trigger("reset");
	            },
	            })
	            },
	            filter: function() {
	            return $(this).is(":visible");
	            }
	    });

});