import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((messsages) => {
      console.log(`${messsages[0].body} ${messsages[1].firstName} ${messsages[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}

export default handleProfileSignup;
