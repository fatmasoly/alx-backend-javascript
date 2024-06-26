import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  return Promise.allSettled(promises).then((results) => {
    const array = results.map((result) => ({
      status: result.status,
      value: result.value ? result.value : String(result.reason),
    }));
    return array;
  });
}
