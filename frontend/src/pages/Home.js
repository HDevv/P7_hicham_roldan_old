import React from "react";
import "../components/logo/Logo";
import NavBar from "../components/NavBar/NavBar.js";

const Home = () => {

  return (
    <div>

        <NavBar />

      <div className="forum">
            <h1>Publications</h1>    

            <div className="post_box">
                <div className='profile_img'></div>
                <div className='user_name'></div>
                <form className='post_form'>
                    <input type="text" value="Quoi de neuf ?" />
                </form>
            </div>
        </div>
    </div>
  );
};

export default Home;
