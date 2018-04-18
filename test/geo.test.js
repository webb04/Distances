const { assert } = require('chai');
const {
  INTERCOM_LAT,
  INTERCOM_LON,
  R,
  toMetres,
  toRadians,
  toKilometres
} = require('../geo.js');

it('Calculate metres from location', () => {
  assert.equal(toMetres(51.5033640, -0.1276250).toFixed(12), 462912.041454866);
  assert.equal(toMetres(32.9697, -96.80322).toFixed(12), 7163135.733009117655);
  assert.equal(toMetres(29.46786, -98.53506).toFixed(12), 7565648.619190584);
  assert.equal(toMetres(64.038554, -17.578125).toFixed(12), 1353121.3462202419);
  assert.equal(toMetres(37.483577, -119.531250).toFixed(12), 8059991.860405446);
});

it('Convert numeric degrees to radians', () => {
  assert.equal(toRadians(0), 0);
  assert.equal(toRadians(45), 0.7853981633974483);
  assert.equal(toRadians(90), 1.5707963267948966);
  assert.equal(toRadians(180), 3.141592653589793);
  assert.equal(toRadians(270), 4.71238898038469);
});

it('Convert metres to kilometres', () => {
  assert.equal(toKilometres(462912.041454866).toFixed(12), 462.912041454866);
  assert.equal(toKilometres(7163135.73300912).toFixed(12), 7163.13573300912);
  assert.equal(toKilometres(7565648.619190584).toFixed(12), 7565.648619190584);
  assert.equal(toKilometres(1353121.3462202419).toFixed(12), 1353.121346220242);
  assert.equal(toKilometres(8059991.860405446).toFixed(12), 8059.991860405446);
});
