const INTERCOM_LAT = 53.339428;
const INTERCOM_LON = -6.257664;
// Earth's mean radius 6,371km
const R = 6371e3;

// Metres from Intercom HQ
const toMetres = (latitude, longitude) => {
  const φ1 = toRadians(latitude);
  const φ2 = toRadians(INTERCOM_LAT);
  const Δφ = toRadians(INTERCOM_LAT-latitude);
  const Δλ = toRadians(INTERCOM_LON-longitude);

  const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
          Math.cos(φ1) * Math.cos(φ2) *
          Math.sin(Δλ/2) * Math.sin(Δλ/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  return R * c;
}

// Converts numeric degrees to radians
const toRadians = value => value * Math.PI / 180;

// Converts metres to kilometres
const toKilometres = metres => metres/1000;

module.exports = {
  INTERCOM_LAT,
  INTERCOM_LON,
  R,
  toMetres,
  toRadians,
  toKilometres
};
