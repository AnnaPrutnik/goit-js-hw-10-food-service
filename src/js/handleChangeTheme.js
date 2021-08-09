import refs from "./refs/refs";
import { theme, KEY } from './refs/theme';

export default function handleChangeTheme() {
    if (refs.body.classList.contains(theme.LIGHT)) {
        localStorage.setItem(KEY, theme.DARK);
    } else {
        localStorage.setItem(KEY, theme.LIGHT);
    }
    refs.body.classList.toggle(theme.LIGHT);
    refs.body.classList.toggle(theme.DARK);
    
}