<template>
  <body>
    <h2 class="headings">Instructor Table</h2>
    <!-- <table id="instructor-table">
    </table> -->
    <table id="instructor-table">
      <thead>
          <tr>
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Last Name</th>

          </tr>
      </thead>
      <tbody>
          <tr v-for="instruct in instructors" v-bind:key="instruct">
              <td>{{ instruct.first }}</td>
              <td>{{ instruct.middle }}</td>
              <td>{{ instruct.last }}</td>
          </tr>
      </tbody>
      </table>
            
    <!-- inject:js -->
    <!-- endinject -->
  </body>
</template>

<script>
export default {
  name: 'Instructor',
   mounted() {
          // this.instructors = getInstructors();
        },
        data () {
            return {
                  instructors:  [{ first: "Alfreds", middle: "Anders", last: "Futterkiste" },
                  { first: "Maria", middle: "Francisco", last: "Moctezuma" },
                  { first: "Ernst", middle: "Roland", last: "Handel" },
                  { first: "Helen", middle: "Heather", last: "Bennett" },
                  ]
 
            }
        }
}

  //   function getInstructors() {
  //       return JSON.parse(instructors);
  //   }
  // var instructors = 
  // [{ first: "Alfreds", middle: "Anders", last: "Futterkiste" },
  // { first: "Maria", middle: "Francisco", last: "Moctezuma" },
  // { first: "Ernst", middle: "Roland", last: "Handel" },
  // { first: "Helen", middle: "Heather", last: "Bennett" },
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
