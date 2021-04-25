import { client } from './client';

const initialState = null;

export default function reposReducer(state = initialState, action) {
  switch (action.type) {
    case 'repos/reposLoaded': {
      return action.payload
    }
    default:
      return state
  }
}
export function fetchNewRepos(url) {
  return async function fetchRepos (dispatch, getState) {
  const response = await client.get(url)
  dispatch({ type: 'repos/reposLoaded', payload: response })
} 
}
