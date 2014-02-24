describe("Triangle Tracker", function() {
  describe("triangleTester", function() {
    it("Takes 3 sides of a triangle and returns Equilateral", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.firstSide = 4;
      testTriangle.secondSide = 4;
      testTriangle.thirdSide = 4;
      testTriangle.triangleTester().should.equal("Equilateral");
    });
    it("Takes 3 inputs that do make a triangle and returns 'Not a Triangle'", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.firstSide = 4;
      testTriangle.secondSide = 6;
      testTriangle.thirdSide = 12;
      testTriangle.triangleTester().should.equal("Not a Triangle");
    });
  });
});
