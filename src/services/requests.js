const baseURL = 'https://65e3370e88c4088649f57f2e.mockapi.io/ReactNativeTask/';

export const signupUser = async data => {
  try {
    const response = await fetch(`${baseURL}userSignup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password,
      }),
    });
    return response;
  } catch (error) {
    console.error('An error occurred during signup:', error);
  }
};

export const getUsers = async () => {
  try {
    const response = await fetch(`${baseURL}userSignup`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  } catch (error) {
    console.error('An error occurred during signup:', error);
  }
};
