import React from 'react';
import bmiimg from '../images/bmi-index.jpg';

function BMICalculator() {
  const calculateBMI = () => {
    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
    let result = document.querySelector("#result");

    if (height === "" || isNaN(height)) 
      result.innerHTML = "Enter height value!";
    else if (weight === "" || isNaN(weight)) 
      result.innerHTML = "Enter weight value!";
    else {
      let bmi = (weight / ((height * height) / 10000)).toFixed(2);

      let triangle = document.querySelector(".triangle");
      if (bmi < 18.5) {
        triangle.style.left = "17%";
      } else if (bmi >= 18.5 && bmi < 25) {
        triangle.style.left = "33%";
      } else if (bmi >= 25 && bmi < 30) {
        triangle.style.left = "50%";
      } else if (bmi >= 30 && bmi < 35) {
        triangle.style.left = "67%";
      } else {
        triangle.style.left = "83%";
      }

      result.innerHTML = "";
    }
  };

  return (
    <div className="container mt-5" id="bmiarticle">
      <div className="row">
        <div className="col-sm-6">
          <h2 className="head1">
            BMI Calculator
          </h2>
          <p className="article2p2 mt-4">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
            classical Latin literature from 45 BC, making it over 2000 years old.
          </p>
          <p className="article2p2 mt-4">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
            classical Latin literature from 45 BC, making it over 2000 years old.
          </p>
          <div className="d-flex mb-5" id="inputs">
            <div className="d-flex inputs">
              <input className="form-control forminput" type="text" placeholder="Your Height" id="height" onChange={calculateBMI} />
              <span className="spaninput"> cm</span>
            </div>
            <div className="d-flex inputs">
              <input className="form-control forminput" type="text" placeholder="Your Weight" id="weight" onChange={calculateBMI} />
              <span className="spaninput"> kg</span>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mt-5">
          <h6 className="articleh6 text-center">
            Your BMI
          </h6>
          <div className="photo-container">
            <img src={bmiimg} alt="BMI" id="imgbmi" />
            <div className="triangle"></div>
          </div>
          <div id="result" className="mt-4 text-center"></div>
        </div>
      </div>
    </div>
  );
}

export default BMICalculator;
