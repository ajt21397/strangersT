import { useState, useEffect } from "react";
import { useAuth } from "./Auth";
import { useNavigate } from "react-router-dom";

const MyPosts = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const { isLoggedIn, user } = useAuth();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
            return;
        }
        const fetchPosts = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await fetch('https://strangers-things.herokuapp.com/api/2302-ACC-PT-WEB-PT-C/posts', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const result = await response.json();
                if (user && user._id) { // Check if user exists and has _id property
                    const userPosts = result.data.posts.filter(post => post.author._id === user._id);
                    setPosts(userPosts);
                } else {
                    console.error("User object is missing _id property.");
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchPosts();
    }, [isLoggedIn, navigate, user]);   

return (
        <div>
            <h2 className="myPosts">My Posts</h2>
            {isLoggedIn ? (
                <div>
                    {posts.length === 0 ? (
                        <p>Welcome to your Posts!</p>
                    ) : (
                        <ul>
                            {posts.map(post => (
                                <li key={post._id}>
                                    <h3>{post.title}</h3>
                                    <p>{post.description}</p>
                                    <p>{post.price}</p>
                                    <p>{post.seller}</p>
                                    <p>{post.location}</p>
                                    <p>{post.willDeliver}</p>
                                </li>
                            ))}
                        </ul>     
                )}
        </div>
    ) : (
        <p>Please log in.</p>
    )}
    </div>
    );
};

export default MyPosts;