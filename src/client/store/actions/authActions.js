export const FETCH_CURRENT_USER = 'fetch_current_user';

export const fetchCurrentUser = () => async (dispatch, _, axiosApi) => {
  console.log('%c-> developmentConsole: fetchCurrentUser===> ','color:#77dcfd')
  const res = await axiosApi.get('/current_user');

  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res,
  });
};
