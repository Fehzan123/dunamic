
const blogs = [];

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      blogs.push(post);
      resolve();
    }, 1000);
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const lastActivityTime = new Date().toLocaleTimeString();
      resolve(lastActivityTime);
    }, 1000);
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (blogs.length > 0) {
        const deletedPost = blogs.pop();
        resolve(deletedPost);
      } else {
        reject('ERROR: ARRAY IS EMPTY');
      }
    }, 1000);
  });
}

createPost({ title: 'BLOG1' })
  .then(() => updateLastUserActivityTime())
  .then((lastActivityTime) => {
    console.log('Posts:', blogs);
    console.log('Last Activity Time:', lastActivityTime);
    return createPost({ title: 'BLOG2' });
  })
  .then(() => updateLastUserActivityTime())
  .then((lastActivityTime) => {
    console.log('Posts:', blogs);
    console.log('Last Activity Time:', lastActivityTime);
    return deletePost();
  })
  .then((deletedPost) => {
    console.log('Deleted Post:', deletedPost);
    console.log('Posts:', blogs);
  })
  .catch((error) => {
    console.log(error)
  });
