import React, { useEffect, useState } from 'react'
import RouteHeader from '../../../../components/common/RouteHeader';
import { Color } from '../../../../assets/color';
import { Checkbox, FormControlLabel, FormGroup, FormLabel, Grid, TextField } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const AddSubadmin = ({ mode }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const stateData = location?.state?.stateData;

    const dispatch = useDispatch();

    const [subAdminPermission, setSubAdminPermission] = useState([]);
    const [inputFieldDetail, setInputFieldDetail] = useState({ name: stateData ? stateData?.name : '', email: stateData ? stateData?.email : '', contact: stateData ? stateData?.contact : '', password: stateData ? stateData?.password : '' });
    const [inputFieldError, setInputFieldError] = useState({ name: '', email: '', contact: '', password: '', subAdminPermission: '' });

    //* Handle Input Field : Error
    const handleInputFieldError = (input, value) => {
        setInputFieldError((prev) => ({ ...prev, [input]: value }))
    }

    //* Handle Input Field : Data
    const handleInputField = (e) => {
        const { name, value } = e.target;
        setInputFieldDetail({ ...inputFieldDetail, [name]: value });
    };

    //* Handle Sub Admin Permission
    const handleSubAdminPermission = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;

        if (isChecked) {
            setSubAdminPermission([...subAdminPermission, value]);
        } else {
            setSubAdminPermission(subAdminPermission.filter(item => item !== value));
        }
    };

    //! Handle Validation
    const handleValidation = () => {
        let isValid = true;
        const { name, email, contact, password } = inputFieldDetail;

        if (!name) {
            handleInputFieldError("name", "Please Enter Name")
            isValid = false;
        }
        if (!email) {
            handleInputFieldError("email", "Please Enter Email")
            isValid = false;
        }
        if (!contact) {
            handleInputFieldError("contact", "Please Enter contact")
            isValid = false;
        }
        if (!password) {
            handleInputFieldError("password", "Please Enter password")
            isValid = false;
        }
        if (subAdminPermission.length <= 0) {
            handleInputFieldError("subAdminPermission", "Please Select Permission")
            isValid = false;
        }
        return isValid;
    };

    //! Handle Submit - Creating Sub Admin
    const handleSubmit = async () => {
        if (handleValidation()) {
            console.log("Sub Admin Detail :: ", { ...inputFieldDetail, permission: subAdminPermission })

            const { name, email, contact, password } = inputFieldDetail;
            const payload = {
                data: {
                    name, email, contact, password, permission: subAdminPermission,
                },
                onComplete: () => navigate("/sub-admin")
            }
            //! Dispatching API for creating Sub-Admin
            // dispatch(SubAdminActions.createSubAdmin(payload))
        }
    }

    const subAdminPermissionData = [
        { name: "Dashboard" },
        { name: "Supplier" },
        { name: "Customer" },
    ];

    useEffect(() => {
        if (stateData) {
            setSubAdminPermission(stateData?.permission);
        }
    }, [])

    return (
        <>
            <div style={{ padding: "10px" }}>
                <RouteHeader title={`${mode} Sub Admin`} />

                <div style={{ backgroundColor: Color.white, padding: "20px", borderRadius: "10px" }}>
                    <Grid container spacing={2}>
                        <Grid item lg={12} sm={12} md={12} xs={12} sx={{ fontWeight: "600", fontSize: "20px", marginBottom: "20px" }}>{mode} Sub Admin</Grid>

                        <Grid item lg={6} md={6} sm={12} xs={12} >
                            <TextField
                                label="Name" variant='outlined' fullWidth
                                name='name'
                                value={inputFieldDetail?.name}
                                onChange={handleInputField}
                                error={inputFieldError.name ? true : false}
                                helperText={inputFieldError.name}
                                onFocus={() => handleInputFieldError("name", null)}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} >
                            <TextField
                                label="Email" variant='outlined' fullWidth
                                name='email'
                                value={inputFieldDetail?.email}
                                onChange={handleInputField}
                                error={inputFieldError.email ? true : false}
                                helperText={inputFieldError.email}
                                onFocus={() => handleInputFieldError("email", null)}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} >
                            <TextField
                                label="Contact" variant='outlined' fullWidth
                                name='contact'
                                value={inputFieldDetail?.contact}
                                onChange={handleInputField}
                                error={inputFieldError.contact ? true : false}
                                helperText={inputFieldError.contact}
                                onFocus={() => handleInputFieldError("contact", null)}
                            />
                        </Grid>

                        <Grid item lg={6} sm={12} md={12} xs={12}>
                            <TextField
                                label="Password" variant='outlined' fullWidth
                                name='password'
                                value={inputFieldDetail?.password}
                                onChange={handleInputField}
                                error={inputFieldError.password ? true : false}
                                helperText={inputFieldError.password}
                                onFocus={() => handleInputFieldError("password", null)}
                            />
                        </Grid>

                        <Grid item lg={12} sm={12} md={12} xs={12}>
                            <FormLabel component="legend">Permission</FormLabel>
                            <FormGroup aria-label="position" row >
                                {subAdminPermissionData.map((value, index) => {
                                    const permittedData = subAdminPermission.find(curr => curr === value?.name)
                                    return <div key={index}>
                                        <FormControlLabel
                                            label={value.name} control={<Checkbox checked={permittedData == value?.name} />}
                                            name={value.name}
                                            value={value.name}
                                            onChange={(e) => handleSubAdminPermission(e)}
                                            onFocus={() => handleInputFieldError("subAdminPermission", null)}
                                        />
                                    </div>
                                })}
                            </FormGroup>
                            {inputFieldError?.subAdminPermission && <div style={{ color: "#D32F2F", fontSize: "10px", padding: "10px 0 0 15px" }}>{inputFieldError?.subAdminPermission}</div>}
                        </Grid>

                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <Grid container sx={{ justifyContent: "space-between" }}>
                                <div onClick={handleSubmit} style={{ fontWeight: "500", backgroundColor: Color.primary, color: Color.white, padding: "10px 20px", borderRadius: "5px", cursor: "pointer", fontSize: "15px" }}>Submit</div>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default AddSubadmin;