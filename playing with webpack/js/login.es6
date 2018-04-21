const login = (username, password) => {
  if (username !== 'admin' || password !== 'radical') {
    console.log('Incorrect login');
  } else {
    console.log('Correct login');
  }
};

export default login;
