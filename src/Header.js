import React from 'react'
import Button from './Button'
import {useLocation} from 'react-router-dom'

const Header = ({title,onAdd,showAdd}) => {
    const location = useLocation()
    return (
            <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && <Button color={showAdd?'black':'green'} text={showAdd?'Close':'Add'} OnClick={onAdd}/>}
            </header>
    )
}

Header.defaulProps ={
    title: 'Task Tracker',
}

export default Header