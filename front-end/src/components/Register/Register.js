import React, { useState } from "react";
import Register1 from "./Register1";
import Register2 from "./Register2";
import Register3 from "./Register3";
import Register4 from "./Register4";
import Register5 from "./Register5";

const Register = () => {
  const [page, setPage] = useState(1);

  const changePage1 = () => {
    setPage(1);
  };

  const changePage2 = () => {
    setPage(2);
  };

  const changePage3 = () => {
    setPage(3);
  };

  const changePage4 = () => {
    setPage(4);
  };

  const changePage5 = () => {
    setPage(5);
  };

  return (
    <div className='Register'>
      {page === 1 && <Register1 changePage2={changePage2} />}
      {page === 2 && (
        <Register2 changePage1={changePage1} changePage3={changePage3} />
      )}
      {page === 3 && (
        <Register3 changePage2={changePage2} changePage4={changePage4} />
      )}
      {page === 4 && (
        <Register4 changePage3={changePage3} changePage5={changePage5} />
      )}
      {page === 5 && <Register5 changePage4={changePage4} />}
    </div>
  );
};

export default Register;