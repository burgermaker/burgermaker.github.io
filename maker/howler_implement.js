var sound = new Howl({
  src: ['Boofs Burgers.wav'],
  autoplay: true,
  loop: true,
  volume: 0.03,
  onend: function() {
    console.log('Finished!');
  }
});

sound.play();
console.log("your mom gay");