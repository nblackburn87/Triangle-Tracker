var Triangle = {

  invalidTriangle: function() {
    if ((this.firstSide > (this.secondSide + this.thirdSide)) || (this.secondSide > (this.firstSide + this.thirdSide)) || (this.thirdSide > (this.secondSide + this.firstSide))) {
      return "Not a Triangle";
    }    
  },

  triangleTester: function() {
    var sideTotal = (((this.firstSide + this.secondSide) / this.thirdSide));
    
    if (sideTotal === 2) {
      return "Equilateral";
    } else if ((this.firstSide === this.secondSide) || (this.secondSide === this.thirdSide) || (this.thirdSide === this.firstSide)) {
      return "Isosceles";
    } else {
      return "Scalene";
    }
  }
};

$(document).ready(function() {
  $("form#triangle-sides").submit(function(event) {
    event.preventDefault();

    var inputtedSideOne = parseInt($("input#new-side-one").val());
    var inputtedSideTwo = parseInt($("input#new-side-two").val());
    var inputtedSideThree = parseInt($("input#new-side-three").val());
    var newTriangle = Object.create(Triangle);
    newTriangle.firstSide = inputtedSideOne;
    newTriangle.secondSide = inputtedSideTwo;
    newTriangle.thirdSide = inputtedSideThree;


    if (newTriangle.invalidTriangle() === "Not a Triangle") {
      alert("That is not a triangle");
    } else if (newTriangle.triangleTester() === "Equilateral") {
      $("#equilateral").prepend("<li>" + inputtedSideOne + ", " + inputtedSideTwo + ", " + inputtedSideThree + "</li>")
    } else if (newTriangle.triangleTester() === "Isosceles") {
      $("#isosceles").prepend("<li>" + inputtedSideOne + ", " + inputtedSideTwo + ", " + inputtedSideThree + "</li>")
    } else if (newTriangle.triangleTester() === "Scalene") {
      $("#scalene").prepend("<li>" + inputtedSideOne + ", " + inputtedSideTwo + ", " + inputtedSideThree + "</li>")
    }
  });
});
