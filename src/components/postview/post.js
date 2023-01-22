import React from "react";
import { useEffect, useState } from "react";

import "./post.css";
import heart from "../../images/heart.png";
import more_icon from "../../images/more_icon.png";
import share from "../../images/share.png";
import Navbar from "../nav";

const Post = () => {
  const [data, setData] = useState([]);
  const all_posts = [];
  useEffect(() => {
    fetch("https://instaclone-server-bi6t.onrender.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let k = 0;
  for (let i = data.length - 1; i >= 0; i--) {
    all_posts[k] = data[i];
    k++;
  }

  return (
    <>
      <Navbar />
      <div className="all_posts">
        {all_posts.map((udata) => {
          return (
            <section className="post">
              <section className="post_header">
                <div className="first_line">
                  <span className="name">{udata.name}</span>
                  <span className="dots">
                    <img
                      className="more_icon"
                      src={more_icon}
                      alt="dots"
                      style={{ width: "50px", marginTop: "22px" }}
                    ></img>
                  </span>
                </div>
                <div className="second_line">
                  <p className="location">{udata.location}</p>
                </div>
              </section>
              <section className="post_img">
                <img
                  src={udata.PostImage}
                  alt={udata.name}
                  style={{ width: "100%", height: "400px" }}
                ></img>
              </section>
              <section className="footer">
                <img
                  className="heart_icon"
                  src={heart}
                  alt="like"
                  style={{ width: "40px", height: "25px", padding: "10px" }}
                ></img>
                <img
                  className="share_icon"
                  src={share}
                  alt="share"
                  style={{ width: "40px", height: "25px", padding: "10px" }}
                ></img>
                <span className="date">{udata.date}</span>
                <div className="likes">
                  <p className="likes">{udata.likes} likes</p>
                </div>
                <div className="desc">
                  <span className="desc">{udata.description}</span>
                </div>
              </section>
            </section>
          );
        })}
      </div>
    </>
  );
};
export default Post;
