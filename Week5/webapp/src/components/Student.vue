<template>
  <body>
    <h2 class="headings">Students</h2>
    <!-- <ul>
      <li> <a href="./index.html">Home</a></li>
      <li> <a href="./login.html">Login</a></li>
    </ul> -->
    <!-- <table id="student-table">
    </table> -->
      <table id="student-table">
            <thead>
                <tr>
                    <th>name</th>
                    <th>id</th>
                    <th>email</th>
                </tr>
            </thead>
            <tbody>
              <tr v-for="student in students" v-bind:key="student">
                  <td>{{ student.name }}</td>
                  <td>{{ student.id }}</td>
                  <td>{{ student.email }}</td>
              </tr>
            </tbody>
        </table>
      <!-- inject:js -->
      <!-- endinject -->
  </body>
</template>

<script>
  export default {
    name: 'Student',
    mounted() {
      // this.students = getStudents();
    },
    data () {
      return {
        students:    [{ name: "Alfreds Futterkiste", id: 91019324, email: "Alfreds.Futterkiste@oit.edu" },
    { name: "Maria Moctezuma", id: 91123024, email: "Maria.Moctezuma@oit.edu" },
    { name: "Ernst Handel", id: 91012324, email: "Ernst.Handel@oit.edu" },
    { name: "Helen Bennett", id: 91812324, email: "Helen.Bennett@oit.edu" },
    ]
      }
    }
  }

    // function getStudents() {
    //     return JSON.parse(students);
    // }
    // var students = 
    // [{ name: "Alfreds Futterkiste", id: 91019324, email: "Alfreds.Futterkiste@oit.edu" },
    // { name: "Maria Moctezuma", id: 91123024, email: "Maria.Moctezuma@oit.edu" },
    // { name: "Ernst Handel", id: 91012324, email: "Ernst.Handel@oit.edu" },
    // { name: "Helen Bennett", id: 91812324, email: "Helen.Bennett@oit.edu" },
    // ];


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }

</style>
