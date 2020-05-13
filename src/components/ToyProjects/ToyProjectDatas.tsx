import reactris from "src/images/reactris.png";
import mongobook from "src/images/mongobook.png";

const ProjectDatas = [
  {
    projectName: "Reactris",
    date: "2020.04.10 ~ 21",
    projectDesc: [
      "React로 만든 Tetris Webapp",
      "FE : 테트리스 게임 - github page",
    ],
    url: "https://limjongsoo.github.io/reactris/",
    image: reactris,
    git: 'https://github.com/LIMJONGSOO/reactris',
    figma: 'https://www.figma.com/file/dhOKFu05fzklMjIJBXcU1s/Reactris?node-id=0%3A1',
  },
  {
    projectName: "MongoBook",
    date: "2020.04.22 ~ 05.13",
    projectDesc: [
      "MongoDB를 이용한 BookMark Webapp",
      "FE : bookmark 조회, 등록 관리 - github page",
      "BE : mongodb crud api, crawler - heroku",
    ],
    url: "https://limjongsoo.github.io/mongobook/",
    image: mongobook,
    git: 'https://github.com/LIMJONGSOO/mongobook',
    figma: 'https://www.figma.com/file/eduKIeQJv1y7CBTOKQDzlQ/MongoBookMark?node-id=0%3A1',
  },
];

export default ProjectDatas;
