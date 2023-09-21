// Assuming you have an HTML element with an id for displaying the result
const resultElement = document.getElementById('result');

const postMessage = async (userId, messageContent, token) => {
  try {
    const response = await fetch(`https://strangers-things.herokuapp.com/api/2302-ACC-PT-WEB-PT-C/posts/${userId}/messages`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        message: {
          content: messageContent
        }
      })
    });
    
    if (response.ok) {
      const result = await response.json();
      console.log(result);
      return result;
    } else {
      throw new Error(`Failed to post message: ${response.statusText}`);
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// Example usage when a button is clicked
const TOKEN_STRING_HERE = 'your_token_here';
const userId = 'dynamic_user_id_here'; // Replace with the actual user ID
const messageContent = "Do you still have this?  Would you take $10 less?";

const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', async () => {
  try {
    const result = await postMessage(messageContent, TOKEN_STRING_HERE);
    resultElement.textContent = JSON.stringify(result, null, 2);
  } catch (error) {
    // Handle the error
    console.error(error);
    resultElement.textContent = `Error: ${error.message}`;
  }
});
