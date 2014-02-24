describe("Triangle Tracker", function() {
  describe("triangleTester", function() {
    it("Takes 3 sides of a triangle and returns Equilateral", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.firstSide = 3;
      testTriangle.secondSide = 3;
      testTriangle.thirdSide = 3;
      testTriangle.triangleTester().should.equal("Equilateral");
    });
    it("Takes 3 inputs that do not make a triangle and returns 'Not a Triangle'", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.firstSide = 4;
      testTriangle.secondSide = 6;
      testTriangle.thirdSide = 12;
      testTriangle.invalidTriangle().should.equal("Not a Triangle");
    });
    it("If two inputs are the same and make a triangle, return Isosceles", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.firstSide = 4;
      testTriangle.secondSide = 4;
      testTriangle.thirdSide = 6;
      testTriangle.triangleTester().should.equal("Isosceles");
    });
    it("If the inputs are all different lengths and make a triangle, return Scalene", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.firstSide = 10;
      testTriangle.secondSide = 12;
      testTriangle.thirdSide = 14;
      testTriangle.triangleTester().should.equal("Scalene");
    });
  });
});
