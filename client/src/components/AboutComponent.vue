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