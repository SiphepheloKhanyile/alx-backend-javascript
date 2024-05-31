function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success',
      };
    })
    // eslint-disable-next-line no-new
    .catch(() => { new Error(); });
}

export default handleResponseFromAPI;
