import {useState} from 'react';
import Cookies from 'js-cookie';

export const useCookies = ({key}) => {
 const initialCookie = Cookies.get(key);
 const [cookie, setStateCookie] = useState(initialCookie);

 const getCookie = () => Cookies.get(key);
 const setCookie = (value) => Cookies.get(key, value);

 return [cookie, setCookie];
};
