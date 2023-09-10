const UpdatePost = async (post_ID, updatedPostData) => {
    try {
        const token = localStorage.getItem('token')
        console.log(token)
        const response = await fetch(`https://strangers-things.herokuapp.com/api/2302-ACC-PT-WEB-PT-C/posts/{token}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify ({
                post: {updatedPostData
                    // title:'',
                    // description:'',
                    // price:'',
                    // location:'',
                    // seller:'',
                    // willDeliver:'',
                }
            })
        });
        const result = await response.json();
        console.log(result);
        return result 
    } catch (error) {
        console.error(error);
    }
}

export default UpdatePost;