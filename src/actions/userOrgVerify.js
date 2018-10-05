// export const userOrgVerify = () => {
//     const token_user = localStorage.getItem('token_user')
//     const token_org = localStorage.getItem('token_org')

//     if (token_user) {

//     } else if (token_org) {

//     }

//     return async (dispatch) => {
//       const token = localStorage.getItem('token_user')
//       const userId = localStorage.getItem('user_id')
  
//       if (token) {
//         try {
//           // change route to get a user data with token 
//           const response = await axios(`${BASE_URL}/users/${userId}`, {
//             method: 'GET',
//             headers: {
//               Authorization: `Bearer ${token}`
//             }
//           })
//           dispatch({
//             type: USER_LOGIN_SUCCESS,
//             payload: response.data.data[0]
//           })
//           // console.log('response in userVerify', response.data.data[0])
//           return true
//         } catch (e) {
//           dispatch({
//             type: USER_LOGIN_FAILED,
//             payload: e
//           })
//           return false
//         }
//       } else {
//         dispatch({
//           type: USER_NOT_LOGINED
//         })
//         return false
//       }
//     }

//   }