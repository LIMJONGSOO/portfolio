import reactris from "src/images/reactris.png";
import mongobook from "src/images/mongobook.png";

const ProjectDatas = [
  {
    projectName: "Reactris",
    date: "2020.04.10 ~ 21",
    projectDesc: [
      "React로 만든 Tetris Webapp",
      "FE : 테트리스 게임 (github page)",
      "IPhone8 Frame 기준",
    ],
    url: "https://limjongsoo.github.io/reactris/",
    image: reactris,
  },
  {
    projectName: "MongoBook",
    date: "2020.04.22 ~ 05.13",
    projectDesc: [
      "MongoDB를 이용한 BookMark Webapp",
      "FE : bookmark 조회, 등록 관리 (github page)",
      "BE : mongodb crud api, crawler (heroku)",
      "IPhone8 Frame 기준",
    ],
    url: "https://limjongsoo.github.io/mongobook/",
    image: mongobook,
  },
];

export default ProjectDatas;
