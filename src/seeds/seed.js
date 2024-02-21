const mongoose = require('mongoose');
const Department = require('../models/department');
const Employee = require('../models/employee');
const { departments, employees } = require('./seedData');

// Insert seed data into collections
async function seedDatabase() {
  try {
    await Department.deleteMany(); // Clear existing departments
    await Employee.deleteMany(); // Clear existing employees

    await Department.create(departments);
    await Employee.create(employees);

    console.log('Seed data inserted successfully');
  } catch (error) {
    console.error('Error inserting seed data:', error);
  }
}

module.exports = seedDatabase;
