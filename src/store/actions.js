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
      })
    }
  }