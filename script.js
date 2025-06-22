const students = [
  { name: "Mosaab Mohammed Atef Mohammed", gpa: 3.65, department: "IT" },
  { name: "Mina Remon Adel Tawfik", gpa: 3.76, department: "AI" },
  { name: "Mahmoud Ahmed Bahnasawy Ahmed", gpa: 3.75, department: "IT" },
  { name: "Shahd Abdelaziz Farghaly Romih", gpa: 3.96, department: "AI" },
  { name: "Mahmoud Nabil Mostafa", gpa: 3.87, department: "IT" },
  { name: "Shahd Nady Sayed", gpa: 3.74, department: "IT" },
  { name: "Menna Salah Abdelhamed Abdelhafez", gpa: 3.8, department: "IT" },
  { name: "Sara Ezzat", gpa: 3.51, department: "IT" },
  { name: "Moataz Mohammed Mohammed", gpa: 3.72, department: "IT" },
  { name: "Rogena Yousry Adel", gpa: 3.8, department: "AI" },
  { name: "Arwa Ali Mohamed Ahmed", gpa: 3.74, department: "AI" },
  { name: "Selwan Ezzat Mohamed", gpa: 3.72, department: "AI" },
  { name: "Youssef Lowes", gpa: 3.51, department: "IT" },
  { name: "Nada Emad Sabry Melk", gpa: null, department: "IT" },
  { name: "Nooran Abdulbasit Ali", gpa: null, department: "AI" },
  { name: "Shaimaa Mohammed Abuzaid Mohammed", gpa: 3.68, department: "AI" },
  { name: "Sama Moustafa Ibrahim", gpa: 3.68, department: "AI" },
];

const sortedStudents = students.sort((a, b) => b.gpa - a.gpa);

console.log(sortedStudents);

const table = document.querySelector("tbody");

sortedStudents.forEach((student, index) => {
  const row = document.createElement("tr");
  const rankCell = document.createElement("td");
  const nameCell = document.createElement("td");
  const gpaCell = document.createElement("td");
  const departmentCell = document.createElement("td");

  rankCell.textContent = index + 1;
  nameCell.textContent = student.name;
  gpaCell.textContent = student.gpa;
  departmentCell.textContent = student.department;

  row.appendChild(rankCell);
  row.appendChild(nameCell);
  row.appendChild(gpaCell);
  row.appendChild(departmentCell);

  table.appendChild(row);
});
