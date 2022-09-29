export const FETCH_ADMINS_LIST = 'fetch_admins_list';

export const fetchAdminsList = () => async (dispatch, _, axiosApi) => {
  console.log('%c-> developmentConsole: fetchAdminsList===> ','color:#77dcfd')
  const res = await axiosApi.get('/admins');

  dispatch({
    type: FETCH_ADMINS_LIST,
    payload: res,
  });
};
