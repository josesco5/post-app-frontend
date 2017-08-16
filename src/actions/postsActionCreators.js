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
  return {
    type: 'CREATE_POST',
    name,
    description
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
