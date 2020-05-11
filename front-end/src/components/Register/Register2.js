import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import AgeRanger from "../AgeRanger";

const Register2 = (props) => {
  const [ages, setAges] = useState([18, 90]);

  const [gender, setGender] = useState([false, false]);

  const endSecondStep = (evt) => {
    evt.preventDefault();
    if (gender && (gender[0] || gender[1])) {
      const payload = {
        lkfAgeMin: ages[0],
        lkfAgeMax: ages[1],
        lkfGender: gender,
      };
      console.log("payload", payload);
      if (props.user)
        fetch(`http://localhost:3001/users/update?userid=${props.user._id}`, {
          method: "POST",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          },

          body: JSON.stringify(payload),
        })
          .then((res) => {
            if (res.status && res.status === 200) return res.json();
          })
          .then((data) => {
            console.log("data", data);
            props.changeUserData(payload);
            props.changePage3();
          });
    }
  };

  return (
    <div className='Register'>
      <div className='container'>
        <div className='col-3'></div>
        <div className='col-6 register-content'>
          <h2>Complete your profile</h2>
          <p>
            Now lets add information that your better half would like to know
          </p>
          <form
            onSubmit={endSecondStep}
            className='row'
            style={{ marginLeft: "5%", marginRight: "5%" }}
          >
            <div className='form-group gender col-md-6'>
              <label>Looking for</label>
              <div class='custom-control custom-checkbox custom-control-inline'>
                <input
                  onChange={() => setGender([!gender[0], gender[1]])}
                  type='checkbox'
                  id='customCheckInline1'
                  name='customCheckInline1'
                  class='custom-control-input'
                />
                <label class='custom-control-label' for='customCheckInline1'>
                  Women{" "}
                </label>
              </div>
              <div class='custom-control custom-checkbox custom-control-inline'>
                <input
                  onChange={() => setGender([gender[0], !gender[1]])}
                  type='checkbox'
                  id='customCheckInline2'
                  name='customCheckInline2'
                  class='custom-control-input'
                />
                <label class='custom-control-label' for='customCheckInline2'>
                  Men{" "}
                </label>
              </div>
            </div>
            <div className='form-group col-md-6'>
              <label>
                Age
                <AgeRanger ages={ages} setAges={setAges} />
              </label>
            </div>
            <div className='row'>
              <div className='col-10'></div>
              <div className='col-2'>
                {" "}
                <button type='submit'>Next</button>
              </div>
            </div>
          </form>
        </div>
        <div className='col-3'></div>
      </div>
    </div>
  );
};

export default Register2;
