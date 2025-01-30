document.addEventListener('DOMContentLoaded', function() {
    fetch('../blog/blog-posts.json')
        .then(response => response.json())
        .then(blogPosts => {
            const blogContainer = document.getElementById('blog-posts');

            blogPosts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.classList.add('blog-post');

                const headerElement = document.createElement('div');
                headerElement.classList.add('blog-header');

                const postDate = document.createElement('p');
                postDate.classList.add('blog-date');
                postDate.textContent = post.date;

                const postTitle = document.createElement('h3');
                postTitle.classList.add('blog-title');
                postTitle.textContent = post.title;

                headerElement.appendChild(postDate);
                headerElement.appendChild(postTitle);

                postElement.appendChild(headerElement);

                if (post.image) {
                    const postImage = document.createElement('span');
                    postImage.classList.add('image', post.imageStyle || 'fit'); // Use specified image style or default to 'main'
                    const imgElement = document.createElement('img');
                    imgElement.src = post.image;
                    imgElement.alt = post.title;
                    postImage.appendChild(imgElement);
                    postElement.appendChild(postImage);
                }

                const postText = document.createElement('p');
                postText.classList.add('blog-text');
                postText.textContent = post.text;

                postElement.appendChild(postText);

                blogContainer.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error loading blog posts:', error));
});
