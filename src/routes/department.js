const express = require('express');
const router = express.Router();
const Department = require('../models/department');

// Get all departments
router.get('/', async (req, res) => {
  try {
    const departments = await Department.find();
    // console.log(departments);
    res.json(departments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to get a department by ID
router.get('/:id', async (req, res) => {
  try {
    const department = await Department.findById(req.params.id);
    if (!department) {
      return res.status(404).json({ message: 'Department not found' });
    }
    res.json(department);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to get a department by name
router.get('/byName/:name', async (req, res) => {
  try {
    const department = await Department.findOne({ departmentName: req.params.name });
    console.log(department);
    if (department) {
      return res.json(department);
    } else {
      // If department is not found, return an empty response
      return res.json(null);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new department
router.post('/', async (req, res) => {
  const department = new Department(req.body);
  try {
    const newDepartment = await department.save();
    res.status(201).json(newDepartment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route to edit (update) a department by ID
router.put('/:id', async (req, res) => {
  try {
    console.log(req.body);
    const { departmentName, designation } = req.body;
    const updatedDepartment = await Department.findByIdAndUpdate(
      req.params.id,
      { departmentName, designation },
      { new: true } // To return the updated department
    );
    if (!updatedDepartment) {
      return res.status(404).json({ message: 'Department not found' });
    }
    res.json(updatedDepartment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to delete a department by ID
router.delete('/:id', async (req, res) => {
  try {
    const department = await Department.findByIdAndDelete(req.params.id);
    if (!department) {
      return res.status(404).json({ message: 'Department not found' });
    }
    res.json({ message: 'Department deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
