const customers = require('./customers');
const { toMetres, toRadians, toKilometres } = require('./geo.js');

const INVITATION_RADIUS = 100;

// Clean customers input
const parseInput = customers => {
  const VALID_KEYS = ['latitude', 'longitude', 'name', 'user_id'];
  return customers
    .filter(customer => Object.keys(customer).length === 4)
    .filter(customer => Object.keys(customer).sort().join(',') === VALID_KEYS.join(','))
    .filter(customer => !isNaN(parseFloat(customer.latitude)))
    .filter(customer => !isNaN(parseFloat(customer.longitude)))
    .filter(customer => customer.latitude >= -90 && customer.latitude <= 90)
    .filter(customer => customer.longitude >= -180 && customer.longitude <= 180)
    .filter(customer => !isNaN(parseInt(customer.user_id)))
    .filter(customer => typeof customer.name === 'string' && customer.name.length > 0)
}

// Customers within invitation radius
const getCustomersWithinRadius = customers => parseInput(customers)
  .filter(({ latitude, longitude }) => toKilometres(toMetres(latitude, longitude)) < INVITATION_RADIUS);

// Sort by user_id in ascending order
const sortCustomers = customers => customers.sort((customer1, customer2) => customer1.user_id - customer2.user_id);

// Format output
const formatCustomers = customers => customers
  .map(({ name, user_id }) => `${name}${' '.repeat(30 - name.length)}${user_id}`);

const selectedCustomers = getCustomersWithinRadius(customers)
const sortedCustomers = sortCustomers(selectedCustomers);
const formattedCustomers = formatCustomers(sortedCustomers);

// Print customers
formattedCustomers.forEach(customer => console.log(customer));

module.exports = { parseInput, getCustomersWithinRadius, sortCustomers, formatCustomers };
