export const GET_HOME_POSTS_REQUEST = 'GET_HOME_POSTS_REQUEST';
export const GET_HOME_POSTS_SUCCESS = 'GET_HOME_POSTS_SUCCESS';
export const GET_HOME_POSTS_FAILURE = 'GET_HOME_POSTS_FAILURE';

export const GET_UNAUTHORIZED_POSTS_REQUEST = 'GET_UNAUTHORIZED_POSTS_REQUEST';
export const GET_UNAUTHORIZED_POSTS_SUCCESS = 'GET_UNAUTHORIZED_POSTS_SUCCESS';
export const GET_UNAUTHORIZED_POSTS_FAILURE = 'GET_UNAUTHORIZED_POSTS_FAILURE';

export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILURE = 'SEARCH_FAILURE';

export const GET_DAILY_TRENDS_REQUEST = 'GET_DAILY_TRENDS_REQUEST';
export const GET_DAILY_TRENDS_SUCCESS = 'GET_DAILY_TRENDS_SUCCESS';
export const GET_DAILY_TRENDS_FAILURE = 'GET_DAILY_TRENDS_FAILURE';

export const getHomePostsRequest = payload => {
  return ({
    type: GET_HOME_POSTS_REQUEST,
    payload,
  });
}

export const getUnauthorizedPostsRequest = payload => {
	console.log('getUnauthorizedPostsRequest')
  return ({
    type: GET_UNAUTHORIZED_POSTS_REQUEST,
    payload,
  });
}

export const searchRequest = payload => ({
  type: SEARCH_REQUEST,
  payload,
});

export const getDailyTrendsRequest = (payload) => ({
  type: GET_DAILY_TRENDS_REQUEST,
  payload
});


