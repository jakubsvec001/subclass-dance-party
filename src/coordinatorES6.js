var makeCoordinator = function (shape) {
  debugger;

  this.shape = shape;
  this.dancers = window.dancers;
  this.dancerCount = this.dancers.length;

  // determine which shape was passed into the function
  if(shape === 'line') {
    // call line method
    var positionObj = lineCalculator(this.dancerCount);
    //console.log(lineCalculator(this.dancerCount));
    this.dancers.forEach(function(dancer, index) {
      var left = positionObj.dancerStart + (index * positionObj.spread);
      debugger;
      dancer.setPosition(positionObj.top, left);
    });

  } else if (shape === 'circle') {
    // call the circle method
    this.prototype.circleCalculator();
  }

};

//makeCoordinator.prototype.constructor = makeCoordinator;

makeCoordinator.prototype.circleCalculator = function () {


}

// makeCoordinator.setPosition = function(top, left) {
//   var styleSettings = {
//     top: top,
//     left: left
//   };
//   this.$node.css(styleSettings);
// }

var lineCalculator = function (dancerCount) {
  // get window coordinates
  // var width = window.innerWidth;
  // var height = window.innerHeight;

  // calculate the x axis
  //var top = window.innerHeight / 3;
  // debugger;
  // var spread = (window.innerWidth * 0.9) / dancerCount;

  // var dancerStart = window.innerWidth * 0.05;

  return {top: (window.innerHeight / 3), spread: ((window.innerWidth * 0.9) / (dancerCount - 1)), dancerStart: (window.innerWidth * 0.05)};

}