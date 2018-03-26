$(function() {
  var blackWhiteLightbox = new Lightbox({
    el: '#black-and-white',
    images: [
      'static/images/tempImageForSave 2.JPG',
      'static/images/tempImageForSave 5.JPG',
      'static/images/tempImageForSave 7.JPG',
      'static/images/tempImageForSave 8.JPG',
      'static/images/tempImageForSave 9.JPG',
      'static/images/site_image1.JPG',
      'static/images/site_image3.JPG',
      'static/images/site_image4.JPG',
      'static/images/site_image5.JPG',
      'static/images/site_image6.JPG',
    ]
  });

  var colorLightbox = new Lightbox({
    el: '#color',
    images: [
      'static/images/site_image2.jpg',
      'static/images/site_image7.jpg',
      'static/images/tempImageForSave 6.jpg',
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
});
