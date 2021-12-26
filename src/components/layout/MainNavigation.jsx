import React from 'react'
import {Link} from 'react-router-dom'
import classes from '../../components/layout/MainNavigation.module.css'

export default function MainNavigation() {
    return (
        <div>
            <header className={classes.header}>
                <div className={classes.logo}>React Meetups</div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>All Meetups</Link>
                        </li>
                        <li>
                            <Link to='/newmeetup'>New Meetup</Link>
                        </li>
                        <li>
                            <Link to='/favourites'>Favourites</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
