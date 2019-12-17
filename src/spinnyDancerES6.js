// var makeSpinnyDancer = function(top, left, timeBetweenSteps) {
//   makeDancer.call(this, top, left, timeBetweenSteps);
//   this.$node.addClass('spinnyDancer');
//   this.$node.toggleClass('dancer');
//   this.$node.css("animation", `spin ${Math.random()*2}s linear infinite`)
// };

// makeSpinnyDancer.prototype = Object.create(makeDancer.prototype);
// makeSpinnyDancer.prototype.constructor = makeSpinnyDancer;


window.makeSpinnyDancer = class makeSpinnyDancer extends makeDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node.addClass('spinnyDancer');
    this.$node.toggleClass('dancer');
    this.$node.css("animation", `spin ${Math.random()*2}s linear infinite`);
  }
}
