$(function() {
  var blackWhiteLightbox = new Lightbox({
    el: '#black-and-white',
    images: [
      'static/images/tempImageForSave2.jpg',
      'static/images/tempImageForSave5.jpg',
      'static/images/tempImageForSave7.jpg',
      'static/images/tempImageForSave8.jpg',
      'static/images/tempImageForSave9.jpg',
      'static/images/site_image1.jpg',
      'static/images/site_image3.jpg',
      'static/images/site_image4.jpg',
      'static/images/site_image5.jpg',
      'static/images/site_image6.jpg',
    ]
  });

  var colorLightbox = new Lightbox({
    el: '#color',
    images: [
      'static/images/site_image2.jpg',
      'static/images/site_image7.jpg',
      'static/images/tempImageForSave6.jpg',
      'static/images/site_image8.jpg',
      'static/images/site_image9.jpg',
    ]
  });

  $('.image-list')
    .on('mouseenter', function() {
      $(this).prev('.click-to-enlarge').animate({
        'opacity': 1
      }, 300);
    })
    .on('mouseleave', function() {
      $(this).prev('.click-to-enlarge').animate({
        'opacity': 0
      }, 300);
    });

  $('#nav-items a').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).siblings('.title').offset().top
    }, 300);
  });
});
