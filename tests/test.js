const assert = require('chai').assert;
const myApp = require('../src/main.js');

describe('raindrops', function() {

   describe('handle valid input', () => {
       it('should return "pling"', () => {
           assert.equal(myApp.raindrops(6), "pling");
       });
      it('should return "plang"', () => {
           assert.equal(myApp.raindrops(25), "plang");
       });

      it('should return "plong"', () => {
           assert.equal(myApp.raindrops(14), "plong");
       });
      it('should return "2"', () => {
           assert.equal(myApp.raindrops(2), 2);
       });
      it('should return "-1"', () => {
           assert.equal(myApp.raindrops(-1), -1);
       }); 
       it('should return "plingplang"', () => {
           assert.equal(myApp.raindrops(15), "plingplang");
       });
       it('should return "plangplong"', () => {
           assert.equal(myApp.raindrops(35), "plangplong");
       });
       it('should return "plingplangplong"', () => {
           assert.equal(myApp.raindrops(105), "plingplangplong");
       });
       it('should return "plingplong"', () => {
           assert.equal(myApp.raindrops(21), "plingplong");
       });

   describe('handle Invalid Input', () => {
       it('should return "Invalid Input"', () => {
           assert.equal(myApp.raindrops("goat"), "Invalid Input");
       });
       it('should return "Invalid Input"', () => {
           assert.equal(myApp.raindrops("21"), "Invalid Input");
       });
       



});

   
});

});