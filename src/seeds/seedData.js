const { ObjectId } = require('mongoose').Types;

// Define seed data
const departments = [
    { _id: new ObjectId(), departmentName: 'IT', designation: ['Software Engineer', 'System Administrator'] },
    { _id: new ObjectId(), departmentName: 'HR', designation: ['HR Manager', 'Recruiter'] },
];

const employees = [
    {
        employeeName: 'John Doe',
        address: '123 Main St',
        mobileNumber: '1234567890',
        email: 'john@example.com',
        department: departments[0]._id, // Reference to the first department
        designation: 'Software Engineer',
        gender: 'Male',
        bloodGroup: 'A+',
    },
    {
        employeeName: 'Jane Smith',
        address: '456 Elm St',
        mobileNumber: '9876543210',
        email: 'jane@example.com',
        department: departments[1]._id, // Reference to the second department
        designation: 'HR Manager',
        gender: 'Female',
        bloodGroup: 'B-',
    },
];

module.exports = {
    departments,
    employees
};
