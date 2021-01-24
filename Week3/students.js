var students = 
[{ name: "John", id: 31, Address: "New York" }];
var myJSON = JSON.stringify(students);
window.location = "demo_json.php?x=" + myJSON;