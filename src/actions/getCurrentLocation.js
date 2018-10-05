export const GET_CURRENT_LOCATION = 'GET_CURRENT_LOCATION'


export const getCurrentLocation = () => {

  return async (dispatch) => {
    try {
      const location = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((location) => {
          console.log('my current lat', location.coords.latitude);
          console.log('my current long', location.coords.longitude);
          console.log('accuracy rate', location.coords.accuracy);
          resolve({ lat: location.coords.latitude, long: location.coords.longitude })
        });
      })

      console.log('location here', location)
      dispatch({
        type: GET_CURRENT_LOCATION,
        payload: location
      })

    } catch (e) {
      console.error(e)
    }
  }
}