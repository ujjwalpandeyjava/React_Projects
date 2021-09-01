import React, { Fragment } from 'react'
import HeaderCss from './Header.module.css'

const Header = () => {
    return (
        <Fragment>
            <div className={[HeaderCss.menu, HeaderCss.fixed].join(' ')}>
                <div className={[HeaderCss.center, "container"].join(' ')}>
                    <h1 className={HeaderCss.center}> Contact Manager </h1>
                </div>
            </div>
        </Fragment >
    )
}

export default Header