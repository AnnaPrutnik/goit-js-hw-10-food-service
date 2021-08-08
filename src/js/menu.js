import refs from './refs/refs'
import { theme, KEY } from './refs/theme';
import menuItems from './refs/menu.json';
import handleChangeTheme from './handleChangeTheme';
import menuTemplate from '../templates/menu-template.hbs';



const markup = menuTemplate(menuItems);
refs.list.insertAdjacentHTML('beforeend', markup);
const currentTheme = localStorage.getItem(KEY) ? localStorage.getItem(KEY) : theme.LIGHT;
refs.body.classList.add(currentTheme);
localStorage.setItem(KEY, currentTheme);
if (currentTheme === theme.DARK) {
    refs.checkbox.checked = true;
}

refs.checkbox.addEventListener('change', handleChangeTheme);