import React, {Component} from 'react';
import './signup.css';
export default class SignUp extends Component {
    render() {
      return (
<div className="_2QfC02">
  <button className="_2KpZ6l _2doB4z">✕</button>
  <div className="_2MlkI1">
    <div className="_3wFoIb row">
      <div className="_3oBhRa col col-2-5 _4H6HH5">
        <span className="_36KMOx"><span>Looks like you're new here!</span></span>
        <p className="_1-pxlW">
          <span>Sign up with your mobile number to get started</span>
        </p>
      </div>
      <div className="_36HLxm col col-3-5">
        <div>
          <form>
            <div className="IiD88i _351hSN">
              <input type="text" maxLength={10} autoComplete="off" className="_2IX_2- VJZDxU" /><span className="_36T8XR" /><label className="_1fqY3P"><span>Enter Mobile number</span></label>
            </div>
            <div className="_1Ijv5h">
              By continuing, you agree to
              <a className="_2ARnXM" target="_blank" href="/pages/terms">Terms of Use</a>
              and
              <a className="_2ARnXM" target="_blank" href="/pages/privacypolicy">Privacy Policy</a>.
            </div>
            <div className="_1D1L_j">
              <button className="_2KpZ6l _2HKlqd _3AWRsL" type="submit">
                <div className="_2YsvKq o8qAfl">

                </div>
                <span>CONTINUE</span></button><a className="_2KpZ6l _2HKlqd _3NgS1a" href="/account/login?ret=/"><span>Existing User? Log in</span></a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
      )
      }
    }
