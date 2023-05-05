import "./BlogContentStyle.css";
import { Link } from "react-router-dom";
import Elon2 from "./assests/Elon3.jpg";
import Elon3 from "./assests/Elong2.jpg";
const BlogContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>My first Blog</h1>
        <p>
          React is one of my favourite javascript library. So, sharing about
          some of the basics concepts of react in my blog.
        </p>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to="https://prajwolsubedi.hashnode.dev/react-learning-from-the-basics"
        >
          <button className="btn">Show</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={Elon2} className="img" alt="Elon Musk" />
          </div>
          <div className="img-stack bottom">
            <img src={Elon3} className="img" alt="Elon Musk" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
