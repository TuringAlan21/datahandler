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
        const sorted = this.posts.sort()
        return sorted
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
execute();

const clearer = new DataHandler();

async function clear(){
    await clearer.fetchPosts();
    console.log(clearer.clearPosts());
}

clear();
