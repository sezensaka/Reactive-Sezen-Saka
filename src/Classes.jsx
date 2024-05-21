import React from 'react';

function Classes({ buttonClasses, activeButtonId, changeButtonClass }) {
  const handleClick = (buttonId) => {
    changeButtonClass(buttonId);
  };

  const activeButtonData = buttonClasses.find(button => button.id === activeButtonId);

  return (
    <article id="article2">
      <div className="containerarticle mt-5">
        <div style={{ color: 'transparent' }}>000</div>
        <h2 className="text-center head2">OUR CLASSES</h2>
        <div className="hr mb-5 mt-3"></div>
        <p className="text-center article2p2">
          Lorem ipsum is not a simply random text. It has roots in a piece of classical at <br />
          Hampden-Sydney College.
        </p>
      </div>
      <div className="container2 mt-5 mb-5">
        <div className="buttons2">
          {buttonClasses.map(button => (
            <button key={button.id} className={`btn ${button.id === activeButtonId ? 'custom-button' : 'button4'}`} id={button.id} onClick={() => handleClick(button.id)}>
              {button.name}
              <span className="arrow"></span>
            </button>
          ))}
        </div>
      </div>
      <div className="container" id="yogadiv">
        <div className="row">
          <div className="col-sm-6 yogadiv">
            <h3 className="yogaclassh3" id="yogah3">
              {activeButtonData.header}
            </h3>
            <p className="article2p2" id="detailslessons">
              {activeButtonData.details}
            </p>
            <div className="mt-5">
              <h3 className="yogaclassh3" id="yogatime">
                {activeButtonData.time}
              </h3>
              <p className="article2p2 yogap2" id="lesson1">
                {activeButtonData.lessons[0]}
              </p>
              <p className="article2p2 yogap2" id="lesson2">
                {activeButtonData.lessons[1]}
              </p>
              <p className="article2p2 yogap2" id="lesson3">
                {activeButtonData.lessons[2]}
              </p>
            </div>
          </div>
          <div className="col-sm-6" id="imglessons">
            <img id="yogaimg" src={activeButtonData.imgSrc} alt={activeButtonData.imgAlt} className="mt-5" />
          </div>
        </div>
      </div>
    </article>
  );
}

export default Classes;
