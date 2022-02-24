import React from 'react';
import Article from "./Article";


function ArticleList ({blogPosts}) {
    console.log("BlogPost:", blogPosts)
    const eachBlogPost = blogPosts.map(function (post) {
    console.log("Post:", post)
        return (
            <Article key={post.title} title={post.title} date={post.date} preview={post.preview} />
        )
    })
    return ( 
        <main>
            {eachBlogPost}
        </main>
     );
}

export default ArticleList;