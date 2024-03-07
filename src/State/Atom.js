import { atom } from "recoil";

export const dataState = atom({
    key: "todoListState",
    default: [],
  });