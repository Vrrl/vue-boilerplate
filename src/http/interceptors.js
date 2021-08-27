// import store from '../store'

// export const response = (response) => {
  
//   return Promise.resolve(response)
// }

// export const responseError = (err) => {
  
//   if (err.response.status === 401) {
//     store.dispatch('Auth/ActionSignOut')
//   }
  
//   //debug error requests if is in dev
//   if(process.env.NODE_ENV === 'development'){
//     console.log(err.response)
//   }
  
//   return Promise.reject(err)
// }