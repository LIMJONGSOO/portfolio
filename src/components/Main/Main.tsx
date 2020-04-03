import React, { Component } from 'react';
import styled from 'styled-components';
import './Main.scss';
  
const MainContainer = styled.nav`
    text-align: center;
    min-height: 90vh;
    padding: 200px 30px 30px 30px;
    box-shadow: 0 2px 0 0 #f5f5f5;
`;

type MyProps = { };
type MyState = { 
    x:number, 
    y:number, 
    tableArr: Array<Array<string>>,
    yArr: Array<number>,
    nameLocation: Array<{x:number, y:number}>
 };
class Main extends Component<MyProps, MyState> {

    constructor(props: any) {
        super(props);
        this.state = {
            x: Math.floor((window.innerWidth-80)/(window.innerWidth > 400  ? 20 : 10)),
            y: (window.innerWidth > 400  ? 20 : 40),
            tableArr: Array.from(Array(20), () => Array.from(Array(Math.floor((window.innerWidth-80)/(window.innerWidth > 400  ? 20 : 10))), () => 'black')),
            yArr: Array.from(Array(20), () => 0),
            nameLocation: new Array()
        };

        this.state.nameLocation.push({x: this.state.x - 7, y:this.state.y - 11});
        this.state.nameLocation.push({x: this.state.x - 7, y:this.state.y - 10});
        this.state.nameLocation.push({x: this.state.x - 7, y:this.state.y - 9});
        this.state.nameLocation.push({x: this.state.x - 7, y:this.state.y - 8});
        this.state.nameLocation.push({x: this.state.x - 10, y:this.state.y - 8});
        this.state.nameLocation.push({x: this.state.x - 10, y:this.state.y - 7});
        this.state.nameLocation.push({x: this.state.x - 9, y:this.state.y - 7});
        this.state.nameLocation.push({x: this.state.x - 8, y:this.state.y - 7});
        this.state.nameLocation.push({x: this.state.x - 7, y:this.state.y - 7});

        this.state.nameLocation.push({x: this.state.x - 5, y:this.state.y - 11});
        this.state.nameLocation.push({x: this.state.x - 4, y:this.state.y - 11});
        this.state.nameLocation.push({x: this.state.x - 3, y:this.state.y - 11});
        this.state.nameLocation.push({x: this.state.x - 2, y:this.state.y - 11});
        this.state.nameLocation.push({x: this.state.x - 5, y:this.state.y - 10});
        this.state.nameLocation.push({x: this.state.x - 5, y:this.state.y - 9});
        this.state.nameLocation.push({x: this.state.x - 4, y:this.state.y - 9});
        this.state.nameLocation.push({x: this.state.x - 3, y:this.state.y - 9});
        this.state.nameLocation.push({x: this.state.x - 2, y:this.state.y - 9});
        this.state.nameLocation.push({x: this.state.x - 2, y:this.state.y - 8});
        this.state.nameLocation.push({x: this.state.x - 5, y:this.state.y - 7});
        this.state.nameLocation.push({x: this.state.x - 4, y:this.state.y - 7});
        this.state.nameLocation.push({x: this.state.x - 3, y:this.state.y - 7});
        this.state.nameLocation.push({x: this.state.x - 2, y:this.state.y - 7});
        
        this.state.nameLocation.push({x: this.state.x - 13, y:this.state.y - 5});
        this.state.nameLocation.push({x: this.state.x - 13, y:this.state.y - 4});
        this.state.nameLocation.push({x: this.state.x - 13, y:this.state.y - 3});
        this.state.nameLocation.push({x: this.state.x - 13, y:this.state.y - 2});
        this.state.nameLocation.push({x: this.state.x - 13, y:this.state.y - 1});
        this.state.nameLocation.push({x: this.state.x - 12, y:this.state.y - 1});
        this.state.nameLocation.push({x: this.state.x - 11, y:this.state.y - 1});

        this.state.nameLocation.push({x: this.state.x - 9, y:this.state.y - 5});
        this.state.nameLocation.push({x: this.state.x - 8, y:this.state.y - 5});
        this.state.nameLocation.push({x: this.state.x - 7, y:this.state.y - 5});
        this.state.nameLocation.push({x: this.state.x - 8, y:this.state.y - 4});
        this.state.nameLocation.push({x: this.state.x - 8, y:this.state.y - 3});
        this.state.nameLocation.push({x: this.state.x - 8, y:this.state.y - 2});
        this.state.nameLocation.push({x: this.state.x - 9, y:this.state.y - 1});
        this.state.nameLocation.push({x: this.state.x - 8, y:this.state.y - 1});
        this.state.nameLocation.push({x: this.state.x - 7, y:this.state.y - 1});

        this.state.nameLocation.push({x: this.state.x - 5, y:this.state.y - 5});
        this.state.nameLocation.push({x: this.state.x - 4, y:this.state.y - 5});
        this.state.nameLocation.push({x: this.state.x - 3, y:this.state.y - 5});
        this.state.nameLocation.push({x: this.state.x - 2, y:this.state.y - 5});
        this.state.nameLocation.push({x: this.state.x - 1, y:this.state.y - 5});
        this.state.nameLocation.push({x: this.state.x - 5, y:this.state.y - 4});
        this.state.nameLocation.push({x: this.state.x - 3, y:this.state.y - 4});
        this.state.nameLocation.push({x: this.state.x - 1, y:this.state.y - 4});
        this.state.nameLocation.push({x: this.state.x - 5, y:this.state.y - 3});
        this.state.nameLocation.push({x: this.state.x - 3, y:this.state.y - 3});
        this.state.nameLocation.push({x: this.state.x - 1, y:this.state.y - 3});
        this.state.nameLocation.push({x: this.state.x - 5, y:this.state.y - 2});
        this.state.nameLocation.push({x: this.state.x - 3, y:this.state.y - 2});
        this.state.nameLocation.push({x: this.state.x - 1, y:this.state.y - 2});
        this.state.nameLocation.push({x: this.state.x - 5, y:this.state.y - 1});
        this.state.nameLocation.push({x: this.state.x - 3, y:this.state.y - 1});
        this.state.nameLocation.push({x: this.state.x - 1, y:this.state.y - 1});

    }

    drawPuzzle () {
        let stop = true;
        this.state.yArr.map((xCnt, i) => {
            if(xCnt < this.state.x ) stop =false;
        })
        if (!stop) {
            setTimeout(() => {
                const newTableArr = Array.from(Array(this.state.y), () => Array.from(Array(this.state.x), () => 'black'));
                const newYArr = Array.from(Array(this.state.y), () => 0);

                this.state.yArr.map((xCnt, i) => {
                    newYArr[i] = xCnt + Math.ceil(Math.random()*10);
                    
                    this.state.tableArr[i].map((color, j) => {
                        if (newYArr[i] > j) {
                            let color = 'yellow';

                            this.state.nameLocation.map((name, k) => {
                                 if (name.x === j && name.y === i) color = 'black';
                            })
                            newTableArr[i][j] = color;
                        }
                    })
                })
                this.setState({ tableArr: newTableArr, yArr: newYArr });
            }, 100);
        }
    }

    render() {
        this.drawPuzzle ();

        return (
            <MainContainer>
                <div>
                    <table className="puzzle">
                        <tbody>
                            {this.state.tableArr.map((yData) => (
                                <tr>
                                    {yData.map((color) => (
                                       <td className={color}></td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="main">
                    <span>임종수</span>
                    <br />
                    <span>Web Developer</span>
                    <br />
                    <a href="#" className="resume">Download Resume</a>
                </div>
            </MainContainer>
          );
    }
}

export default Main;
