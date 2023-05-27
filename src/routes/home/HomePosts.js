import React from "react";
import "./HomePosts.css";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";

function HomePosts() {
  const [user, loading] = useAuthState(auth);
  return (
    <ul className="posts">
      <li className="add-post">
        <div className="add-post-header">
          <img className="add-post-photo" src={user?.photoURL} />
          <span className="add-post-input">What do you thinking, Nicolas?</span>
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
          Itaque corrupti velit, id officiis ut reiciendis maxime fugit impedit
          repudiandae qui modi perspiciatis cum sequi voluptas, aperiam animi, a
          nulla perferendis! Deleniti eos, voluptates exercitationem perferendis
          cum sint quos corrupti ipsa aperiam illo officia? Culpa nobis illo,
          enim id inventore aliquam dignissimos placeat nemo. Perferendis odit
          alias, labore facilis amet maiores debitis ratione magnam consectetur
          quo consequatur delectus recusandae ipsam sed minima dolore natus?
          Incidunt animi tempore suscipit vitae sint earum at, placeat modi,
          illum omnis quaerat mollitia! Delectus, laboriosam sint! Voluptas
          commodi voluptates dicta quas nam cumque et saepe hic numquam repellat
          ipsum adipisci iusto similique porro, fuga rerum qui necessitatibus?
          Officia optio maiores, mollitia ducimus aperiam iste suscipit possimus
          facilis! Repudiandae voluptatibus, error omnis animi doloribus nihil
          facere ex quibusdam nisi, id vitae illo debitis iure maiores, neque
          possimus ab! Iste atque debitis repellat voluptatibus vel quo
          assumenda in inventore necessitatibus laboriosam quae, minima, libero
          voluptatem illo placeat qui adipisci dolorem nulla aliquid quia.
          Dignissimos velit animi, illo error necessitatibus modi blanditiis et,
          at perferendis ut fugit laudantium deleniti dolores qui voluptatibus
          dolorem nobis suscipit provident repudiandae eum! Veritatis quidem,
          harum aliquid nobis blanditiis perferendis numquam sapiente laborum
          tempore, voluptate atque. Deleniti aut consequatur itaque qui, alias
          rem id, delectus, numquam provident eum quos officia autem. Sunt harum
          totam consectetur, iste necessitatibus suscipit officiis ratione
          pariatur eum at repellat qui quibusdam dolorem iusto tempore quas iure
          ut aliquam repudiandae animi similique. Error earum tempore nostrum
          deleniti laborum atque, laboriosam enim, consequuntur neque ullam
          facere vel? Ut natus debitis unde deleniti aliquam, dolore nobis
          alias. Natus voluptatem incidunt excepturi. Natus, placeat, ad nostrum
          minus sit, asperiores cumque praesentium aspernatur deserunt eligendi
          ducimus laudantium nesciunt at eos voluptatum facilis eaque sint
          incidunt quos? Fuga quo culpa ex atque ab. In cupiditate quidem ipsam
          labore, quis dolorem assumenda laboriosam eligendi ducimus maxime
          mollitia aliquam. Officiis quisquam vero et corrupti nisi consequuntur
          ipsam quaerat explicabo laboriosam ipsum, culpa nesciunt minima
          tempore deserunt deleniti officia reiciendis perferendis est magni.
          Ipsum, sunt quis? Ducimus nostrum excepturi alias accusantium
          dignissimos incidunt ratione iste mollitia, obcaecati nemo magnam
          saepe modi autem pariatur molestiae minus nesciunt consequuntur cumque
          totam neque. Amet, neque vitae aperiam quibusdam voluptate
          perspiciatis sequi mollitia est illum, vero odit ex ipsum minus
          tempora deserunt provident voluptates dolores enim qui impedit
          cupiditate. Iure, numquam. Officiis nam optio inventore dolores
          facilis? Hic cupiditate quisquam, deleniti sit dolor assumenda
          accusantium fugit possimus, commodi minima odio doloremque non
          expedita harum! Alias numquam asperiores quas, sed rerum totam facere
          omnis a. Fuga amet ad voluptatum, quis rem blanditiis soluta, omnis
          nostrum sint commodi eum aspernatur nihil voluptas esse necessitatibus
          exercitationem doloremque quaerat eveniet placeat quasi possimus harum
          nobis repellendus corrupti. Hic et magnam voluptates iure adipisci ut
          incidunt, nam magni atque debitis ullam amet dolor itaque voluptatem
          repellat impedit temporibus aut quae omnis fugit totam non placeat
          deserunt? Itaque, praesentium, saepe deleniti vitae inventore adipisci
          nemo dolore, soluta optio at incidunt laboriosam veniam. Laudantium
          vel autem esse fuga similique laboriosam cupiditate unde incidunt sit
          pariatur cum assumenda, maxime sed nisi veritatis voluptatum?
          Doloribus, assumenda nemo! Assumenda quod adipisci molestiae aliquam
          maiores totam. Delectus ullam quisquam aut non sint. Quaerat eos
          molestias repellat culpa praesentium vel, facilis esse nostrum
          exercitationem enim ad in cum quia odio labore ea debitis, soluta
          impedit blanditiis maiores perspiciatis quod! Hic, dolores optio minus
          eaque suscipit ipsa qui temporibus, vero necessitatibus illum, nemo
          maxime accusantium recusandae aut numquam tempora deserunt omnis cum
          amet provident obcaecati! Quia corporis soluta veritatis nihil eveniet
          impedit, dolores quaerat mollitia laboriosam enim, dicta aliquid
          labore tempore velit iste voluptas vero aspernatur iusto earum quis
          eos reprehenderit obcaecati magni? Rerum repellendus iste dolorum odit
          alias consectetur magni tempore, ut nulla explicabo quaerat
          consequatur animi similique minima nostrum minus facilis soluta
          accusamus totam velit iure perferendis eius? Consequuntur perferendis
          distinctio corporis sunt dignissimos veniam, iure, vero repellendus,
          numquam eligendi laboriosam fuga nemo esse quisquam earum fugiat odit
          commodi placeat ratione. Distinctio iusto perferendis quidem alias
          deserunt ipsam unde ab facere minima, esse perspiciatis delectus
          officia itaque a excepturi aut commodi quae repellat. Aliquid pariatur
          reiciendis tempore nemo quae id, facilis laborum vel voluptatum iste
          fugit suscipit cumque ipsam iure minima dolor reprehenderit quasi
          sequi, nisi harum dolorem. Ratione possimus, maxime nihil modi ipsa
          nisi aperiam, laudantium odio unde eveniet beatae maiores nostrum amet
          temporibus, omnis delectus aspernatur impedit dicta iste. Qui incidunt
          doloremque libero voluptatibus nam, repellat debitis. Dignissimos quos
          dolor repudiandae laborum, eos esse vero eaque odit voluptas
          consectetur porro rerum, suscipit consequuntur eum dolorum temporibus
          reiciendis voluptate unde, voluptatibus tempore cumque provident
          aliquid. At doloribus nemo odio provident perspiciatis excepturi dicta
          quaerat, dolore rem aliquam repellat sed quos incidunt quo eveniet
          recusandae! Voluptates molestiae earum sed officia nulla natus atque
          veritatis. Dicta eaque facilis eligendi est beatae architecto aliquid
          quibusdam at! Error minima, dignissimos impedit nobis suscipit facere.
          Tenetur temporibus nesciunt voluptas nulla voluptatum praesentium
          facilis incidunt vitae magni debitis excepturi aliquam animi, laborum
          velit? Quod quia, soluta mollitia laborum esse expedita excepturi nemo
          saepe ea, suscipit corporis quisquam! Minima ipsa dolor suscipit
          perspiciatis nulla, ratione rem deserunt earum dolore id molestiae
          itaque unde praesentium impedit, aut quae non? Et velit voluptatum ad
          alias labore vero repudiandae voluptatem minima debitis. Dolores,
          obcaecati sint incidunt eos nulla rem voluptatum deleniti modi animi
          culpa fuga vitae illum saepe perferendis similique, minus nihil
          voluptatibus earum? Atque nesciunt tenetur ipsum, nam qui harum
          possimus perferendis unde et debitis voluptatibus earum minus ad quae
          reprehenderit. Iure a autem neque dignissimos omnis eligendi culpa
          facilis architecto doloremque explicabo amet velit voluptate saepe
          vero, quisquam accusamus. Tenetur ad cupiditate, tempore odit,
          sapiente, fugiat ipsam error quia harum delectus quo quaerat! Autem
          magni quae exercitationem neque, dolor veniam enim dicta quidem
          praesentium, blanditiis possimus. Tempore, in veritatis distinctio
          laboriosam aut quod odio vitae velit nostrum eum atque, ipsa dicta
          ratione reiciendis alias omnis molestias quisquam voluptas, sapiente
          aperiam at. Dolores ipsa at libero quisquam illum dolorem aspernatur
          velit dolor debitis a obcaecati, ducimus ullam laudantium inventore
          voluptas accusantium, vel deserunt, et possimus numquam! Explicabo non
          beatae libero facere adipisci voluptatem molestiae tempora optio animi
          ipsam amet aliquam fugit excepturi, molestias suscipit necessitatibus
          reprehenderit quo quae eius, atque rerum veritatis quam. Laudantium
          magnam, eos atque vitae repellat sunt, deleniti dolor delectus quaerat
          suscipit maiores architecto laborum quasi voluptas temporibus
          voluptatibus? Voluptates aliquam, dolor iusto, fugit sed molestias
          quidem, perspiciatis voluptatem tenetur quasi blanditiis quos.
          Molestiae repellat provident quasi aliquid odit exercitationem itaque
          optio facilis commodi? Ex beatae ut magni maiores facere enim veniam
          eum quasi minima dignissimos molestiae fugiat ab repellat dolores
          expedita adipisci, dolorem est quae mollitia! Esse fugit placeat,
          voluptate ducimus odio ipsam incidunt dignissimos, saepe hic
          blanditiis iste consequuntur velit vel quos. Vero esse ipsa quia,
          dignissimos nobis molestiae in eos, magni ratione impedit dolore vel
          aut cupiditate eius ullam laudantium iure reprehenderit? Blanditiis
          molestiae dolorem at beatae deserunt nemo sed error rem vitae? Eum ut
          est suscipit labore neque alias repellendus. Libero porro cumque
          repellat. Error, alias. Nulla quod, accusamus mollitia earum cumque
          quae harum reiciendis autem cupiditate aliquam aliquid nostrum
          sapiente veniam fugiat dicta nam iure. Impedit atque enim ducimus
          asperiores eaque itaque pariatur, quaerat dicta dolorem natus dolorum
          quia? Cumque soluta inventore nostrum beatae, magni minus quod numquam
          sequi dolore minima earum obcaecati deleniti?
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
