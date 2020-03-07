
let { churchMapper, intToChurch, succ, add } = require("../src/index.js");

describe("Church numbers task", () => {

  describe("churchMapper function", () => {
    it("converts Church number to int", () => {
      let churchNumeral2 = (f, z) => f(f(z));
      expect(churchNumeral2(churchMapper, 0)).toEqual(2);
    });
  });

  describe("intToChurch function", () => {

    it("can create zero Church numeral from int", () => {
      expect(intToChurch(0)(churchMapper, 0)).toEqual(0);
    }); 

    it("creates Church numeral from int", () => {
      expect(intToChurch(3)(churchMapper, 0)).toEqual(3);
    }); 

    it("creates Church numeral that can accept any type pure function", () => {
        let strChurchMapper = s => s + "*";
        expect(intToChurch(5)(strChurchMapper, "")).toEqual("*****");
    });

    it("creates any Church numeral from int in range 1 to 100", () => {
      let a = [];
      for(i=1; i<=100;i++) a.push(i);
      
      let b = a.map( i => intToChurch(i)(churchMapper, 0));
      expect(a).toEqual(b);
    }); 

  });


  describe("succ function", () => {

    it("generates Church numeral 1 from 0", () => {
      expect(succ(intToChurch(0))(churchMapper, 0)).toEqual(1);
    }); 

    it("generates Church numeral 1 from 0", () => {
      expect(succ(intToChurch(2))(churchMapper, 0)).toEqual(3);
    }); 

  });

  describe("add function", () => {

    it("generates Church numeral as addition of 2 numbers applied", () => {
      let church3 = intToChurch(3);
      let church4 = intToChurch(4);
      expect(add(church3, church4)(churchMapper, 0)).toEqual(7);
    }); 
  }); 

});

