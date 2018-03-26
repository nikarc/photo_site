$(function() {
  window.Lightbox = function (options) {
    var self = this;
    self.images = options.images;

    self.parent = options.el;

    self.currentIndex = options.startIndex || 0;

    var lightboxLength = $('.lightbox').length;
    var lightboxId = lightboxLength + 1;
    self.lightboxId = 'lightbox' + lightboxId;
    var _lightboxId = '#' + self.lightboxId;

    var html = '<div id="' + self.lightboxId + '" class="lightbox" style="display: none;">'+
                  '<div class="lightbox__close-wrap">'+
                    '<a href="#" class="lightbox__close"><i class="fa fa-times"></i></a>'+
                  '</div>'+
                  '<div class="lightbox__wrap">'+
                    '<a href="#" class="lightbox__controls lightbox__prev"><i class="fa fa-chevron-left"></i></a>'+
                    '<a href="" target="_blank" class="lightbox__image-link">'+
                      '<img class="lightbox__image" src="" alt="" />'+
                    '</a>'+
                    '<a href="#" class="lightbox__controls lightbox__next"><span class="fa fa-chevron-right"></span></a>'+
                  '</div>'+
                '</div>';

    $('body').append(html);

    self.imageEl = $(_lightboxId + ' .lightbox__image');

    self.imageEl.attr('src', self.images[0]);

    $(_lightboxId + ' .lightbox__next').click(function(e) {
      e.preventDefault();
      self.nextImage();
    });
    $(_lightboxId + ' .lightbox__prev').click(function(e) {
      e.preventDefault();
      self.previousImage();
    });

    self.show = function(index) {
      var image = self.images[index];
      if (image) {
        self.imageEl.attr('src', image);
        self.imageEl.parent('.lightbox__image-link').attr('href', image);
      }

      $(_lightboxId).fadeIn(300);
      $('body').css('overflow', 'hidden');
    };

    self.hide = function() {
      console.log($(_lightboxId + ' .lightbox'));
      $(_lightboxId).fadeOut(300);
      $('body').css('overflow', 'auto');
    };

    $(_lightboxId + ' .lightbox__close').click(function(e) {
      e.preventDefault();
      self.hide();
    });

    $(self.parent + ' .lightbox__open').click(function(e) {
      e.preventDefault();
      self.imageEl.attr('src', '');
      var index = $(this).data('lightbox-index');
      if (index) {
        index = parseInt(index, 10);
        self.currentIndex = index;
      }

      self.show(index || 0);
    });
  };

  Lightbox.prototype.nextImage = function() {
    var self = this;
    if (self.currentIndex === self.images.length - 1) {
      self.currentIndex = 0;
    } else {
      self.currentIndex++;
    }

    // var imageEl = $('#' + self.lightboxId + ' .lightbox__image');

    self.imageEl.animate({
      opacity: 0
    }, 300);
    setTimeout(function() {
      self.imageEl.attr('src', '');
      self.imageEl.attr('src', self.images[self.currentIndex]);
      self.imageEl.parent('.lightbox__image-link').attr('href', self.images[self.currentIndex]);
      self.imageEl.animate({
        opacity: 1
      }, 300);
    }, 300);
  };

  Lightbox.prototype.previousImage = function() {
    var self = this;
    if (self.currentIndex === 0) {
      self.currentIndex = self.images.length - 1;
    } else {
      self.currentIndex--;
    }

    self.imageEl.animate({
      opacity: 0
    }, 300);
    setTimeout(function() {
      self.imageEl.attr('src', '');
      self.imageEl.attr('src', self.images[self.currentIndex]);
      self.imageEl.parent('.lightbox__image-link').attr('href', self.images[self.currentIndex]);
      self.imageEl.animate({
        opacity: 1
      }, 300);
    }, 300);
  };
});
