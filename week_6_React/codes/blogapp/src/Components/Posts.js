
import React from "react";
import Post from "./Post";

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            error: null,
        };
        this.loadPosts = this.loadPosts.bind(this);
    }

    loadPosts() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                const posts = data.map(
                    (item) => new Post(item.id, item.title, item.body)
                );
                this.setState({ posts });
            })
            .catch((error) => {
                this.setState({ error });
            });
    }

    componentDidMount() {
        this.loadPosts();
    }

    componentDidCatch(error, info) {
        alert("An error occurred: " + error.toString());
    }

    render() {
        const { posts, error } = this.state;

        if (error) {
            return <p>Error loading posts: {error.message}</p>;
        }

        return (
            <div>
                <h2>Blog Posts</h2>
                {posts.map((post) => (
                    <div key={post.id} style={{border: "1px solid #ccc", marginBottom: "1em", padding: "1em"}}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Posts;
