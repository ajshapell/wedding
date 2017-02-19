! function(a) {
    "use strict";
    a("a.page-scroll").bind("click", function(e) {
        var l = a(this);
        a("html, body").stop().animate({
            scrollTop: a(l.attr("href")).offset().top - 50
        }, 1250, "easeInOutExpo"), e.preventDefault()
    }), a("body").scrollspy({
        target: ".navbar-fixed-top",
        offset: 51
    }), a(".navbar-collapse ul li a").click(function() {
        a(".navbar-toggle:visible").click()
    }), a("#mainNav").affix({
        offset: {
            top: 100
        }
    })
}(jQuery);

$(document).ready(function() {
    var p = $("#gallery").portfolio();
    p = $('#gallery').portfolio({
            enableKeyboardNavigation: true, // enable / disable keyboard navigation (default: true)
            loop: false, // loop on / off (default: false)
            easingMethod: 'easeOutQuint', // other easing methods please refer: http://gsgd.co.uk/sandbox/jquery/easing/
            height: '300px', // gallery height
            width: '100%', // gallery width in pixels or in percentage
            lightbox: false, // dim off other images, highlights only currently viewing image
            showArrows: true, // show next / prev buttons
            logger: false, // for debugging purpose, turns on/off console.log() statements in the script
            spinnerColor: '#000', // Ajax loader color
            offsetLeft: -4, // position left value for current image
            opacityLightbox: '0.2' // opacity of other images which are not active

        });
    p.init();

    $('#pete').bind('mouseenter', function() {
      var selectedSrc = $('.our-story-image').attr('pete-src');
      $('.our-story-image').attr("src", selectedSrc);
    });
    $('#pete').bind('mouseleave', function() {
      var selectedSrc = $('.our-story-image').attr('init-src');
      $('.our-story-image').attr("src", selectedSrc);
    });

    $('#hot-dogs').bind('mouseenter', function() {
      var selectedSrc = $('.our-story-image').attr('hot-dog-src');
      $('.our-story-image').attr("src", selectedSrc);
    });
    $('#hot-dogs').bind('mouseleave', function() {
      var selectedSrc = $('.our-story-image').attr('init-src');
      $('.our-story-image').attr("src", selectedSrc);
    });

    $('#rosie').bind('mouseenter', function() {
      var selectedSrc = $('.our-story-image').attr('rosie-src');
      $('.our-story-image').attr("src", selectedSrc);
    });
    $('#rosie').bind('mouseleave', function() {
      var selectedSrc = $('.our-story-image').attr('init-src');
      $('.our-story-image').attr("src", selectedSrc);
    });

    $('#family').bind('mouseenter', function() {
      var selectedSrc = $('.our-story-image').attr('family-src');
      $('.our-story-image').attr("src", selectedSrc);
    });
    $('#family').bind('mouseleave', function() {
      var selectedSrc = $('.our-story-image').attr('init-src');
      $('.our-story-image').attr("src", selectedSrc);
    });
});

// Google Map

var poi = [{
        name: 'Wedding Location / Accommodation Option - Park Hyatt',
        categoryId: 'yr',
        lat: 38.906728,
        lng: -77.050926
    },
    {
        name: 'Accommodation Option - Hyatt Place Washington DC/Georgetown',
        lat: 38.905684,
        lng: -77.047849
    }
]

// Initialize map with all markers
var markers = {};
var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('accommodations-map'), {
        center: {
            lat: 38.902153,
            lng: -77.039291
        },
        zoom: 14,
        styles: [
            {
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "transit.station.rail",
                "stylers": [{"visibility": "on"}]
            },
            {
                "featureType": "transit.station.rail",
                "stylers": [{"visibility": "on"}]
            },
        ],
        gestureHandling: 'cooperative',
        scrollwheel: false,
    });

    var infowindow = new google.maps.InfoWindow({});
    var marker;

    for (var i = 0; i < poi.length; i++) {
        // Create a marker
        marker = new google.maps.Marker({
            position: {
                lat: poi[i].lat,
                lng: poi[i].lng
            },
            map: map
        });
        // Add marker to an object containing all markers
        markers[poi[i].name] = marker;

        marker.addListener('click', (function(marker, i) {
            return function() {
                infowindow.setContent(poi[i].name);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
}
