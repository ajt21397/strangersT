// APIs go here:

const COHORT_NAME = "2302-ACC-PT-WEB-PT-C";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}/`;

// GET POSTS

export const getPosts = async () => {
  try {
    const post = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(`${BASE_URL}posts`);
    const result = await response.json();
    console.log(result);
    return result.data.posts;
  } catch (err) {
    console.log(err);
  }
};

// REGISTER ACCOUNT

export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const result = await response.json();
    console.log(result);

    return result;
  } catch (err) {
    console.error(err);
  }
};

// LOGIN TO ACCOUNT

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const result = await response.json();
    console.log(result);

    return result;
  } catch (err) {
    console.error(err);
  }
};