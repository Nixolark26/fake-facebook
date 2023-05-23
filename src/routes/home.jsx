import React from "react";
import "./home.css";

function Home() {
  return (
    <div>
      <header>
        <nav>
          <ul className="top-nav">
            <li className="top-nav__elements logo">facebook</li>

            <div className="search-container">
              <li className="top-nav__elements">
                <i class="fa-solid fa-magnifying-glass"></i>
              </li>
              <input type="search" placeholder="Search in Facebook" />
            </div>

            <div className="top-nav__elements-container">
              <li className="top-nav__elements">
                <i class="fa-brands fa-facebook-messenger"></i>
              </li>
              <li className="top-nav__elements">
                <i class="fa-solid fa-bell"></i>
              </li>
              <li className="top-nav__elements">
                <i class="fa-solid fa-user"></i>
              </li>
            </div>
          </ul>
        </nav>
      </header>

      <main className="posts-container">
        <ul className="left-nav">
          <li className="left-nav__elements">
            <i class="fa-solid fa-house"></i> <span>Home</span>
          </li>
          <li className="left-nav__elements">
            <i class="fa-solid fa-user"></i> <span>My profile</span>
          </li>
          <hr />
          <li className="left-nav__elements">
            <i class="fa-brands fa-youtube"></i> <span>Watch</span>
          </li>
          <li className="left-nav__elements">
            <i class="fa-solid fa-user-group"></i> <span>Friends</span>
          </li>
          <li className="left-nav__elements">
            <i class="fa-solid fa-store"></i> <span>Store</span>
          </li>
          <li className="left-nav__elements">
            <i class="fa-solid fa-gamepad"></i> <span>Games</span>
          </li>
          <li className="left-nav__elements ">
            <div className="all">
              <i class="fa-solid fa-ellipsis-vertical"></i>
              <i class="fa-solid fa-ellipsis-vertical"></i>
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
            <span>See all</span>
          </li>
          <hr />
          <li className="left-nav__elements">
            <i class="fa-solid fa-users-line"></i> <span>See all Groups</span>
          </li>
          <hr />
          <li className="left-nav__elements">
            <i class="fa-solid fa-paperclip"></i>
            <span>See all shorcuts</span>
          </li>
        </ul>
        <ul className="posts">
          <li className="add-post">
            <div>
              <i class="fa-solid fa-user"></i>
              <span className="add-post-input">
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
              sapiente unde adipisci? Sequi, eos.
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
              sapiente unde adipisci? Sequi, eos.
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
        <ul className="right-nav">
          <div className="contacts-header">
            <h3>Contacts</h3>
            <div>
              <i class="fa-solid fa-video"></i>
              <i class="fa-solid fa-magnifying-glass"></i>
              <i class="fa-solid fa-ellipsis"></i>
            </div>
          </div>
          <ul>
            <li className="right-nav__elements">
              <img src="" alt="" />
              <span>Franco Mazzei</span>
            </li>
            <li className="right-nav__elements">
              <img src="" alt="" />
              <span>Nicolas Zarate</span>
            </li>
            <li className="right-nav__elements">
              <img src="" alt="" />
              <span>Moises Pomacaja</span>
            </li>
            <li className="right-nav__elements">
              <img src="" alt="" />
              <span>Alejandro Zamudio</span>
            </li>
            <li className="right-nav__elements">
              <img src="" alt="" />
              <span>Martin Puebla</span>
            </li>
            <li className="right-nav__elements">
              <img src="" alt="" />
              <span>Nicolas Gularte</span>
            </li>
            <li className="right-nav__elements">
              <img src="" alt="" />
              <span>Carlos Villagran</span>
            </li>
            <li className="right-nav__elements">
              <img src="" alt="" />
              <span>Ramon Valdes</span>
            </li>
            <li className="right-nav__elements">
              <img src="" alt="" />
              <span>Florinda Meza</span>
            </li>
            <li className="right-nav__elements">
              <img src="" alt="" />
              <span>Roberto Gomez</span>
            </li>
            <li className="right-nav__elements">
              <img src="" alt="" />
              <span>Maria Antonieta</span>
            </li>
            <li className="right-nav__elements">
              <img src="" alt="" />
              <span>Ruben Aguirre</span>
            </li>
            <li className="right-nav__elements">
              <img src="" alt="" />
              <span>Edgar Vivar</span>
            </li>
            <li className="right-nav__elements">
              <img src="" alt="" />
              <span>Angelines Fernandez</span>
            </li>
            <li className="right-nav__elements">
              <img src="" alt="" />
              <span>Juan Lozano</span>
            </li>
            <li className="right-nav__elements">
              <img src="" alt="" />
              <span>Ivana Varela</span>
            </li>
            <li className="right-nav__elements">
              <img src="" alt="" />
              <span>Rocio Cabrera</span>
            </li>
          </ul>
        </ul>
      </main>
    </div>
  );
}

export default Home;
