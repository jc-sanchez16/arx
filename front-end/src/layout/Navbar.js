import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faComments,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {
  return (
    <div className='Navbar' role='main'>
      <div className='container'>
        <div className='row'>
          <div className='col-6 logo'>
            <a href='/' aria-label='home'>
              <svg
                id='arx-icon'
                data-name='arx-icon'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 300 300'
              >
                <defs></defs>
                <g id='QR6piZ.tif'>
                  <path
                    className='cls-1'
                    d='M257.86,184.68c-1.25,3.65-1.25,7.51-2,11.25a106.24,106.24,0,0,1-25.18,50.38c-15.58,17.51-34.82,29-57.76,33.91a105.49,105.49,0,0,1-67.35-7.16A106.75,106.75,0,0,1,61,235.64a104.7,104.7,0,0,1-17.23-42.4C40.37,173,42.25,153.39,50,134.45A107.16,107.16,0,0,1,92.64,83.58a104.05,104.05,0,0,1,40.68-15.36A108,108,0,0,1,239,113.9a105.66,105.66,0,0,1,17.34,42.37c.53,3.07.45,6.25,1.52,9.23ZM149.68,266.05c49.06-.26,91-38.5,91.44-90.81.4-48.87-38.11-91-90.61-91.49-49.14-.44-91.22,38.32-91.56,90.8C58.63,223.81,97.53,265.09,149.68,266.05Z'
                  />
                  <path
                    className='cls-1'
                    d='M168.69,17.24c4.64,1.9,6.57,5.3,6.28,10.33-.26,4.73,0,9.49-.06,14.24,0,4.38-2.54,7.72-6.76,8.47-1.45.26-1.57.79-1.54,1.93,0,2.16,0,4.32,0,6.48,0,1-.08,1.46-1.39,1.27a104.7,104.7,0,0,0-30.41,0c-1.32.19-1.42-.24-1.4-1.27,0-2.16,0-4.32,0-6.48,0-1.14-.09-1.67-1.55-1.93-4.22-.75-6.74-4.09-6.76-8.47,0-4.75.21-9.51-.06-14.24-.29-5,1.64-8.43,6.28-10.33Z'
                  />
                  <path
                    className='cls-1'
                    d='M68.13,64.07a7.93,7.93,0,0,1,3.78-6.93c5-3,10-6,15.18-8.75,4.1-2.19,8.48-.88,10.93,3.15,2.87,4.68,5.52,9.5,8.34,14.22.68,1.15.36,1.55-.75,2a115.42,115.42,0,0,0-26,15.07c-.88.68-1.41,1-2.13-.28C74.8,77.76,72,73,69.28,68.25A7.59,7.59,0,0,1,68.13,64.07Z'
                  />
                  <path
                    className='cls-1'
                    d='M209.8,47.37a10.55,10.55,0,0,1,4.3,1.54c4.31,2.5,8.64,5,12.93,7.49,5.05,3,6.24,7.37,3.38,12.47-2.53,4.5-5.17,8.92-7.69,13.41-.62,1.09-1,1.57-2.23.6a111.71,111.71,0,0,0-26-15.08c-1.37-.55-1.34-1.07-.67-2.2,2.72-4.58,5.32-9.23,8-13.8A8.64,8.64,0,0,1,209.8,47.37Z'
                  />
                </g>
                <path
                  className='cls-1'
                  d='M150.72,251.45h.36A.23.23,0,0,0,150.72,251.45Z'
                />
                <path
                  className='cls-1'
                  d='M150.72,251.45h0l0,0S150.7,251.46,150.72,251.45Z'
                />
                <path
                  className='cls-1'
                  d='M216,154.51a9.17,9.17,0,0,1-.33-2.14,30.37,30.37,0,0,0-11.93-19.81,34,34,0,0,0-18.15-6.94c-.17,0-.37.06-.49-.13h-6a7.74,7.74,0,0,1-2.14.31c-8.71,1-15.53,5.21-20.79,12.12a73,73,0,0,0-6.38,10.18c-.19.35-.38.7-.58,1.09a3,3,0,0,1-.62-.95A62.81,62.81,0,0,0,139.05,135a28.56,28.56,0,0,0-18.71-8.57,37.54,37.54,0,0,0-16.59,1.92c-11.1,4.22-18.3,11.94-20.9,23.69-.23,1-.31,2.11-.46,3.17,0,.14,0,.32-.15.4v4.68c.15,0,.13.16.13.26.55,8.1,3.15,15.58,6.82,22.74a123.94,123.94,0,0,0,15.15,22.28,317.45,317.45,0,0,0,24.89,26.2C136,238.26,143,244.62,149.94,251l.3.28c-.21.22-.5,0-.68.19h1.14c1.23-1.35,2.4-2.77,3.7-4,9.89-9.61,19.79-19.2,29.11-29.38a198.38,198.38,0,0,0,19.1-23.87,87.8,87.8,0,0,0,10.61-21,53.68,53.68,0,0,0,2.62-12.72c0-.17-.07-.37.14-.48Zm-63,52.8a8.23,8.23,0,0,1-11-6.08c-.44-2,.34-3.8.74-5.64,2.34-10.75,4.75-21.49,7.14-32.23a3.13,3.13,0,0,1,.28-.41c1.54,6.91,3,13.61,4.52,20.32,1.12,5.06,2.25,10.12,3.35,15.19A7.83,7.83,0,0,1,153,207.31Z'
                />
              </svg>
            </a>
          </div>

          <div className='col-6 profile'>
            <a aria-label='meet' href='/meet'>
              <svg
                id='meet-icon'
                data-name='Capa 1'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 264.03 241.78'
              >
                <defs></defs>
                <path
                  class='cls-1'
                  d='M153.39,96.55a47.13,47.13,0,1,0,46.33,48A47.25,47.25,0,0,0,153.39,96.55Zm.57,55.69c-4.72.56-8.74-2.05-9.7-6.62a11.65,11.65,0,0,1,.34-4.71c2.54-11.65,5.15-23.27,7.74-34.9,0-.19.1-.38.16-.57h.24c.64,2.83,1.3,5.66,1.92,8.49q3.17,14.27,6.3,28.52A8.31,8.31,0,0,1,154,152.24Z'
                  transform='translate(-17.98 -29.11)'
                />
                <path
                  class='cls-1'
                  d='M282,126.5c-.33-17.82-6.49-33.58-17.26-47.61-13.12-17.08-30.3-28.8-50-37.06-22.36-9.4-45.75-13.26-69.94-12.66-25.77.64-50.26,6.33-73,18.68C54.72,57.15,40.29,69.48,30,86.24a79.69,79.69,0,0,0-11.81,48.27c2.41,35.09,20.63,60,50.17,77.47,15.92,9.41,33.29,14.92,51.54,17.47,9.09,1.26,18.29,1.76,26.43,2.52,7.7-.44,14.31-.83,20.92-1.15a3.23,3.23,0,0,1,2.15.64c10.34,9.79,22.07,17.66,34.24,24.91,9.15,5.44,18.62,10.23,28.93,13.1a34.32,34.32,0,0,0,7.75,1.41c6,.24,9.58-5.87,6.77-11.2-4-7.65-8.2-15.25-11.89-23.07a48.43,48.43,0,0,1-4.9-18.73,2.41,2.41,0,0,1,1.48-2.52c24.25-13.2,39.19-33.67,46.56-60A100,100,0,0,0,282,126.5ZM179.68,79.55a4.08,4.08,0,0,1,5.45-1.36q4,2.16,7.88,4.55a4.13,4.13,0,0,1,1.55,5.51c-1.48,2.79-3.13,5.49-4.73,8.26-2.48-1.62-4.83-3.29-7.32-4.73s-5-2.61-7.66-4C176.45,85.07,178,82.26,179.68,79.55ZM139.74,66.39a4.05,4.05,0,0,1,4.18-4.23c5.81,0,11.61,0,17.42,0a4,4,0,0,1,4.13,4.15c0,2.81,0,5.63,0,8.44s-1.4,4.31-4.26,4.63v5a54.57,54.57,0,0,0-17.16,0V79.44c-3.06-.48-4.31-1.93-4.31-4.87C139.74,71.84,139.73,69.12,139.74,66.39ZM112.26,82.68q3.84-2.33,7.77-4.46a4.12,4.12,0,0,1,5.55,1.4c1.67,2.68,3.19,5.45,4.66,8l-15,8.7c-1.48-2.59-3.19-5.36-4.67-8.25A4.11,4.11,0,0,1,112.26,82.68Zm51.59,115.69c-2.12.44-4.28.73-6.42,1.09h-9.65c-2.53-.44-5.11-.71-7.59-1.36-22.65-5.93-37.28-20.21-42.11-43.11-4.52-21.43,2.22-39.75,18.78-54.17a52.72,52.72,0,0,1,27.81-12.4,55.83,55.83,0,0,1,19.18,110Z'
                  transform='translate(-17.98 -29.11)'
                />
              </svg>
            </a>
            <a
              aria-label='meet'
              href={
                props.conversations && props.conversations.length
                  ? "/"
                  : "/meet"
              }
            >
              <span>
                {" "}
                <FontAwesomeIcon icon={faComments}></FontAwesomeIcon>
              </span>
            </a>
            <a aria-label='profile' href='/profile'>
              <span>
                <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
              </span>
            </a>
            {props.user ? (
              <a href='http://localhost:3001/auth/logout'>
                <button id='logout'>Logout </button>
              </a>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
