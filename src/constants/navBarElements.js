import Icons from "../images/iconsSmall";
import ROUTE from "./routes";

const navBarElements = [
  {
    id: 1,
    path: ROUTE.NEWS_PAGE,
    pageName: "NEWS",
    icon: Icons.faNewspaper,
  },
  {
    id: 2,
    path: ROUTE.MY_POST,
    pageName: "MY POST",
    icon: Icons.faStickyNote,
  },
  {
    id: 3,
    path: ROUTE.PROFILE,
    pageName: "PROFILE",
    icon: Icons.faUser,
  },
];

export default navBarElements;
