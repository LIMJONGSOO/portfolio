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
  z-index: auto;
  box-shadow: 0 2px 0 0 #f5f5f5;
  min-height: 3.25rem;
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
                          <SocialButton className="fab fa-linkedin-in" />
                        </a>
                          <SocialButton className="far fa-envelope"/>
                        <a target="_blank">
                          <SocialButton className="fab fa-github" />
                        </a>
                        <a target="_blank">
                          <SocialButton className="fab fa-youtube" />
                        </a>
                      </SocialContainer>
                    </NavigationEnd>
                  </NavigationMenu>
                </NavigationWrapper>
            </NavigationContainer>
        );
    }
}

