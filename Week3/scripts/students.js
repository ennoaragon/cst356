var students = 
[{ name: "Alfreds Futterkiste", id: 91019324, email: "Alfreds.Futterkiste@oit.edu" },
{ name: "Maria Moctezuma", id: 91123024, email: "Maria.Moctezuma@oit.edu" },
{ name: "Ernst Handel", id: 91012324, email: "Ernst.Handel@oit.edu" },
{ name: "Helen Bennett", id: 91812324, email: "Helen.Bennett@oit.edu" },
];

function  initializeStudents(){

  displayStudents(students);
}


function displayStudents(x) {

  var tableRows = "";
  for (i = 0; i < x.length; i++) {
      var name = x[i].name;
      var id = x[i].id;
      var email = x[i].email;

      tableRows += "<tr><td>" + name + "</td><td>" + id + "</td><td>" + email + "</td></tr>";
  }

  // console.log(tableRows);
  document.getElementById("student-table").innerHTML = tableRows ;


}