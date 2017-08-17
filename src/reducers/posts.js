const initialState = {
  filter: '',
  posts: [],
  name: '',
  description: ''
};

function posts(state = initialState, action) {
  console.log(state, action);

  switch (action.type) {
    case 'FILTER_POST':
      console.log('Reducer: FILTER_POST');
      console.log(action.value);
      break;
    case 'RECEIVE_POSTS':
      console.log('Reducer: RECEIVE_POSTS');
      console.log(action.posts);
      return Object.assign({}, state, {
        posts: action.posts
      });
    case 'FILTER_NAME_CHANGED':
      console.log('Reducer: FILTER_NAME_CHANGED');
      return Object.assign({}, state, {
        filter: action.value
      });
    case 'NEW_POST_NAME_CHANGED':
      console.log('Reducer: NEW_POST_NAME_CHANGED');
      return Object.assign({}, state, {
        name: action.value
      });
    case 'NEW_POST_DESCRIPTION_CHANGED':
      console.log('Reducer: NEW_POST_DESCRIPTION_CHANGED');
      return Object.assign({}, state, {
        description: action.value
      });
    case 'CREATE_POST_SUCCESS':
      console.log('Reducer: CREATE_POST_SUCCESS');
      return Object.assign({}, state, {
        posts: [
          ...state.posts,
          action.post
        ],
        name: '',
        description: ''
      });
    case 'DELETE_POST':
      console.log('Reducer: DELETE_POST');
      console.log(action.post);
      break;
    case 'DELETE_POST_SUCCESS':
      console.log('Reducer: DELETE_POST_SUCCESS');
      const index = state.posts.findIndex((post) => post.id === action.post.id);
      return Object.assign({}, state, {
        posts: [
          ...state.posts.slice(0, index),
          ...state.posts.slice(index + 1)
        ]
      })
    default:
      break;
  }
  return state;
}

export default posts;
