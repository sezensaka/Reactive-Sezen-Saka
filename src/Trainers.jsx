import React from 'react';

function Trainers() {
  return (
    <article id="article3">
      <div className="containerarticle">
        <div style={{ color: 'transparent' }}>000</div>
        <h2 className="text-center head2">
          OUR BEST TRAINERS
        </h2>
        <div className="hr mb-5 mt-3"></div>
        <p className="text-center article2p2">
          Lorem ipsum is not a simply random text. It has roots in a piece of classical at <br />
          Hampden-Sydney College.
        </p>
      </div>
      <article className="article mt-5" id="article1">
        <div className="container">
          <div className="card3 mt-2 mb-5">
            <div className="image-container">
              <img src="./images/trainer1.jpg" alt="Trainer 1" />
              <div className="line top"></div>
              <div className="line bottom"></div>
              <div className="line left"></div>
              <div className="line right"></div>
              <div className="forhover">
                <div className="plus-symbol text-center">
                  <span className="symbol-text">Jane Doe</span>
                  <span className="symbol-text2">Cardio Trainer</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card3 mt-2 mb-5">
            <div className="image-container">
              <img src="./images/trainer2.jpg" alt="Trainer 2" />
              <div className="line top"></div>
              <div className="line bottom"></div>
              <div className="line left"></div>
              <div className="line right"></div>
              <div className="forhover">
                <div className="plus-symbol text-center">
                  <span className="symbol-text">John Doe</span>
                  <span className="symbol-text2">Cardio Trainer</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card3 mt-2 imgartidiv mb-5">
            <div className="image-container">
              <img src="./images/trainer3.jpg" alt="Trainer 3" />
              <div className="line top"></div>
              <div className="line bottom"></div>
              <div className="line left"></div>
              <div className="line right"></div>
              <div className="forhover">
                <div className="plus-symbol text-center">
                  <span className="symbol-text">Jane Doe</span>
                  <span className="symbol-text2">Cardio Trainer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </article>
  );
}

export default Trainers;