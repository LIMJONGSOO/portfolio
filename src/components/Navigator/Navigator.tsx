import React from 'react';
import styled from 'styled-components';
import './Navigator.scss';
import logo from 'src/images/logo.png';

const NavigationContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  align-items: stretch;
  display: flex;
  background-color: #fff;
  padding: 1.2rem 0;
  z-index: 1;
  box-shadow: 0 2px 0 0 #f5f5f5;
  min-height: 3.25rem;
  background-color: white;
`;

const NavigationWrapper = styled.div`
  position: relative;
  align-items: stretch;
  display: flex;
  margin: 0 auto;
  padding: 0 11px;
  min-height: 3.25rem;
  width: 100%;
`;

const NavigationLogo = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 10px;
`;

const NavigationMenu = styled.div`
  align-items: stretch;
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  box-shadow: none;
  padding: 0.5rem 0;
`;

const NavigationEnd = styled.div`
  align-items: stretch;
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
`;

const SocialContainer = styled.div`
  position: relative;
  align-items: center;
  display: block;
  justify-content: center;
  line-height: 1.5;
  padding: 0.5rem 0.75rem;
`;

const SocialButton = styled.i`
  background-color: transparent;
  border-radius: 100%;
  color: rgba(0, 0, 0, 0.5);
  transition: 0.5s ease;
  font-size: 1.5rem;
  padding: 8px;
  margin: 0 5px;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

export default class Naigator extends React.Component {
    public render() {
        return (
            <NavigationContainer>
                <NavigationWrapper>
                  <NavigationLogo>
                    <img className="logo" src={logo}></img>
                  </NavigationLogo>
                  <NavigationMenu>
                    <NavigationEnd>
                      <SocialContainer>
                        <a target="_blank">
                          <SocialButton className="fab fa-linkedin-in">
                              <svg height="50" width="50" viewBox="0 0 25 25">
                                <path fill="#3a3934" d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.869 5.903l3.114 4.567-.975.665-3.115-4.567.976-.665zm-2.812 2.585l4.84 2.838-.6 1.017-4.842-2.838.602-1.017zm-1.276 2.724l5.413 1.521-.291 1.077-5.428-1.458.306-1.14zm-.588 2.461l5.687.569-.103 1.12-5.691-.513.107-1.176zm-.169 2.16h5.835v1.167h-5.835v-1.167zm7.976 3.167h-10v-6h1v5h8v-5h1v6zm.195-8.602l-.945-5.446 1.162-.202.947 5.446-1.164.202z"></path>
                              </svg>
                          </SocialButton>
                        </a>
                        <a target="_blank">
                          <SocialButton className="fab fa-linkedin-in">
                              <svg height="50" width="50" viewBox="0 0 25 25">
                                <path fill="#3a3934" d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"></path>
                              </svg>
                          </SocialButton>
                        </a>
                        <a target="_blank">
                          <SocialButton className="fab fa-github">
                            <svg height="50" width="50" viewBox="0 0 16 16">
                              <path fill="#3a3934" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                            </svg>
                          </SocialButton>
                        </a>
                        <a target="_blank">
                          <SocialButton className="fab fa-youtube">
                            <svg height="50" width="50" viewBox="0 0 24 24">
                              <path fill="#3a3934" d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"></path>
                            </svg>
                          </SocialButton>
                        </a>
                      </SocialContainer>
                    </NavigationEnd>
                  </NavigationMenu>
                </NavigationWrapper>
            </NavigationContainer>
        );
    }
}

