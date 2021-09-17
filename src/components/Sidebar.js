import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'
import { sidebarUserData } from '../sidebarData'

const Sidebar = () => {
    const location = useLocation();
    const [active, setActive] = useState(null);
    const {userInfo} = useSelector(state => state.userLogin);

    useEffect(() => {
        setActive(location?.pathname);
    },[location?.pathname])

    return (
        <>
            <div className="text-center">
                <img className='user-avater' src={userInfo?.image} alt={userInfo?.name} />
                <h5>{userInfo?.name}</h5>
                <p>{userInfo?.email}</p>
            </div>
            <div className='sidebar'>
                {
                    sidebarUserData?.map((item) =>
                        <Link
                            to={`${item?.path}`}
                            key={item?.title}
                            onClick={() => setActive(item?.path)}
                        >
                            <div
                                className={active === item?.path ? 'item active-item' : 'item'}>
                                {item?.icon}
                                <span>{item?.title}</span>
                            </div>
                        </Link>
                    )
                }
            </div>
        </>
    )
}

export default Sidebar
