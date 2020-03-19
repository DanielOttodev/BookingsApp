import axios from 'axios';

const url = 'http://localhost:5000/api/posts/';

class PostService {
    // Get Posts
    static getPosts(){                              // Make static so can call as filename.getPosts() e.g PostService.getPosts()
        return new Promise ((resolve,reject) => {
            axios.get(url).then((res) => {
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }))
                );
            })
            .catch((err)=> {
                reject(err);
            })
            
        });
    }


    // Create Post
    static insertPost(text){
        return axios.post(url,{
            //Pass in params
            text
        });
    }
    // Delete Post
    static deletePost(id){
        return axios.delete(`${url}${id}`)
    }
}

export default PostService; // Export this file to use its methods