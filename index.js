
import {posts} from './posts.js';

renderPosts(posts);

function renderPosts(posts) {
    let postHtml = ``;

    posts.forEach(element => {
        postHtml += `
        <article class="post">
            <header class="post-header">
                <img
                class="profile-image"
                src=${element.avatar}
                alt=""
                />
                <div class="post-info">
                <h2 class="username">${element.name}</h2>
                <p class="location">${element.location}</p>
                </div>
            </header>
            <img
                class="post-img"
                src=${element.post}
                alt=""
            />
        <div class="post-action">
            <button class="like-btn">
            <img
                src="images/icon-heart.png"
                alt="heart shaped icon for liking the post"
            />
            </button>
            <button class="comment-btn">
            <img
                src="images/icon-comment.png"
                alt="speech bubble shaped icon for commenting on the post"
            />
            </button>
            <button class="share-btn">
            <img
                src="images/icon-dm.png"
                alt="plane shaped icon for sharing the post"
            />
            </button>
        </div>
        <p class="post-likes">${element.likes} likes</p>
        <div class="post-caption">
            <h2 class="userid">${element.username}</h2>
            <p class="caption">${element.comment}</p>
        </div>
    </article>
        `
    });
    document.body.innerHTML += postHtml;
}