import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.nav`
    text-align: center;
    margin: 10px 10px 0 0;
    box-shadow: 0 2px 0 0 #f5f5f5;
`;
function Footer() {
  return (
    <FooterContainer>
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-5 copyright">
                        <p>
                            Copyright &copy; 2020 JONGSOO LIM
                        </p>
                    </div>
                    <div className="col-sm-2 top">
                        <span id="to-top">
                            <i className="fa fa-chevron-up" aria-hidden="true"></i>
                        </span>
                    </div>
                    <div className="col-sm-5 social">
                        <ul>
                            <li>
                                <a href="https://github.com/" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="https://stackoverflow.com/" target="_blank"><i className="fa fa-stack-overflow" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="https://linkedin.com/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="https://plus.google.com/" target="_blank"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </FooterContainer>
  );
}

export default Footer;
