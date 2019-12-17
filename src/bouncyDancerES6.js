// var makeBouncyDancer = function(top, left, timeBetweenSteps) {
//   makeDancer.call(this, top, left, timeBetweenSteps);
//   this.$node.addClass('sway');
//   this.$node.toggleClass('dancer');
// };

// makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
// makeBouncyDancer.prototype.constructor = makeBouncyDancer;
// makeBouncyDancer.prototype.oldStep = makeDancer.prototype.step;

// makeBouncyDancer.prototype.step = function() {
//   this.oldStep.call(this);
//   this.$node.toggleClass('sway');
// };

window.makeBouncyDancer = class makeBouncyDancer extends makeDancer {
  constructor (top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node.addClass('sway');
    // this.$node.toggleClass('dancer');
  }
  step() {
    oldStep.call(this);
    this.$node.toggleClass('sway');
  }
}