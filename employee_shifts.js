// Task 1: Create an Employees Array of Employee Objects

const employees = [
    { name: 'John', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Wednesday', hours: 6 }] },
    { name: 'Sara', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Thursday', hours: 7 }] },
    { name: 'David', shifts: [{ day: 'Monday', hours: 8 }] },
    { name: 'Emily', shifts: [{ day: 'Friday', hours: 8 }] }
]; 

// Task 2: Create a Function to Display Employee Shift Details

function displayEmployeeShifts(employee) {
    console.log(`Shifts for ${employee.name}:`);
    employee.shifts.forEach(shift => {
        console.log(`  Day: ${shift.day}, Hours: ${shift.hours}`);
    });
};

// Task 3: Create a Function to Assign a New Shift

function assignShift(employeeName, day, hours) {
    const employee = employees.find(emp => emp.name === employeeName);
const existingShift = employee.shifts.find(shift => shift.day === day);
    
if (existingShift) {
    console.log(`Employee '${employeeName}'already has a shift on ${day}.`);
 } else {
employee.shifts.push({ day, hours });
console.log(`Shift assigned to ${employeeName} on ${day} for ${hours} hours.`);
    }
};

// Task 4: Create a Function to Calculate Total Hours Worked

function calculateTotalHours(employeeName) {
const employee = employees.find(person => person.name === employeeName);
    
const totalHours = employee.shifts.reduce((total, shift) => total + shift.hours, 0);
    console.log(`Total hours worked by ${employeeName}: ${totalHours}`);
    return totalHours;
};