import React from 'react';

function Footer() {
  return (
    <div className="footer">
        <footer>
            <div>
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
    </div>
  );
}

export default Footer;
