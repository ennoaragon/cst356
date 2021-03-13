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
                    <th>Email</th>
                    <th>Student Id</th>
                    <!-- <th>email</th> -->
                </tr>
            </thead>
            <tbody>
              <tr v-for="student in students" v-bind:key="student.studentId">
                  <!-- <td>{{ student.name }}</td> -->
                  <td>{{ student.email }}</td>
                  <td>{{ student.studentId }}</td>
              </tr>
            </tbody>
        </table>
      <!-- inject:js -->
      <!-- endinject -->
  </body>
</template>

<script>
import Vue from 'vue';
    export default {
        name: 'Students',
        
        data () {
            return {
                students: [],
                operation: 'list',
                email: undefined,
                studentId: undefined,
                // count: undefined,
                // productUpdateId: undefined,
                apiServer: process.env.VUE_APP_API_SERVER
            }
        },
        methods: {
            getSudents: function() {
                let url = `http://${this.apiServer}/api/student`;
                Vue.axios.get(url).then(
                    (response) => {
                        this.students = response.data;
                    },
                    (error) => {
                        console.log(error)
                    }
                );
            },
            getProduct: function(studentId) {
                let url = `http://${this.apiServer}/api/product/${studentId}`;
                Vue.axios.get(url).then(
                    (response) => {
                        this.email = response.data.email;
                        this.studentId = response.data.studentId;
                        // this.count = response.data.count;
                    },
                    (error) => {
                        console.log(error)
                    }
                );
            },
            // displayAddProduct: function() {
            //     this.name = undefined;
            //     this.price = undefined;
            //     this.count = undefined;
            //     this.operation = 'add';
            // },
            // addProduct: function() {
            //     let url = `http://${this.apiServer}/api/product`;
            //     Vue.axios.post(url, {
            //         name: this.name,
            //         price: parseFloat(this.price),
            //         count: parseInt(this.count)
            //     }).then(
            //         () => {
            //             this.getProducts();
            //             this.operation = 'list';
            //         },
            //         (error) => {
            //             console.log(error)
            //         }
            //     );
            // },
            // displayProductDetails: function(productId) {
            //     this.getProduct(productId);
            //     this.operation = 'detail';
            // },
            // displayUpdateProduct: function(productId) {
            //     this.productUpdateId = productId;
            //     this.getProduct(productId);
            //     this.operation = 'update';
            // },
            // updateProduct: function() {
            //     let url = `http://${this.apiServer}/api/product/${this.productUpdateId}`;
            //     Vue.axios.put(url, {
            //         name: this.name,
            //         price: parseFloat(this.price),
            //         count: parseInt(this.count)
            //     }).then(
            //         () => {
            //             this.getProducts();
            //             this.operation = 'list';
            //         },
            //         (error) => {
            //             console.log(error)
            //         }
            //     );
            // },
            // deleteProduct: function(productId) {
            //     let url = `http://${this.apiServer}/api/product/${productId}`;
            //     Vue.axios.delete(url).then(
            //         () => {
            //             this.getProducts();
            //             this.operation = 'list';
            //         },
            //         (error) => {
            //             console.log(error)
            //         }
            //     );
            // },
            cancel: function() {
                this.operation = 'list';
            }
        },
        mounted() {
            this.getSudents();
            // this.operation = 'list';
        }
    }
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
