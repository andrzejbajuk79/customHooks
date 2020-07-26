import {useEffect} from 'react';

export const useMount = (func) => {
 useEffect(() => {
  func();
 }, []); //eslint-disable-line
};
export const useUnMount = (func) => {
 useEffect(() => {
  return () => {
   func();
  };
 });
};
