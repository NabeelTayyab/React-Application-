import React, { Component } from "react";
import "./login.css";

export default class Login extends Component {
  render() {
    return (
      <div className="_2QfC02">
        <button className="_2KpZ6l _2doB4z">✕</button>
        <div className="_2MlkI1">
          <div className="_3wFoIb row">
            <div className="_3oBhRa col col-2-5 _4H6HH5">
              <span className="_36KMOx">
                <span>Login</span>
              </span>
              <p className="_1-pxlW">
                <span>
                  Get access to your Orders, Wishlist and Recommendations
                </span>
              </p>
            </div>
            <div className="_36HLxm col col-3-5">
              <div>
                <form autoComplete="on">
                  <div className="IiD88i _351hSN">
                    <input
                      type="text"
                      autoComplete="off"
                      className="_2IX_2- VJZDxU"

                    />
                    <span className="_36T8XR" />
                    <label className="_1fqY3P">
                      <span>Enter Email/Mobile number</span>
                    </label>
                  </div>
                  <div className="IiD88i _351hSN">
                    <input
                      type="password"
                      autoComplete="off"
                      className="_2IX_2- _3mctLh VJZDxU"

                    />
                    <span className="_36T8XR" />
                    <label className="_1fqY3P">
                      <span>Enter Password</span>
                    </label>
                    <a className="_2QKxJ- _2_DUc_" tabIndex={-1}  href="/#">
                      <span>Forgot?</span>
                    </a>
                  </div>
                  <div className="_1D1L_j">
                    <button className="_2KpZ6l _2HKlqd _3AWRsL" type="submit">
                      <div className="_2YsvKq o8qAfl">

                      </div>
                      <span>Login</span>
                    </button>
                  </div>
                  <div className="_1k3JO2">
                    <div className="_2XlkPA">OR</div>
                    <button className="_2KpZ6l _2HKlqd _3NgS1a">
                      Request OTP
                    </button>
                  </div>
                  <div className="_1En5li">
                    <a className="_14Me7y" href="/account/login?signup=true">
                      New ? Create an account
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
