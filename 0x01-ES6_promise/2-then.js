function handleResponseFromAPI(promise) {
  // try {
  //   const awaitPromise = await promise();
  //   console.log('Got a response from the API');
  //   return {
  //     status: 200,
  //     body: 'success',
  //   };
  // } catch (error) {
  //   return Error(error);
  // }

  promise.then(() => {
    console.log('Got a response from the API');
    return {
      status: 200,
      bod: 'success',
    };
  }).catch(Error);
}

export default handleResponseFromAPI;
