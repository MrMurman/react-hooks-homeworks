import { ReactElement } from "react";
import { HomeWork1 } from "./pages/HomeWork1/HomeWork1";
import { HomeWork2 } from "./pages/HomeWork2/HomeWork2";
import { HomeWork3 } from "./pages/HomeWork3/HomeWork3";

interface IRoute {
  title: string;
  description?: string;
  element: ReactElement;
}

export const routesConfig: Record<string, IRoute> = {
  "/homework1": {
    title: "Домашнее задание №1: Игральная кость",
    element: <HomeWork1 />,
  },
  "/homework2": {
    title: "Домашнее задание №2: Виджет для скролла",
    element: <HomeWork2 />,
  },
  "/homework3": {
    title: "Домашнее задание №3: Сортируемая таблица",
    element: <HomeWork3 />,
  },
  // "/homework4": {
  //   title: "Домашнее задание №2: Виджет для скролла",
  //   element: <HomeWork2 />,
  // },"/homework5": {
  //   title: "Домашнее задание №2: Виджет для скролла",
  //   element: <HomeWork2 />,
  // },"/homework6": {
  //   title: "Домашнее задание №2: Виджет для скролла",
  //   element: <HomeWork2 />,
  // },"/homework7": {
  //   title: "Домашнее задание №2: Виджет для скролла",
  //   element: <HomeWork2 />,
  // },"/homework8": {
  //   title: "Домашнее задание №2: Виджет для скролла",
  //   element: <HomeWork2 />,
  // },"/homework9": {
  //   title: "Домашнее задание №2: Виджет для скролла",
  //   element: <HomeWork2 />,
  // },"/homework10": {
  //   title: "Домашнее задание №2: Виджет для скролла",
  //   element: <HomeWork2 />,
  // },"/homework11": {
  //   title: "Домашнее задание №2: Виджет для скролла",
  //   element: <HomeWork2 />,
  // },"/homework12": {
  //   title: "Домашнее задание №2: Виджет для скролла",
  //   element: <HomeWork2 />,
  // },"/homework13": {
  //   title: "Домашнее задание №2: Виджет для скролла",
  //   element: <HomeWork2 />,
  // },"/homework14": {
  //   title: "Домашнее задание №2: Виджет для скролла",
  //   element: <HomeWork2 />,
  // },"/homework15": {
  //   title: "Домашнее задание №2: Виджет для скролла",
  //   element: <HomeWork2 />,
  // },"/homework16": {
  //   title: "Домашнее задание №2: Виджет для скролла",
  //   element: <HomeWork2 />,
  // },"/homework17": {
  //   title: "Домашнее задание №2: Виджет для скролла",
  //   element: <HomeWork2 />,
  // },
};

export const routes = Object.keys(routesConfig);
