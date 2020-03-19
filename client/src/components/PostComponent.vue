<template>
<div class="container">
<h1>Latest Posts</h1>
<div class="create-post">
  <label for="create-post">Say Something...</label>
  <input type="text" v-model="text" id="create-post" class="form-control" placeholder="Create a Post">
<button type="button" class="btn-primary btn" v-on:click="createPost">Post</button>
</div>

<hr>
<p class="error" v-if="error">{{ error }}</p>
<div class="posts-container">
  <div class="post" v-for="(post) in posts"   
  v-bind:key="post._id"
  v-on:dblclick="deletePost(post._id)"
  
  >
  {{`${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}` }}
  <p class="text">{{post.text}}</p>
  </div>
</div>
</div>
</template>

<script>
import PostService from '../PostService';    // Bring in the functions from PostService to use
export default {
  name: 'PostComponent',
  data() {
    return {
      posts: [],
      error: '',
      text: ''
    }
  },
  async created(){ // On component create, load the posts - getPosts()
    try{
      this.posts = await PostService.getPosts()
    }catch(err){
      this.error = "Hmm something went wrong! Try again in a minute."
    }
  },
  methods: {
    async createPost() {
      await PostService.insertPost(this.text)  // The createPost method is binded to the button above 
      //- We then pass in text which is binded to the input field.
      // We are able to use text because it is initialized  when this component is created.
      this.posts = await PostService.getPosts() // Load posts from db
  },
  async deletePost(id){ //Pass in the id
    await PostService.deletePost(id);
    this.posts = await PostService.getPosts() // Load the posts from db
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

div.container{
  max-width: 800px;
  margin: 0 auto;

}
div.post{
  position: relative;
  border: 1px solid #5bd658;
  background-color:#bcffb8;
  padding: 10px 10px 30px 10px;
  font-size: 16px;
}
p.error{
  border: 1px solid red;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}
p.text{
  font-size: 22px;
  font-weight: bold;

}

</style>
