<template>
  <div class="container">
    <ul>
<div class="row">
    <li class="post text col-3" v-for="(post, index) in posts"
    v-bind:item="post"
    v-bind:index="index"
    v-bind:key="post._id"
    >
      <img src="https://cdn.thewire.in/wp-content/uploads/2018/06/30163424/forest.jpg" alt="" height="250" width="100%">
      <p class="post-text">
        <h3>{{ post.title }}</h3>
            <hr>
              {{ post.description }}
                <br>
                    <button class="close" @click="deletePost(post._id)"><font-awesome-icon class="editIcon" icon="trash-alt" /></button>
                <router-link v-bind:to="{ name: 'EditPost', params: { id: post._id } }"><font-awesome-icon class="editIcon" icon="edit" /></router-link>
              </p>
            </li>
          </div>
        </ul>
    </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'posts',
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    async getPosts () {
      const response = await PostsService.fetchPosts()
      this.posts = response.data.posts
    },
    async deletePost (id) {
      await PostsService.deletePost(id)
      window.location.reload()
    }
  }
}
</script>
<style scoped>

div.container {
  max-width: 1500px;
  margin: 0 auto;
  color: #111;
  padding: 10px 0px 10px 0px;
text-align:center;
}
p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}
.post {
  position: relative;
box-shadow: 0px 2px 7px 4px rgba(0, 0, 0, 0.3), 0 2px 5px 0 rgba(0, 0, 0, 0.5);
border-radius: 5px;
background-image: url("bg3.png");
justify-content: center;
padding:0;
    margin: 10px 10px 10px 10px;
    transition:
    all .2s ease-in-out;
}
.post:hover {
  transform: scale(1.01);
 }

.text {
  font-size: 18px;
  font-weight: 400;
  list-style-type: none;
}

.row {
display:table;
margin: 0 auto;
}
li.post {
    display:inline-block;
    height: 450px;
overflow: auto;
padding:10px;
  }
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
}
ul {
  margin:0;
  padding:0;
}
 .editIcon {
   color: black;
   float:left;
   margin:10px;
 }


</style>
