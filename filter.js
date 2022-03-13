  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];

const oldEnough = people.filter(person => person.age >= 21)
console.log(oldEnough)

const paul = people.filter(person => person.name === "Paul")[0] // You can also shorten code by changing person to just p
console.log(paul)

// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 }, // This means Mark returns true
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 }, // None of Ariel's skills pass the 5+ test, and thus return an empty array
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 }, // This means Jason returns true
    ]
  },
];

// Version 1. Arrow function with student as paramenter and curly braces for logic
const candidates = students.filter(student => {
    let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5); // Filter returns array of students with 5+ years
    return strongSkills.length > 0;
});

// Version 2. Take the content from the parentheses in version above and assign it to a variable, to isolate callback function
const hasStrongSkills = student => {
  let strongSkills2 = student.skills.filter(skill => skill.yrsExperience >= 5);
  return strongSkills2.length > 0;
};
const candidates2 = students.filter(hasStrongSkills)

// Version 3. Compress and turn into single line of code
const has5yearsExp = skill => skill.yrsExperience >= 5; 
const hasStrongSkills2 = student => student.skills.filter(has5yearsExp).length > 0;
const candidates3 = students.filter(hasStrongSkills2)

console.log(candidates)
console.log(candidates2)
console.log(candidates3)