<template>
  <nav id="navback" class="navback navbar navbar-expand-lg navbar-dark center-block" >
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="navback collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link to="/" class="nav-link">Home</router-link><span class="sr-only">(current)</span>
        </li>
        <li class="nav-item active">
          <router-link to="/posts/new" class="nav-link">New posts</router-link><span class="sr-only">(current)</span>
        </li>

      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Top',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#navback{
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin:0 auto;
  display:inline-block;
    float: none;
    margin-top:2%;
}

.nav-link{
  margin:10px;
transition:
all .2s ease-in-out;
}

.nav-link:hover {
  transform: scale(1.2);
 }


</style>
