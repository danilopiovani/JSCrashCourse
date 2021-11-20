const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmit = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();

console.log(mark.bmit);

const x = 23;

console.log();
