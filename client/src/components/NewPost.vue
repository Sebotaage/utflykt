<template>
  <div class="container">
    <div class="jumbotron">
    <h1>New place</h1>

        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Place</span>
          </div>
          <input v-model="title"type="text" class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1">
        </div>
        <div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Description</span>
  </div>
  <textarea v-model="description" class="form-control description" aria-label="With textarea"></textarea>
</div>
<a class="btn btn-success btn-lg" href="#" role="button" @click="addPost">Post</a>
      </div>
    </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'NewPost',
  data () {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    async addPost () {
      await PostsService.addPost({
        title: this.title,
        description: this.description
      })
      this.$router.push({ name: 'Posts' })
    }
  }
}
</script>
<style scoped>
div.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px 0 20px 0;
}

h1 {
  margin-top: -20px;
  margin-bottom: 20px;
}

.btn {
  margin-top:30px;
  margin-bottom: -20px;
  width:100px;
}
.jumbotron   {
  background-image: url("bg3.png");
  margin-top:10px;
  opacity: 2.5;
  color: #111;
box-shadow: 0px 2px 7px 4px rgba(0, 0, 0, 0.3), 0 2px 5px 0 rgba(0, 0, 0, 0.5);
}

.description{
  height: 150px;
}

</style>
