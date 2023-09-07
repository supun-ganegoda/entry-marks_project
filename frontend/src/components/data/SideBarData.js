import { IoIosPaper } from "react-icons/io";

export const SideBarData = [
  {
    title: "Details of Location",
    onclick: "displayChild",
    icon: <IoIosPaper />,
    cName: "sidebar-text",
  },
  {
    title: "Details of Applicant",
    path: "displayApplicant",
    icon: <IoIosPaper />,
    cName: "sidebar-text",
  },
  {
    title: "Details of School",
    path: "SchoolDetails",
    icon: <IoIosPaper />,
    cName: "sidebar-text",
  },
  {
    title: "Details on other Schools",
    path: "/other-schools",
    icon: <IoIosPaper />,
    cName: "sidebar-text",
  },
  {
    title: "Details on Electorial List",
    path: "/electorial",
    icon: <IoIosPaper />,
    cName: "sidebar-text",
  },
];
