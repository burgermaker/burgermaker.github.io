var sound = new Howl({
  src: ['Boofs Burgers.m4a'],
  autoplay: true,
  loop: true,
  volume: 0.3,
  onend: function() {
    console.log('Finished!');
  }
});

sound.play();
console.log("your mom gay");
