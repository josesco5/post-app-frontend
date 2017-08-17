export function newPostNameChanged(value) {
  return {
    type: 'NEW_POST_NAME_CHANGED',
    value
  }
}

export function newPostDescriptionChanged(value) {
  return {
    type: 'NEW_POST_DESCRIPTION_CHANGED',
    value
  }
}

export function createPost(name, description) {
  return (dispatch) => {
    fetch('http://localhost:3001/api/posts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, description })
    })
    .then(response => response.json())
    .then(post => dispatch(createPostSuccess(post)));
  }
}

export function createPostSuccess(post) {
  return {
    type: 'CREATE_POST_SUCCESS',
    post
  }
}

export function fetchPosts(filter) {
  return (dispatch) => {
    let url = 'http://localhost:3001/api/posts'
    if (filter) {
      url += "?filter=" + filter;
    }
    fetch(url)
      .then(response => response.json())
      .then(function(json) {
        console.log('fetchPosts');
        console.log(json);
        dispatch(receivePosts(json));
      });
  }
}

export function receivePosts(posts) {
  return {
    type: 'RECEIVE_POSTS',
    posts
  }
}

export function filterPosts(value) {
  return {
    type: 'FILTER_POST',
    value
  }
}

export function filterNameChanged(value) {
  return {
    type: 'FILTER_NAME_CHANGED',
    value
  }
}

export function deletePost(post) {
  return {
    type: 'DELETE_POST',
    post
  }
}
