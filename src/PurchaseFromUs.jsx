import React from 'react';

function PurchaseFromUs() {
  return (
    <div className="containerarticle">
      <div style={{ color: 'transparent' }}></div>
      <h2 className="text-center head2">PURCHASE FROM US</h2>
      <div className="hr mb-5 mt-3"></div>
      <p className="text-center article2p2">
        Lorem ipsum is not a simply random text. It has roots in a piece of classical at <br />
        Hampden-Sydney College.
      </p>

      <div id="purchase" className="mb-5">
        <div className="purchasediv">
          <img src="./images/purchase1.jpg" className="cardimg" alt="..." />
          <div className="mt-2">
            <p className="cardhead text-center">Kettlebell / 5kg</p>
            <p className="price text-center">
              <span className="cardspan">89,99</span>$ / 59,99$
            </p>
            <div className="d-flex justify-content-evenly">
              <i className="bi bi-cart-fill iconcart"></i>
              <p className="card-p">Add To Cart</p>
            </div>
          </div>
        </div>
        <div className="purchasediv">
          <img src="./images/purchase2.jpg" className="cardimg" alt="..." />
          <div className="mt-2">
            <p className="cardhead text-center">Treadmill</p>
            <p className="price text-center">
              <span className="cardspan">899,99</span>$ / 599,99$
            </p>
            <div className="d-flex justify-content-evenly">
              <i className="bi bi-cart-fill iconcart"></i>
              <p className="card-p">Add To Cart</p>
            </div>
          </div>
        </div>
        <div className="purchasediv">
          <img src="./images/purchase3.jpg" className="cardimg" alt="..." />
          <div className="mt-2">
            <p className="cardhead text-center">Adjustable Dumbell</p>
            <p className="price text-center">
              <span className="cardspan">89,99</span>$ / 59,99$
            </p>
            <div className="d-flex justify-content-evenly">
              <i className="bi bi-cart-fill iconcart"></i>
              <p className="card-p">Add To Cart</p>
            </div>
          </div>
        </div>
        <div className="purchasediv">
          <img src="./images/purchase4.jpg" className="cardimg" alt="..." />
          <div className="mt-2">
            <p className="cardhead text-center">Kettlebell / 3kg</p>
            <p className="price text-center">
              <span className="cardspan">89,99</span>$ / 59,99$
            </p>
            <div className="d-flex justify-content-evenly">
              <i className="bi bi-cart-fill iconcart"></i>
              <p className="card-p">Add To Cart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PurchaseFromUs;