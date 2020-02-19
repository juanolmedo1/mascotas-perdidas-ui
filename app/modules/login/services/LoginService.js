export async function login({ username, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'error') {
        reject(new Error('invalid username'));
      } else {
        resolve({ username, password });
      }
    }, 3000);
  });
}

export default {
  login
};
