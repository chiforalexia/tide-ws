<template>
  <div id="app">
    <!-- Header Section -->
    <header>
      <h1>Technology Roadmap</h1>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#technologies">Technologies</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <!-- Welcome Section -->
    <section id="about">
      <h2>Welcome to Our Roadmap</h2>
      <p>This is where we will guide you through the implementation of various technologies.</p>
    </section>

    <!-- Technologies Section -->
    <section id="technologies">
      <h2>Technologies</h2>
      <p>Discover the technologies that are key to implementing this roadmap.</p>
    </section>

    <!-- Contact Section -->
    <section id="contact">
      <h2>Contact</h2>
      <p>Get in touch with us for more details.</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Global styles */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin: 0;
}

header {
  background-color: #34495e;
  color: white;
  padding: 10px;
  text-align: center;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav li {
  display: inline;
  margin: 0 15px;
}

nav a {
  color: white;
  text-decoration: none;
}

section {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
}
</style>
