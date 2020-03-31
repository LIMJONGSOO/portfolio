import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.nav`
    text-align: center;
    min-height: 90vh;
    padding: 150px 30px 30px 30px;
    box-shadow: 0 2px 0 0 #f5f5f5;
`;

class Main extends React.Component {

    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            
        }
    }

    public render() {
        return (
            <MainContainer>
                <div>
                    <table>
                        <tbody>
                        </tbody>
                    </table>
                </div>
                <div>
                    <h1>임종수</h1>
                    <h2>Web Developer</h2>
                    <a href="#" className="btn-rounded-white">Download Resume</a>
                </div>
            </MainContainer>
          );
    }
}

export default Main;
