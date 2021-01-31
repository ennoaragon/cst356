var instructors = 
[{ first: "Alfreds", middle: "Anders", last: "Futterkiste" },
{ first: "Maria", middle: "Francisco", last: "Moctezuma" },
{ first: "Ernst", middle: "Roland", last: "Handel" },
{ first: "Helen", middle: "Heather", last: "Bennett" },
];

function  initializeInstructors(){

  displayInstructors(instructors);
}


function displayInstructors(x) {

  var tableRows = "<tr class=tableheading><th>First Name</th><th> Middle Initial </th><th>Last Name</th></tr>";
  for (i = 0; i < x.length; i++) {
      var first = x[i].first;
      var middle = x[i].middle;
      var last = x[i].last;

      tableRows += "<tr><td>" + first + "</td><td>" + middle + "</td><td>" + last + "</td></tr>";
  }

  // console.log(tableRows);
  document.getElementById("instructor-table").innerHTML = tableRows ;


}