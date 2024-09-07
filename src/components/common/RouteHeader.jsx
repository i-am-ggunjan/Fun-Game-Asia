import React from 'react'
import { Color } from '../../assets/color'
import { FaBars } from "react-icons/fa";
import * as CommonActions from "../../redux/actions/commonAction"
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const RouteHeader = ({ title }) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const path = location?.pathname?.split('/')[1].split('')[0]?.toUpperCase() + location?.pathname?.split('/')[1].split('').filter((value, index) => index != 0).join('')
    const { isSidebarOpen } = useSelector(state => state?.commonReducer);

    return (
        <div style={{ padding: "3px 5px 10px 5px", display: "flex", alignItems: "center", gap: "10px" }}>
            <FaBars onClick={() => dispatch(CommonActions.setIsSidebarOpne(!isSidebarOpen))} style={{ height: "40px", cursor: "pointer" }} />
            <div style={{ fontWeight: "500", fontSize: "18px" }}>{path} / <span style={{ color: Color.primary }}>{title}</span></div>
        </div>
    )
}

export default RouteHeader;