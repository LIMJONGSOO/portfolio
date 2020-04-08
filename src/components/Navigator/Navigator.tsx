import React, {Component} from 'react';
import './Navigator.scss';
import logo from 'src/images/logo.png';


type navProps = { };
type navState = { 
    upButtonShow:boolean
 };

export default class Naigator extends Component<navProps, navState> {

  componentDidMount() {
    window.addEventListener('scroll', () => {
      this.setState({upButtonShow: window.scrollY === 0 ? false : true});
    });
  }

  constructor(props: any) {
    super(props);
    this.state = {
        upButtonShow: false
    };
  }

  scrollMoveTop() {
    window.scrollTo(0,0);
  }

  public render() {
    return (
      <div className="navigationContainer">
        <div className="navigationWrapper">
          <div className="navigationLogo">
              <img className="logo" src={logo} alt="logo"></img>
          </div>
          <div className="navigationMenu">
            <div className="navigationMenuList">
              <a href="#about">About Me</a> 
              <a href="#skills">Skills</a> 
              <a href="#projects">Projects</a>
            </div>
            <div className="navigationEnd">
              <div className="socialContainer">
                <a target="_blank" className="socialButton">
                  <svg fill="#3a3934" viewBox="0 0 25 25">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.869 5.903l3.114 4.567-.975.665-3.115-4.567.976-.665zm-2.812 2.585l4.84 2.838-.6 1.017-4.842-2.838.602-1.017zm-1.276 2.724l5.413 1.521-.291 1.077-5.428-1.458.306-1.14zm-.588 2.461l5.687.569-.103 1.12-5.691-.513.107-1.176zm-.169 2.16h5.835v1.167h-5.835v-1.167zm7.976 3.167h-10v-6h1v5h8v-5h1v6zm.195-8.602l-.945-5.446 1.162-.202.947 5.446-1.164.202z"></path>
                  </svg>
                </a>
                <a target="_blank" className="socialButton">
                  <svg fill="#3a3934" viewBox="0 0 25 25">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"></path>
                  </svg>
                </a>
                <a target="_blank" className="socialButton">
                  <svg fill="#3a3934" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </a>
                <a target="_blank" className="socialButton">
                  <svg fill="#3a3934" viewBox="0 0 24 24">
                    <path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"></path>
                  </svg>
                </a>
                {/* <a target="_blank">
                  <SocialButton className="fab fa-youtube">
                    <svg viewBox="0 0 48 48">
                      <g transform="translate(0,50) scale(0.05,-0.05)" stroke="none">
                        <path d="M344 819 c-162 -50 -281 -253 -256 -438 64 -468 745 -438 786 35 23 277 -253 487 -530 403z m146 -178 c25 -76 57 -96 98 -62 19 15 43 16 81 1 29 -11 76 -20 103 -20 67 0 45 -32 -32 -47 -45 -9 -69 -30 -89 -78 -31 -74 -94 -137 -181 -181 -33 -16 -77 -49 -98 -72 -78 -86 -100 -19 -32 93 50 83 54 75 -40 103 -115 34 -155 140 -53 142 9 0 13 29 10 65 -6 61 -3 65 56 62 48 -2 66 7 74 37 16 61 76 36 103 -43z"/>
                      </g>
                    </svg>
                  </SocialButton>
                </a> */}
              </div>
            </div>
          </div>
        </div>
        {this.state.upButtonShow && 
          <a href="#" className="upButton" onClick={this.scrollMoveTop}>
            <svg viewBox="0 0 24 24">
              <path fill="#3a3934" d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.58l5.995 5.988-1.416 1.414-4.579-4.574-4.59 4.574-1.416-1.414 6.006-5.988z"></path>
            </svg>
          </a>
        }
      </div>
    );
  }
}

