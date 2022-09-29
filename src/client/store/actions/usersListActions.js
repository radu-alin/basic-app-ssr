export const FETCH_USERS_LIST = 'fetch_users_list';

export const fetchUsersList = () => async (dispatch, _, axiosApi) => {
  console.log('%c-> developmentConsole: fetchUsersList===> ', 'color:#77dcfd');
  const res = await axiosApi.get('/users');

  dispatch({
    type: FETCH_USERS_LIST,
    payload: res,
  });
};
