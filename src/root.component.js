import React from 'react';
import "./Header.css"


export default function Root() {

  const handleSubmit = (e) => {
    e.preventDefault();

    const { target: form } = e;
    const input = form?.elements?.something;

    const customEvent = new CustomEvent('message', { detail: input.value });
    window.dispatchEvent(customEvent)
 
    form.reset();
  }


  return (
    <><div class="row m-0">
      <div class="col-md-12 p-0">

        <div class="header-main">
          <div class="wrap pl-0 pr-1">
            <div class="container-item">
              <div class="logo">
                <img class="my-portal-logo" src="https://cdnassets.powell-software.com/cdn/stylesheets/themes/8086/images/logo-my-portal.png?v=1642074603" />
              </div>
              <div class="item-list">
                <div class="wrapper-topnav-standard">
                  <nav class="topnav-standard">
                    <ul class="first-level">
                      <li>
                        <span id="parent">Home</span>
                      </li>
                      <li>
                        <span>MY HR INFOS & TOOLS</span>
                      </li>
                      <li>
                        <span>MY TEAMS & NETWORK</span>

                      </li>
                      <li>
                        <span>SSI FUNCTIONS</span>

                      </li>
                      <li>
                        <span>CORPORATE SUPPORTS</span>

                      </li>
                      <li>
                        <span>HELP</span>
                        <i class="fas fa-sort-down"></i>

                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div class="toggle-container">

              </div>
            </div>
          </div>
        </div>

      </div>
    </div><div class="row m-0">
        <div class="my-portal-banner-container">
          <div class="my-portal-banner"> <a href="/login" className="search">Search</a> <form onSubmit={handleSubmit} action='/login'>
            <input className="search" type="text" name="something" placeholder="Search" />
            <button  className="searchbutton" type="submit">Search</button>
          </form>
          </div>
        </div>

      </div></>
  );
}
