$(function() {
  var source = $('#thumbnail-template').html();
  var template = Handlebars.compile(source);

  var thumbnails = [
    'static/images/san_francisco/thumbs/IMG_0047.jpg',
    'static/images/san_francisco/thumbs/IMG_2929.jpg',
    'static/images/san_francisco/thumbs/IMG_2931.jpg',
    'static/images/san_francisco/thumbs/IMG_2932.jpg',
    'static/images/san_francisco/thumbs/IMG_2933.jpg',
    'static/images/san_francisco/thumbs/IMG_2934.jpg',
    'static/images/san_francisco/thumbs/IMG_2936.jpg',
    'static/images/san_francisco/thumbs/IMG_2937.jpg',
    'static/images/san_francisco/thumbs/IMG_2938.jpg',
    'static/images/san_francisco/thumbs/IMG_2939.jpg',
    'static/images/san_francisco/thumbs/IMG_2940.jpg',
    'static/images/san_francisco/thumbs/IMG_2941.jpg',
    'static/images/san_francisco/thumbs/IMG_2944.jpg',
    'static/images/san_francisco/thumbs/IMG_2945.jpg',
    'static/images/san_francisco/thumbs/IMG_2946.jpg',
    'static/images/san_francisco/thumbs/IMG_2947.jpg',
    'static/images/san_francisco/thumbs/IMG_2948.jpg',
    'static/images/san_francisco/thumbs/IMG_2949.jpg',
    'static/images/san_francisco/thumbs/IMG_2951.jpg',
    'static/images/san_francisco/thumbs/IMG_2954.jpg',
    'static/images/san_francisco/thumbs/IMG_2955.jpg',
    'static/images/san_francisco/thumbs/IMG_2959.jpg',
    'static/images/san_francisco/thumbs/IMG_2960.jpg',
    'static/images/san_francisco/thumbs/IMG_2961.jpg',
    'static/images/san_francisco/thumbs/IMG_2971.jpg',
    'static/images/san_francisco/thumbs/IMG_2972.jpg',
    'static/images/san_francisco/thumbs/IMG_2973.jpg',
    'static/images/san_francisco/thumbs/IMG_2975.jpg',
    'static/images/san_francisco/thumbs/IMG_2976.jpg',
    'static/images/san_francisco/thumbs/IMG_2977.jpg',
    'static/images/san_francisco/thumbs/IMG_2980.jpg',
    'static/images/san_francisco/thumbs/IMG_2981.jpg',
    'static/images/san_francisco/thumbs/IMG_2985.jpg',
    'static/images/san_francisco/thumbs/IMG_2986.jpg',
    'static/images/san_francisco/thumbs/IMG_2987.jpg',
    'static/images/san_francisco/thumbs/IMG_2989.jpg',
    'static/images/san_francisco/thumbs/IMG_2995.jpg',
    'static/images/san_francisco/thumbs/IMG_2996.jpg',
    'static/images/san_francisco/thumbs/IMG_3003.jpg',
    'static/images/san_francisco/thumbs/IMG_3006.jpg',
    'static/images/san_francisco/thumbs/IMG_3008.jpg',
    'static/images/san_francisco/thumbs/IMG_3014.jpg',
    'static/images/san_francisco/thumbs/IMG_3015.jpg',
    'static/images/san_francisco/thumbs/IMG_3016.jpg',
    'static/images/san_francisco/thumbs/IMG_3019.jpg',
    'static/images/san_francisco/thumbs/IMG_3021.jpg',
    'static/images/san_francisco/thumbs/IMG_3022.jpg',
    'static/images/san_francisco/thumbs/IMG_3028.jpg',
    'static/images/san_francisco/thumbs/IMG_3029.jpg',
    'static/images/san_francisco/thumbs/IMG_3033.jpg',
    'static/images/san_francisco/thumbs/IMG_3045.jpg',
    'static/images/san_francisco/thumbs/IMG_3050.jpg',
    'static/images/san_francisco/thumbs/IMG_3051.jpg',
    'static/images/san_francisco/thumbs/IMG_3055.jpg',
    'static/images/san_francisco/thumbs/IMG_3057.jpg',
    'static/images/san_francisco/thumbs/IMG_3061.jpg',
    'static/images/san_francisco/thumbs/IMG_3065.jpg',
    'static/images/san_francisco/thumbs/IMG_3066.jpg',
    'static/images/san_francisco/thumbs/IMG_3070.jpg',
    'static/images/san_francisco/thumbs/IMG_3071.jpg',
    'static/images/san_francisco/thumbs/IMG_3073.jpg',
    'static/images/san_francisco/thumbs/IMG_8781.jpg',
    'static/images/san_francisco/thumbs/IMG_8782.jpg',
    'static/images/san_francisco/thumbs/IMG_8783.jpg',
    'static/images/san_francisco/thumbs/IMG_8784.jpg',
    'static/images/san_francisco/thumbs/IMG_8786.jpg',
    'static/images/san_francisco/thumbs/IMG_8789.jpg',
    'static/images/san_francisco/thumbs/IMG_8790.jpg',
    'static/images/san_francisco/thumbs/IMG_8795.jpg',
    'static/images/san_francisco/thumbs/IMG_8799.jpg',
    'static/images/san_francisco/thumbs/IMG_8802.jpg',
    'static/images/san_francisco/thumbs/IMG_8803.jpg',
    'static/images/san_francisco/thumbs/IMG_8805.jpg',
    'static/images/san_francisco/thumbs/IMG_8807.jpg',
    'static/images/san_francisco/thumbs/IMG_8808.jpg',
    'static/images/san_francisco/thumbs/IMG_8811.jpg',
    'static/images/san_francisco/thumbs/IMG_8812.jpg',
    'static/images/san_francisco/thumbs/IMG_8814.jpg',
    'static/images/san_francisco/thumbs/IMG_8815.jpg',
    'static/images/san_francisco/thumbs/IMG_8816.jpg',
    'static/images/san_francisco/thumbs/IMG_8818.jpg',
    'static/images/san_francisco/thumbs/IMG_8819.jpg',
    'static/images/san_francisco/thumbs/IMG_8827.jpg',
    'static/images/san_francisco/thumbs/IMG_8834.jpg',
    'static/images/san_francisco/thumbs/IMG_8841.jpg',
    'static/images/san_francisco/thumbs/IMG_8843.jpg',
    'static/images/san_francisco/thumbs/IMG_8846.jpg',
    'static/images/san_francisco/thumbs/IMG_8861.jpg',
    'static/images/san_francisco/thumbs/IMG_8863.jpg',
    'static/images/san_francisco/thumbs/IMG_8867.jpg',
    'static/images/san_francisco/thumbs/IMG_8868.jpg',
    'static/images/san_francisco/thumbs/IMG_8870.jpg',
    'static/images/san_francisco/thumbs/IMG_8872.jpg',
    'static/images/san_francisco/thumbs/IMG_8873.jpg',
    'static/images/san_francisco/thumbs/IMG_8874.jpg',
    'static/images/san_francisco/thumbs/IMG_8875.jpg',
    'static/images/san_francisco/thumbs/IMG_8876.jpg',
    'static/images/san_francisco/thumbs/IMG_8882.jpg',
    'static/images/san_francisco/thumbs/IMG_8883.jpg',
    'static/images/san_francisco/thumbs/IMG_8884.jpg',
    'static/images/san_francisco/thumbs/IMG_8887.jpg',
    'static/images/san_francisco/thumbs/IMG_8889.jpg',
    'static/images/san_francisco/thumbs/IMG_8890.jpg',
    'static/images/san_francisco/thumbs/IMG_8893.jpg',
    'static/images/san_francisco/thumbs/IMG_8894.jpg',
    'static/images/san_francisco/thumbs/IMG_8895.jpg',
    'static/images/san_francisco/thumbs/IMG_8896.jpg',
    'static/images/san_francisco/thumbs/IMG_8897.jpg',
    'static/images/san_francisco/thumbs/IMG_8899.jpg',
    'static/images/san_francisco/thumbs/IMG_8900.jpg',
    'static/images/san_francisco/thumbs/IMG_8901.jpg',
    'static/images/san_francisco/thumbs/IMG_8903.jpg',
    'static/images/san_francisco/thumbs/IMG_8904.jpg',
    'static/images/san_francisco/thumbs/IMG_8907.jpg',
    'static/images/san_francisco/thumbs/IMG_8908.jpg',
    'static/images/san_francisco/thumbs/IMG_8909.jpg',
    'static/images/san_francisco/thumbs/IMG_8911.jpg',
    'static/images/san_francisco/thumbs/IMG_8913.jpg',
    'static/images/san_francisco/thumbs/IMG_8916.jpg',
    'static/images/san_francisco/thumbs/IMG_8917.jpg',
    'static/images/san_francisco/thumbs/IMG_8919.jpg',
    'static/images/san_francisco/thumbs/IMG_8920.jpg',
    'static/images/san_francisco/thumbs/IMG_8921-2.jpg',
    'static/images/san_francisco/thumbs/IMG_8921-3.jpg',
    'static/images/san_francisco/thumbs/IMG_8921.jpg',
    'static/images/san_francisco/thumbs/IMG_8922.jpg',
    'static/images/san_francisco/thumbs/IMG_8923.jpg',
    'static/images/san_francisco/thumbs/IMG_8925.jpg',
    'static/images/san_francisco/thumbs/IMG_8926.jpg',
    'static/images/san_francisco/thumbs/IMG_8927.jpg',
    'static/images/san_francisco/thumbs/IMG_8929.jpg',
    'static/images/san_francisco/thumbs/IMG_8930.jpg',
    'static/images/san_francisco/thumbs/IMG_8934.jpg',
    'static/images/san_francisco/thumbs/IMG_8937.jpg',
    'static/images/san_francisco/thumbs/IMG_8938.jpg',
    'static/images/san_francisco/thumbs/IMG_8939.jpg',
    'static/images/san_francisco/thumbs/IMG_8940.jpg',
    'static/images/san_francisco/thumbs/IMG_8942.jpg',
    'static/images/san_francisco/thumbs/IMG_8943.jpg',
    'static/images/san_francisco/thumbs/IMG_8946.jpg',
    'static/images/san_francisco/thumbs/IMG_8947.jpg',
    'static/images/san_francisco/thumbs/IMG_8949.jpg',
    'static/images/san_francisco/thumbs/IMG_8954.jpg',
    'static/images/san_francisco/thumbs/IMG_8956.jpg',
    'static/images/san_francisco/thumbs/IMG_8960.jpg',
    'static/images/san_francisco/thumbs/IMG_8965.jpg',
    'static/images/san_francisco/thumbs/IMG_8966.jpg',
    'static/images/san_francisco/thumbs/IMG_8971.jpg',
    'static/images/san_francisco/thumbs/IMG_8973.jpg',
    'static/images/san_francisco/thumbs/IMG_8979.jpg',
    'static/images/san_francisco/thumbs/IMG_8983.jpg',
    'static/images/san_francisco/thumbs/IMG_8984.jpg',
    'static/images/san_francisco/thumbs/IMG_8987.jpg',
    'static/images/san_francisco/thumbs/IMG_8988.jpg',
    'static/images/san_francisco/thumbs/IMG_8990.jpg',
    'static/images/san_francisco/thumbs/IMG_8991.jpg',
    'static/images/san_francisco/thumbs/IMG_8992.jpg',
    'static/images/san_francisco/thumbs/IMG_8993.jpg',
    'static/images/san_francisco/thumbs/IMG_8994.jpg',
    'static/images/san_francisco/thumbs/IMG_8996.jpg',
    'static/images/san_francisco/thumbs/IMG_8997.jpg',
    'static/images/san_francisco/thumbs/IMG_8998.jpg',
    'static/images/san_francisco/thumbs/IMG_8999.jpg',
    'static/images/san_francisco/thumbs/IMG_9002.jpg',
    'static/images/san_francisco/thumbs/IMG_9006.jpg',
    'static/images/san_francisco/thumbs/IMG_9007.jpg',
    'static/images/san_francisco/thumbs/IMG_9012.jpg',
    'static/images/san_francisco/thumbs/IMG_9018.jpg',
    'static/images/san_francisco/thumbs/IMG_9019.jpg',
    'static/images/san_francisco/thumbs/IMG_9021.jpg',
    'static/images/san_francisco/thumbs/IMG_9025.jpg',
    'static/images/san_francisco/thumbs/IMG_9028.jpg',
    'static/images/san_francisco/thumbs/IMG_9031.jpg',
    'static/images/san_francisco/thumbs/IMG_9032.jpg',
    'static/images/san_francisco/thumbs/IMG_9033.jpg',
    'static/images/san_francisco/thumbs/IMG_9034.jpg',
    'static/images/san_francisco/thumbs/IMG_9038.jpg',
    'static/images/san_francisco/thumbs/IMG_9039.jpg',
    'static/images/san_francisco/thumbs/IMG_9042.jpg',
    'static/images/san_francisco/thumbs/IMG_9048-HDR.jpg',
    'static/images/san_francisco/thumbs/gg_bridge.jpg'
  ];

  var images = shuffle(thumbnails);

  // var images = [
  //   'static/images/san_francisco/IMG_0047.jpg',
  //   'static/images/san_francisco/IMG_2929.jpg',
  //   'static/images/san_francisco/IMG_2931.jpg',
  //   'static/images/san_francisco/IMG_2932.jpg',
  //   'static/images/san_francisco/IMG_2933.jpg',
  //   'static/images/san_francisco/IMG_2934.jpg',
  //   'static/images/san_francisco/IMG_2936.jpg',
  //   'static/images/san_francisco/IMG_2937.jpg',
  //   'static/images/san_francisco/IMG_2938.jpg',
  //   'static/images/san_francisco/IMG_2939.jpg',
  //   'static/images/san_francisco/IMG_2940.jpg',
  //   'static/images/san_francisco/IMG_2941.jpg',
  //   'static/images/san_francisco/IMG_2944.jpg',
  //   'static/images/san_francisco/IMG_2945.jpg',
  //   'static/images/san_francisco/IMG_2946.jpg',
  //   'static/images/san_francisco/IMG_2947.jpg',
  //   'static/images/san_francisco/IMG_2948.jpg',
  //   'static/images/san_francisco/IMG_2949.jpg',
  //   'static/images/san_francisco/IMG_2951.jpg',
  //   'static/images/san_francisco/IMG_2954.jpg',
  //   'static/images/san_francisco/IMG_2955.jpg',
  //   'static/images/san_francisco/IMG_2959.jpg',
  //   'static/images/san_francisco/IMG_2960.jpg',
  //   'static/images/san_francisco/IMG_2961.jpg',
  //   'static/images/san_francisco/IMG_2971.jpg',
  //   'static/images/san_francisco/IMG_2972.jpg',
  //   'static/images/san_francisco/IMG_2973.jpg',
  //   'static/images/san_francisco/IMG_2975.jpg',
  //   'static/images/san_francisco/IMG_2976.jpg',
  //   'static/images/san_francisco/IMG_2977.jpg',
  //   'static/images/san_francisco/IMG_2980.jpg',
  //   'static/images/san_francisco/IMG_2981.jpg',
  //   'static/images/san_francisco/IMG_2985.jpg',
  //   'static/images/san_francisco/IMG_2986.jpg',
  //   'static/images/san_francisco/IMG_2987.jpg',
  //   'static/images/san_francisco/IMG_2989.jpg',
  //   'static/images/san_francisco/IMG_2995.jpg',
  //   'static/images/san_francisco/IMG_2996.jpg',
  //   'static/images/san_francisco/IMG_3003.jpg',
  //   'static/images/san_francisco/IMG_3006.jpg',
  //   'static/images/san_francisco/IMG_3008.jpg',
  //   'static/images/san_francisco/IMG_3014.jpg',
  //   'static/images/san_francisco/IMG_3015.jpg',
  //   'static/images/san_francisco/IMG_3016.jpg',
  //   'static/images/san_francisco/IMG_3019.jpg',
  //   'static/images/san_francisco/IMG_3021.jpg',
  //   'static/images/san_francisco/IMG_3022.jpg',
  //   'static/images/san_francisco/IMG_3028.jpg',
  //   'static/images/san_francisco/IMG_3029.jpg',
  //   'static/images/san_francisco/IMG_3033.jpg',
  //   'static/images/san_francisco/IMG_3045.jpg',
  //   'static/images/san_francisco/IMG_3050.jpg',
  //   'static/images/san_francisco/IMG_3051.jpg',
  //   'static/images/san_francisco/IMG_3055.jpg',
  //   'static/images/san_francisco/IMG_3057.jpg',
  //   'static/images/san_francisco/IMG_3061.jpg',
  //   'static/images/san_francisco/IMG_3065.jpg',
  //   'static/images/san_francisco/IMG_3066.jpg',
  //   'static/images/san_francisco/IMG_3070.jpg',
  //   'static/images/san_francisco/IMG_3071.jpg',
  //   'static/images/san_francisco/IMG_3073.jpg'
  // ];

  var html = template(images);
  $('#thumbnails').html(html);

  var lighbox = new Lightbox({
    el: '#sf-photos',
    images: images.map(function (i) { return i.replace(/thumbs\//i, ''); })
  });
});

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}