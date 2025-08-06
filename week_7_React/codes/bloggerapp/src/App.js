import React, { useState } from "react";
import "./App.css";

const CourseDetails = () => (
  <div>
    <h2>Course Details</h2>
    <b>Angular</b>
    <div>4/5/2021</div>
    <br />
    <b>React</b>
    <div>6/3/20201</div>
  </div>
);

const BookDetails = () => (
  <div>
    <h2>Book Details</h2>
    <b>Master React</b>
    <div>670</div>
    <br />
    <b>Deep Dive into Angular 11</b>
    <div>800</div>
    <br />
    <b>Mongo Essentials</b>
    <div>450</div>
  </div>
);

const BlogDetails = () => (
  <div>
    <h2>Blog Details</h2>
    <b>React Learning</b>
    <div><b style={{ fontWeight: "normal" }}>Stephen Biz</b></div>
    <div>Welcome to learning React!</div>
    <br />
    <b>Installation</b>
    <div><b style={{ fontWeight: "normal" }}>Schwezdneier</b></div>
    <div>You can install React from npm.</div>
  </div>
);

function App() {
  const [visible, setVisible] = useState({
    course: true,
    book: true,
    blog: true,
  });

  const ShowComponent = ({ show, children }) => show ? children : null;

  return (
    <div className="App">
      <div style={{ marginBottom: 30 }}>
        <button onClick={() => setVisible({ course: true, book: true, blog: true })}>
          Show All
        </button>
        <button onClick={() => setVisible({ course: true, book: false, blog: false })}>
          Only Course
        </button>
        <button onClick={() => setVisible({ course: false, book: true, blog: false })}>
          Only Book
        </button>
        <button onClick={() => setVisible({ course: false, book: false, blog: true })}>
          Only Blog
        </button>
        <button onClick={() => setVisible({ course: false, book: false, blog: false })}>
          Show None
        </button>
      </div>

      <div className="container">
        {visible.course && (
          <div className="column">
            <CourseDetails />
          </div>
        )}
        <div className="divider" />
        {visible.book ? (
          <div className="column">
            <BookDetails />
          </div>
        ) : (
          <div className="column" />
        )}
        <div className="divider" />
        <ShowComponent show={visible.blog}>
          <div className="column">
            <BlogDetails />
          </div>
        </ShowComponent>
      </div>
    </div>
  );
}

export default App;
