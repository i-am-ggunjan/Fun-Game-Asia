import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, TextField } from '@mui/material';
import { Color } from '../../../assets/color';
import { DeleteSvg, EditSvg } from '../../../assets/svg';
import RouteHeader from '../../../components/common/RouteHeader';
import DatatableWithSearch from '../../../components/datatable/DatatableWithSearch';
import DatatableHeading from '../../../components/heading/DatatableHeading';
import * as MasterActions from '../../../redux/actions/masterAction';

const ItemPacking = () => {
    const [mode, setMode] = useState('Add');
    const dispatch = useDispatch();
    const { itemPackingData } = useSelector(state => state?.masterReducer);

    const [inputFieldDetail, setInputFieldDetail] = useState({ name: '' });
    const [inputFieldError, setInputFieldError] = useState({});

    //* Handle Input Field : Error
    const handleInputFieldError = (input, value) => {
        setInputFieldError((prev) => ({ ...prev, [input]: value }));
    }

    //* Handle Input Field : Data
    const handleInputField = (e) => {
        const { name, value } = e.target;
        setInputFieldDetail({ ...inputFieldDetail, [name]: value });
    };

    //* Handle Reset 
    const handleReset = () => {
        setInputFieldDetail({ name: '' });
        setMode('Add');
    }

    //* Handle Edit
    const handleEdit = (data) => {
        setInputFieldDetail({ name: data?.name, id: data?._id });
        setMode('Edit');
    }

    //! Handle Submit : Create | Edit
    const handleSubmit = () => {
        console.log({ ...inputFieldDetail });

        if (mode == 'Edit') {
            handleReset()
            const payload = {
                id: inputFieldDetail?.id,
                data: {
                    name: inputFieldDetail?.name,
                    description: 'description'
                },
                onComplete: () => handleReset()
            }

            //! Dispatching API For Update Sale Area
            dispatch(MasterActions.updateItemPacking(payload));

        } else {
            const payload = {
                data: {
                    name: inputFieldDetail?.name,
                    description: 'description'
                },
                onComplete: () => handleReset()
            }
            console.log('Payload ::', payload);

            //! Dispatching API For Create Sale Area
            dispatch(MasterActions.createItemPacking(payload));
        }
    }

    //* Datatable Columns
    const columns = [
        { name: 'S.No.', selector: row => itemPackingData?.indexOf(row) + 1 },
        { name: 'Name', selector: row => row?.name },
        {
            name: 'Action',
            cell: row => (
                <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                    <div onClick={() => handleEdit(row)} style={{ cursor: "pointer" }}><EditSvg /></div>
                    <div onClick={() => dispatch(MasterActions.deleteItemPacking({ id: row?._id }))} style={{ cursor: "pointer" }}><DeleteSvg /></div>
                </div>
            ),
            right: true
        },
    ];

    useEffect(() => {
        //! Dispatching API For Getting Packing
        dispatch(MasterActions.getItemPacking());
    }, []);

    return (
        <div style={{ padding: "10px" }}>
            <RouteHeader title={'Packing'} />

            <div style={{ backgroundColor: Color.white, padding: "20px", borderRadius: "10px" }}>
                <Grid container spacing={2} sx={{ marginBottom: "40px", alignItems: "center" }}>
                    <Grid item lg={12} sm={12} md={12} xs={12}>
                        <TextField label="Name" variant="outlined" fullWidth
                            name="name"
                            value={inputFieldDetail?.name}
                            onChange={handleInputField}
                            error={inputFieldError.name ? true : false}
                            helperText={inputFieldError.name}
                            onFocus={() => handleInputFieldError("name", null)}
                        />
                    </Grid>

                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Grid container sx={{ justifyContent: "flex-end" }}>
                            <div onClick={handleSubmit} style={{ fontWeight: "500", backgroundColor: Color.primary, color: Color.white, padding: "5px 20px", borderRadius: "30px", cursor: "pointer", fontSize: "15px" }}>{mode}</div>
                        </Grid>
                    </Grid>
                </Grid>

                <div style={{ backgroundColor: Color.white, padding: "20px", borderRadius: "10px", boxShadow: "1px 1px 5px grey" }}>
                    <DatatableHeading title={'Packing'} data={itemPackingData} />
                    <DatatableWithSearch data={itemPackingData} columns={columns} />
                </div>
            </div>
        </div>
    )
}

export default ItemPacking;