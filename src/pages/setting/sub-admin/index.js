import React, { useState } from 'react';
import { Color } from '../../../assets/color';
import RouteHeader from '../../../components/common/RouteHeader';
import DatatableHeading from '../../../components/heading/DatatableHeading';
import DatatableWithSearch from '../../../components/datatable/DatatableWithSearch';
import { DeleteSvg, EditSvg } from '../../../assets/svg';
import { useNavigate } from 'react-router-dom';

const Subadmin = () => {
    const navigate = useNavigate();
    // const { subAdminData } = useSelector(state => state?.subAdminReducer);
    const [subAdminData, setSubAdminData] = useState([{ name: 'Name', contact: "8564752955", email: "abc@gmail.com", password: "P12345", permission: ['Dashboard', 'Supplier'] }, {}]);

    //* DataTable Columns
    const columns = [
        { name: 'S.No.', selector: row => subAdminData.indexOf(row) + 1, style: { backGroundColor: "#000", paddingLeft: "20px" } },
        { name: 'Name', selector: row => row?.name, },
        { name: 'Email', selector: row => row?.email, },
        { name: 'Phone', selector: row => row?.contact, },
        {
            name: 'Action',
            cell: row => <div style={{ display: "flex", gap: "20px", alignItems: "center" }} >
                <div onClick={() => navigate('/setting/edit-sub-admin', { state: { stateData: row } })} style={{ cursor: "pointer" }}><EditSvg /></div>
                <div style={{ cursor: "pointer" }}><DeleteSvg /></div>
            </div>,
        },
    ]

    return (
        <>
            <div style={{ padding: "10px" }}>
                <RouteHeader title={'Sub Admin'} />

                <div style={{ backgroundColor: Color.white, padding: "20px", borderRadius: "10px" }}>
                    <DatatableHeading title={'Sub Admin'} data={subAdminData} url={'/setting/add-sub-admin'} />

                    <DatatableWithSearch data={subAdminData} columns={columns} />
                </div>
            </div>
        </>
    )
}

export default Subadmin;