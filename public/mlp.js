let posts = [];

document.addEventListener('DOMContentLoaded', () => {
  fetchPosts();
});

function fetchPosts() {
  fetch('/posts')
    .then(response => response.json())
    .then(data => {
      posts = data;
      displayPosts();
    })
    .catch(error => console.error('Error fetching posts:', error));
}

function newThread() {
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  const post = { title, content };

  fetch('/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
    .then(response => response.json())
    .then(data => {
      posts.push(data);
      displayPosts();
    })
    .catch(error => console.error('Error creating post:', error));
}

function displayPosts() {
  const postsContainer = document.getElementById('posts-container');
  postsContainer.innerHTML = ''; // 清空容器
  posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.className = 'post';
    postElement.innerHTML = `<h2>${post.title}</h2><div>${post.time}</div><div>${post.index}</div><p>${post.content}</p>`;
    postsContainer.appendChild(postElement);
  });
}