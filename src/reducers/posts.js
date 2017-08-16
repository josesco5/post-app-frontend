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
    case 'CREATE_POST':
      console.log('Reducer: CREATE_POST');
      console.log(action);
      const name = action.name;
      const description = action.description;

      return Object.assign({}, state, {
        posts: [
          ...state.posts,
          { name, description }
        ],
        name: '',
        description: ''
      });
    case 'DELETE_POST':
      console.log('Reducer: DELETE_POST');
      console.log(action.post);
      break;
    default:
      break;
  }
  return state;
}

export default posts;
