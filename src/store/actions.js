export const SET_PAGE_TITLE = "SET_PAGE_TITLE";
export const SET_INFO_LIST = "SET_INFO_LIST";

export function setPageTitle(data){
    return {type: SET_PAGE_TITLE, data: data}
}
export function setInfoList (data) {
    return (dispatch, getState) => {
      // 使用fetch实现异步请求
      // 请求发起前可以先dispatch一个加载开始状态
      // 例如 dispatch({ type: SET_LOADING_TYPE, data: "loading" })
      window.fetch('https://blog.csdn.net/phoenix/web/v1/comment/template/List', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          }
      }).then(res => {
          return res.json()
      }).then(data => {
        //   let { code, data } = data
        //   if (code === 0) {
        //       dispatch({ type: SET_INFO_LIST, data: data })
        //   }
          // 请求结束可以dispatch一个加载结束状态
          // 例如 dispatch({ type: SET_LOADING_TYPE, data: "loaded" })
          // 还可以区分一下成功或者失败
      })
    }
  }