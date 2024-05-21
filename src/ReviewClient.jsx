import React from 'react';

function ReviewClient() {
  return (
    <article id="reviewclient">
      <div id="rc">
        <div>
          <div className="" style={{ color: 'transparent' }}>-</div>
          <h2 className="text-center head2" id="rch2">
            REVIEW CLIENT
          </h2>
          <div className="hr mb-5 mt-3"></div>
          <p className="text-center article2p2">
            Lorem ipsum is not a simply random text. It has roots in a piece of classical at <br />
            Hampden-Sydney College.
          </p>
        </div>
        <div className="container">
          <div className="row clientcards">
            <div className="col-sm-6 mt-3">
              <div className="client-card d-flex">
                <div className="clientimg">
                  <img src="./images/client1.jpg" alt="" />
                </div>
                <div className="client-info">
                  <h3>Diet Expert</h3>
                  <p>CFO</p>
                </div>
              </div>
              <div className="client-card-2">
                <div className="content5">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iste amet, ducimus odio repellendus
                    excepturi vitae recusandae, tempora qui, odit officia dignissimos eius esse explicabo harum. Error
                    delectus autem quod.
                  </p>
                  <div className="triangle-left"></div>
                  <div className="triangle-right"></div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 mt-3">
              <div className="client-card d-flex">
                <div className="clientimg">
                  <img src="./images/client2.jpg" alt="" />
                </div>
                <div className="client-info">
                  <h3>Cardio Trainer</h3>
                  <p>CEO</p>
                </div>
              </div>
              <div className="client-card-2">
                <div className="content5">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iste amet, ducimus odio repellendus
                    excepturi vitae recusandae, tempora qui, odit officia dignissimos eius esse explicabo harum. Error
                    delectus autem quod.
                  </p>
                  <div className="triangle-left"></div>
                  <div className="triangle-right"></div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </article>
  );
}

export default ReviewClient;