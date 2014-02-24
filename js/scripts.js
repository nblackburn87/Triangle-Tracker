var Triangle = {
  triangleTester: function() {
    var sideTotal = (((this.firstSide + this.secondSide) / this.thirdSide));
   
    if (sideTotal === 2) {
      return ("Equilateral");
    } else {
      return false;
    }
   }
};
