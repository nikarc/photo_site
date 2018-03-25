$(function() {
  window.Lightbox = function (options) {
    var self = this;
    self.images = options.images;

    var currentIndex = options.startIndex || 0;

    var html = '<div class="lightbox" style="display: none;">'+
                  '<div class="lightbox__close-wrap">'+
                    '<a href="#" class="lightbox__close"><i class="fa fa-times"></i></a>'+
                  '</div>'+
                  '<div class="lightbox__wrap">'+
                    '<a href="#" class="lightbox__prev"><i class="fa fa-chevron-left"></i></a>'+
                    '<img class="lightbox__image" src="" alt="" />'+
                    '<a href="#" class="lightbox__next"><span class="fa fa-chevron-right"></span></a>'+
                  '</div>'+
                '</div>';

    $('body').append(html);

    var imageEl = $('.lightbox__image');

    imageEl.attr('src', self.images[0]);

    self.nextImage = function() {
      if (currentIndex === self.images.length - 1) {
        currentIndex = 0;
      } else {
        currentIndex++;
      }

      imageEl.animate({
        opacity: 0
      }, 300);
      setTimeout(function() {
        imageEl.attr('src', '');
        imageEl.attr('src', self.images[currentIndex]);
        imageEl.animate({
          opacity: 1
        }, 300);
      }, 300);
    };

    self.previousImage = function() {
      if (currentIndex === 0) {
        currentIndex = self.images.length - 1;
      } else {
        currentIndex--;
      }

      imageEl.animate({
        opacity: 0
      }, 300);
      setTimeout(function() {
        imageEl.attr('src', '');
        imageEl.attr('src', self.images[currentIndex]);
        imageEl.animate({
          opacity: 1
        }, 300);
      }, 300);
    };

    $('.lightbox__next').click(function(e) {
      e.preventDefault();
      self.nextImage();
    });
    $('.lightbox__prev').click(function(e) {
      e.preventDefault();
      self.previousImage();
    });

    self.show = function(index) {
      if (self.images[index]) {
        imageEl.attr('src', self.images[index]);
      }
      $('.lightbox').fadeIn(300);
      $('body').css('overflow', 'hidden');
    };

    self.hide = function() {
      $('.lightbox').fadeOut(300);
      $('body').css('overflow', 'auto');
    };

    $('.lightbox__close').click(function(e) {
      e.preventDefault();
      self.hide();
    });

    $('.lightbox__open').click(function(e) {
      e.preventDefault();
      imageEl.attr('src', '');
      var index = $(this).data('lightbox-index');
      if (index) {
        index = parseInt(index, 10);
        currentIndex = index;
      }

      self.show(index || 0);
    });
  };
});
