<template>
   <body>
    <h1 class="headings" id="home-heading">Lab1</h1>
    <!-- <ul>
      <li> <a href="./login.html">Login</a></li>
      <li> <a href="./instructor.html">Instructor Page</a></li>
      <li> <a href="./student.html">Student Page</a></li>
    </ul> -->
  
    <img src="../assets/image.jpg" alt="mountain landscape by kinkate"/>
    <div>
      <h2 class="headings">H2 heading</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
    <div>
      <h3 class="headings">H3 heading</h3>
      <p class="para2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
    <div>
      <h4 class="headings" >H4 heading</h4>
      <p class="para1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
  </body>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  html body * {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 18px;
}

#home-heading{
  color: green;
  font-size: 30px;
}

.headings {
  color: rgb(177, 26, 6);
  font-size: 24px;
}

.para1 {
  color: rgb(32, 144, 144);
  font-size: 14px;
}

.para2 {
  color: rgb(97, 79, 0);
  font-weight: 24px;
}

.tableheading{
  background-color: black;
  color: white;
  font-size: 40px;
}

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

.error-msg{
  color: red;
}
</style>
