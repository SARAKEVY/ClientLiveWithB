import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  themeArr: ITheme[] = [light, dark];
  constructor() { }
  onChangeTheme(themeName: string) {
    const theme = this.themeArr.find(item => item.name === themeName);
    if (theme) {
      Object.keys(theme.props).forEach(prop => {
        document.documentElement.style.setProperty(prop, theme.props[prop]);
      });
    }
  }
}
interface ITheme {
  name: string,
  props: any
}
const light: ITheme = {
  name: 'dark',
  props: {
    '--color': 'beige',
    '--bg': '#23242a ',
    '--bg2': '#1c1c1c',
    '--bg3': '#28292d',
    '--bginput': '#8f8f8f',
    '--primary-color': '#45f3ff',
    '--primary-color2': '#03818a',
    // '--primary-color3': '#45f3ff',
    '--shadow': '2px 2px 3px #d39320'
  }
}
const dark: ITheme = {
  name: 'light',
  props: {
    
    '--color': '#878789',
    '--bg': '#c3c9e000',
    '--bg2': ' #e8e8e8',
    '--bg3': '#c3c9e0',
    '--bginput': '#c3c9e0',
    '--primary-color': '#03818a',
    '--primary-color2': '#03818a',
    // '--primary-color3': '#03818a',
    '--shadow': '2px 2px 3px #d39320'
  }

}
