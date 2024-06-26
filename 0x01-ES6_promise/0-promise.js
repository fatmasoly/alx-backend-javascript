export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const okay = true;
      if (okay) {
        resolve('Success');
      } else {
        reject(Error('failed'));
      }
    }, 1000);
  });
}
