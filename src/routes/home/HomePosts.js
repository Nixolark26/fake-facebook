import React, { useState } from "react";
import "./HomePosts.css";
import "./AddPost.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";

function HomePosts() {
  const [user, loading] = useAuthState(auth);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <ul className="posts">
      {show && (
        <li className="add-post-popup">
          <div className="add-post-popup-container">
            <div className="add-post-popup-title-container">
              <h3 className="add-post-popup-title">Create post</h3>
              <i
                class="fa-solid fa-xmark close-popup"
                onClick={handleClick}
              ></i>
            </div>
            <hr></hr>
            <div className="add-post-popup-header">
              <img src={user.photoURL} />
              <h4>{user.displayName}</h4>
            </div>
            <textarea
              placeholder={"What do you thinking?, " + user.displayName}
            />
            <div className="add-post-popup-add-container">
              <span>Add to your post</span>
              <label className="add-photo-label">
                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png" />
                <input type="file" className="add-photo-to-post"></input>
              </label>
            </div>
            <button className="add-post-button" onClick={handleClick}>
              Post
            </button>
          </div>
        </li>
      )}
      <li className="add-post">
        <div className="add-post-header">
          <img className="add-post-photo" src={user?.photoURL}></img>
          <span onClick={setShow} className="add-post-input">
            What do you thinking, Nicolas?
          </span>
        </div>
        <div className="actions-add-post">
          <div>
            <i class="fa-solid fa-images"></i>
            <span>Photo/Video</span>
          </div>

          <div>
            <i class="fa-solid fa-face-grin"></i>
            <span>Feeling/Activity</span>
          </div>
        </div>
      </li>

      <li className="post-element">
        <div className="post-header">
          <div className="user-header">
            <img
              src="https://pps.whatsapp.net/v/t61.24694-24/343782197_545502987738539_3842625919029968865_n.jpg?ccb=11-4&oh=01_AdR1svoj501FCIu7krpzMrJzHk28KGxOPFef1HZf9osduQ&oe=64774595"
              alt=""
            />
            <h3>Nicolas Zarate</h3>
          </div>
          <div>
            <i class="fa-solid fa-ellipsis"></i>
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          sapiente unde adipisci? Sequi, eos. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Voluptatum nulla esse dolore at quod
          ducimus nostrum eveniet, repellendus quisquam itaque id cumque
          architecto optio earum eaque. Delectus nesciunt quas autem possimus
          minus provident dolorum omnis, laudantium libero laborum animi
          repudiandae minima, facere accusantium ex blanditiis cupiditate
          repellat earum placeat ad tenetur voluptatibus tempora voluptates et?
          Dolorum quasi rerum debitis quibusdam eius! Alias perspiciatis
          molestiae animi eligendi pariatur atque consequuntur nostrum magni.
          Necessitatibus, quod, modi voluptatem saepe adipisci non dolorum eius
          animi qui laudantium consequuntur eos excepturi! Quisquam, ea
          aspernatur? In non a debitis esse error ea? Iste amet, eligendi
          consequatur, cupiditate ut quas laboriosam blanditiis velit ea
          excepturi reiciendis? Ipsam impedit libero, accusantium nihil,
          officiis id voluptatem sint tempora in laborum modi minima.
        </p>
        <img
          className="post-image"
          src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/2023/03_29_revuelto/gate_models_s_02_m.jpg"
          alt=""
        />
        <hr />
        <div className="post-actions">
          <i class="fa-solid fa-thumbs-up">Like</i>
          <i class="fa-solid fa-comment">Comment</i>
          <i class="fa-solid fa-share">Share</i>
        </div>
      </li>

      <li className="post-element first-post">
        <div className="post-header">
          <div className="user-header">
            <img
              src="https://pps.whatsapp.net/v/t61.24694-24/143252907_603869030598613_1643988304609656636_n.jpg?ccb=11-4&oh=01_AdT1cgsO8GHDCgA0AZn1ZvOB7RCGDo5LMIp15YlGEZHSBQ&oe=647730D5"
              alt=""
            />
            <h3>Moises Pomacaja</h3>
          </div>
          <div>
            <i class="fa-solid fa-ellipsis"></i>
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          sapiente unde adipisci? Sequi, eos. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. At, repellat sapiente error fugit
          possimus facere omnis consequatur qui quis distinctio aliquid eveniet
          excepturi quam. Perferendis sit dolorum, odio rem aut praesentium.
          Itaque corrupti velit, idcipit possimus facilis! Repudeatae, magni
          minus quod numquam sequi dolore minima earum obcaecati deleniti?
        </p>
        <img
          className="post-image"
          src="https://app.contabilium.com/files/explorer/16752/Productos-Servicios/concepto-10259112.jpg"
          alt=""
        />
        <hr />
        <div className="post-actions">
          <i class="fa-solid fa-thumbs-up">Like</i>
          <i class="fa-solid fa-comment">Comment</i>
          <i class="fa-solid fa-share">Share</i>
        </div>
      </li>
      <li className="post-element">
        <div className="post-header">
          <div className="user-header">
            <img
              src="https://pps.whatsapp.net/v/t61.24694-24/339610083_941817893910141_1333137421218453295_n.jpg?ccb=11-4&oh=01_AdQSx2MsWGCU0TIQP6cB9M1nC-IWJVB2eF85SmSpZVf3KQ&oe=64774CBF"
              alt=""
            />
            <h3>Franco Mazzei</h3>
          </div>
          <div>
            <i class="fa-solid fa-ellipsis"></i>
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          sapiente unde adipisci? Sequi, eos.
        </p>
        <img
          className="post-image"
          src="https://emprendedor.com/wp-content/uploads/2021/08/20190812191728-F76E4045-9F4A-4A56-BED6-46B6FE22DC09.jpg"
          alt=""
        />
        <hr />
        <div className="post-actions">
          <i class="fa-solid fa-thumbs-up">Like</i>
          <i class="fa-solid fa-comment">Comment</i>
          <i class="fa-solid fa-share">Share</i>
        </div>
      </li>
    </ul>
  );
}

export default HomePosts;
