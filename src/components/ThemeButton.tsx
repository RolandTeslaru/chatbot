import React, { FC } from 'react'
import { useTheme} from 'next-themes'

interface Props{
  className?:string
}

const ThemeButton:FC<Props> = (props) => {

    const {systemTheme, theme, setTheme} = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <button 
        onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
        className={props.className ? props.className : ' btn'}
        style={{backgroundColor: currentTheme === 'dark' ? '#000000' : '#ffffff', color: currentTheme === 'dark' ? '#ffffff' : '#000000'}}
    >
        Change Theme
    </button>
  )
}

export default ThemeButton