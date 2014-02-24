var Triangle = {
  triangleTester: function() {
    var sideTotal = (((this.firstSide + this.secondSide) / this.thirdSide));
    
    if (sideTotal === 2) {
      return ("Equilateral");
    } else if ((this.firstSide > (this.secondSide + this.thirdSide)) || (this.secondSide > (this.firstSide + this.thirdSide)) || (this.thirdSide > (this.secondSide + this.firstSide))); {
      alert("This Ran!");
      return "Not a Triangle";
    }
  }
};

