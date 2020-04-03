import React from 'react';
import styled from 'styled-components';
import './Projects.scss';
import angular from 'src/images/Angular.png';
import less from 'src/images/less.png';
import swagger from 'src/images/swagger.png';
import react from 'src/images/React.png';
import typescript from 'src/images/Typescript.png';
import javascript from 'src/images/js.png';
import jquery from 'src/images/jQuery.png';
import jsp from 'src/images/JSP.png';
import spring from 'src/images/Spring.png';
import java from 'src/images/JAVA.png';
import html from 'src/images/HTML.png';
import css from 'src/images/CSS.png';
import git from 'src/images/git.png';
import svn from 'src/images/SVN.png';
import maven from 'src/images/maven.png';
import oracle from 'src/images/oracle.png';
import db2 from 'src/images/oracle.png';
import android from 'src/images/android.png';
import phonegap from 'src/images/Phonegap.png';

const ProjectsContainer = styled.nav`
    text-align: center;
    min-height: 300px;
    margin: 150px 30px 30px 30px;
    box-shadow: 0 2px 0 0 #f5f5f5;
`;
function Projects() {
    const projectList = [
        {
            projectName: '[대한항공] 홈페이지 개편',
            startDate: '2020.01',
            endDate: '',
            projectDesc: '대한항공 홈페이지(예약발권시스템) 개편',
            myTasklist: [
                '프론트엔드(여정검색, 항공편선택, 여정변경) 개발',
                '달력 공통 컴포넌트 개발'
            ],
            skills: [
                angular,
                typescript,
                html,
                less,
                git,
                swagger,
            ]
        },
        {
            projectName: '[플라이강원] 비행기록시스템',
            startDate: '2019.08',
            endDate: '2019.12',
            projectDesc: '신규 항공사 플라이강원의 비행기록시스템 개발',
            myTasklist: [
                '비행기록 로그지 정보 관리화면 개발',
                '비행수당정보 입력 및 비행시간 및 비행수당 계산 기능 개발'
            ],
            skills: [
                spring,
                maven,
                javascript,
                jsp,
                jquery,
                html,
                css,
                oracle,
                svn,
            ]
        },
        {
            projectName: '[제주항공] 예약발권 시스템 리뉴얼',
            startDate: '2019.03',
            endDate: '2019.07',
            projectDesc: '예약발권 시스템 고도화 및 전자상거래 솔루션 하이브리스 도입',
            myTasklist: [
                'SITA 웹서비스 인터페이스를  하이브리스 웹서비스로 변경',
                '예약변경 기능, 탑승객 정보 조회, 운임정보 조회'
            ],
            skills: [
                spring,
                maven,
                javascript,
                jsp,
                jquery,
                html,
                css,
                oracle,
                svn,
            ]
        },
        {
            projectName: '[아시아나항공] IUP 부가서비스 판매 기능 개발',
            startDate: '2018.09',
            endDate: '2019.02',
            projectDesc: '아시아나 항공의 IUP 부가서비스 판매기능 개발 (IUP-좌석업그레이드)',
            myTasklist: [
                'PC/MOBILE WEB IUP 부가서비스구매 기능 개발',
                'GDS(아마데우스) 웹 서비스 통신',
                'IUP 부가서비스 구매 화면 개발',
                '아마데우스시스템을 통해 좌석 배정 및 PNR REMARK정보 추가'
            ],
            skills: [
                spring,
                maven,
                javascript,
                jsp,
                jquery,
                html,
                css,
                oracle,
                svn,
            ]
        },
        {
            projectName: '[아시아나항공] 홈페이지 개편',
            startDate: '2017.08',
            endDate: '2018.08',
            projectDesc: '아시아나항공 홈페이지 개편, 예매/부가 서비스 고도화, PC,모바일 WEB, APP 평균 30%의 속도 향상 및 안정성 개선',
            myTasklist: [
                'PC/MOBILE WEB 항공권 예약 서비스 개발, 부가서비스(특별기내식) 신청 기능 웹 페이지 개발',
                '특별기내식 신청 기능의 미들웨어 서버의 RESTFul 웹 서비스 개발'
            ],
            skills: [
                spring,
                maven,
                javascript,
                jsp,
                jquery,
                html,
                css,
                oracle,
                svn,
            ]
        },
        {
            projectName: '[제주항공] 여행사 부가서비스 구축',
            startDate: '2017.03',
            endDate: '2017.07',
            projectDesc: '제주항공 여행사우대사이트에서 부가서비스 구매 서비스 구현',
            myTasklist: [
                'PC/MOBILE WEB 부가서비스 환불 웹 페이지 및 기능 개발',
                '환불처리 RESTFul JSON 웹 서비스를 호출하는 Back End 개발'
            ],
            skills: [
                spring,
                maven,
                javascript,
                jsp,
                jquery,
                html,
                css,
                db2,
                svn,
            ]
        },
        {
            projectName: '[아시아나항공] 이륙성능자료 전송시스템 구축',
            startDate: '2016.09',
            endDate: '2017.02',
            projectDesc: '오프라인으로 작업하던 이륙성능자료 관리를 온라인화, 이륙성능자료 계산 속도와 정확성 향상',
            myTasklist: [
                '이륙성능자료 전송 기능 관리자 웹 페이지 개발',
                '항공기로 전송하기 위해 ActiveMQ 서버로 이륙성능자료 전송 Back End 개발'
            ],
            skills: [
                spring,
                maven,
                javascript,
                jsp,
                jquery,
                html,
                css,
                oracle,
                svn,
            ]
        },
        {
            projectName: '[아시아나항공 / 아시아나에어포트] WMS 통합제한서',
            startDate: '2016.08',
            endDate: '2016.09',
            projectDesc: '아시아나 Warehouse Manangement System 제안서 작업',
            myTasklist: [
                '항공기 화물을 온라인 관리시스템 Warehouse Manager System 통합 제한서 작업'
            ],
            skills: []
        },
        {
            projectName: '[제주항공] 인터넷부킹 고도화',
            startDate: '2016.04',
            endDate: '2016.07',
            projectDesc: '제주항공 홈페이지 항공권 예약서비스 고도화',
            myTasklist: [
                'UX 설계에 따른 HTML, JavaScript, JSP 을 이용하여 Front End 개발',
                'RESTFul JSON 웹 서비스를 호출하는 Back End 개발'
            ],
            skills: [
                spring,
                maven,
                javascript,
                jsp,
                jquery,
                html,
                css,
                db2,
                svn,
            ]
        },
        {
            projectName: '[제주항공] 사전수하물 부가서비스 구현',
            startDate: '2016.03',
            endDate: '2016.04',
            projectDesc: '제주항공 홈페이지 사전수하물 부가서비스 구현',
            myTasklist: [
                '사전수하물 구매 웹 페이지 개발',
                'SOAP 웹 서비스 호출하는 미들웨어 서버 RESTFul JSON 웹 서비스 개발'
            ],
            skills: [
                spring,
                maven,
                javascript,
                jsp,
                jquery,
                html,
                css,
                db2,
                svn,
            ]
        },
        {
            projectName: '[아시아나항공] 홈페이지 미국장차법 구축',
            startDate: '2015.07',
            endDate: '2016.02',
            projectDesc: '아시아나항공 홈페이지 미국 장애인차별금지법에 준수하는 웹 접근성을 제공하도록 개편',
            myTasklist: [
                '장차법에 준수하는 웹 접근성을 제공하도록 웹 페이지 수정'
            ],
            skills: [
                spring,
                maven,
                javascript,
                jsp,
                jquery,
                html,
                css,
                oracle,
                svn,
            ]
        },
        {
            projectName: '[제주항공] 기업우대 서비스 구축',
            startDate: '2015.04',
            endDate: '2015.06',
            projectDesc: '제주항공 기업회원을 추가, 기업별로 할인혜택을 제공하는 서비스 구축, 기업우대 서비스 관리자 페이지 구축',
            myTasklist: [
                '기업회원 관리하는 웹 페이지 개발(사내시스템)'
            ],
            skills: [
                spring,
                maven,
                javascript,
                jsp,
                jquery,
                html,
                css,
                db2,
                svn,
            ]
        },
        {
            projectName: '[제주항공] AUTH 관리시스템 구축',
            startDate: '2015.01',
            endDate: '2015.03',
            projectDesc: '제주항공 여행사우대사이트에서 AUTH(여행사에서 운임규정 관련 요청) 신청 서비스 구현, AUTH 관리자 서비스 구현',
            myTasklist: [
                '데이터(AUTH)를 조회하는 관리자 웹 페이지 개발'
            ],
            skills: [
                spring,
                maven,
                javascript,
                jsp,
                jquery,
                html,
                css,
                db2,
                svn,
            ]
        },
        {
            projectName: '[제주항공] SmartDoc',
            startDate: '2014.03',
            endDate: '2014.09',
            projectDesc: '공공데이터 포털로 생활지수 정보 제공, 근처 응급실 위치정보 제공, 자가진단 서비를 제공하는 하이브리드 앱 개발',
            myTasklist: [
                '공공데이터 포털 API로 생활지수 정보 조회, 응급실 위치정보 제공 서비스 하이브리드 앱 개발'
            ],
            skills: [
                android,
                phonegap,
            ]
        },
        {
            projectName: '[제주항공] 스마트 디바이스 개발',
            startDate: '2013.09',
            endDate: '2013.12',
            projectDesc: '압력센서를 장착한 스마트 슈즈 제작, 압력정보로 걸음걸이를 분석하는 앱(WalkChecker) 개발',
            myTasklist: [
                '스마트 슈즈와 블루투스 통신 개발 하여 실시간 걸음걸이 압력정보로 분석하는 앱 개발',
                '실시간 걸음걸이 압력정보로 데이터화하여 제공하는 앱 개발'
            ],
            skills: [
                android
            ]
        },
    ];

    
  return (
    <ProjectsContainer>
        <div id="projects" className="background-alt">
            <h2 className="heading">Projects</h2>
            <div className="container">
                <div className="projects">
                    <table className="project-list-table">
                        <colgroup>
                            <col width="50px"></col>
                            <col width="auto"></col>
                        </colgroup>
                        <tbody>
                            <tr className="project-title">
                                <td rowSpan={projectList.length + 1}  className="graph">
                                    <div className="graph-line"></div>
                                </td>
                                <td></td>
                            </tr>
                            {projectList.map((project, i) => (
                                <tr>
                                    <td>
                                        <div className="project">
                                            <div className="circle"></div>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td><h3>{project.projectName} <span>({project.startDate} ~ {project.endDate})</span></h3></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div>
                                                                <ul className="projectInfo">
                                                                    <li>프로젝트 설명 : {project.projectDesc}</li>
                                                                    <li>
                                                                        담당업무<br />
                                                                        {project.myTasklist.map((task) => (
                                                                            <div>{task}</div>
                                                                        ))}
                                                                    </li>
                                                                    {project.skills.length > 0 &&
                                                                        <li>
                                                                            {project.skills.map((skill, j) => (
                                                                                <img src={skill} alt=""></img>
                                                                            ))}
                                                                        </li>
                                                                    }
                                                                </ul>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </ProjectsContainer>
  );
}

export default Projects;