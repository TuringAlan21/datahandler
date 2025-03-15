'use strict'
class DataHandler{
    constructor(){
        this.posts = [];
        
    }
  async fetchPosts(){
        try{
            const response =  await fetch(`https://jsonplaceholder.typicode.com/posts`)
            this.posts = await response.json();
        } catch (error) {
            console.log('Error fetching posts:', error);
        }

    }

    listPosts(){
        return this.posts.sort((a, b) => a.title.localeCompare(b.title));
    }

    getPosts(id){
        return this.posts.find(post => post.id === id)
    }

    clearPosts(){
        return this.posts = [];
    }
}

const handler = new DataHandler

async function execute(){
    await handler.fetchPosts();
    console.log(handler.getPosts(5));
}



async function clear(){
    await handler.fetchPosts();
    console.log(handler.clearPosts());
}

clear();
execute(7);
listPosts();
