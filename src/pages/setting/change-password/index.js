import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as EmailValidator from 'email-validator';
import RouteHeader from '../../../components/common/RouteHeader';
import { Color } from '../../../assets/color';
import { Grid, TextField } from '@mui/material';
import axios from 'axios';

const ChangePassword = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [inputFieldDetail, setInputFieldDetail] = useState({ email: '', oldPassword: '', password: '', confirmPassword: '' });
    const [inputFieldError, setInputFieldError] = useState({ email: '', oldPassword: '', password: '', confirmPassword: '' });

    //* Handle Input Field : Error
    const handleInputFieldError = (input, value) => {
        setInputFieldError((prev) => ({ ...prev, [input]: value }))
    }

    //* Handle Input Field : Data
    const handleInputField = (e) => {
        const { name, value } = e.target;
        setInputFieldDetail({ ...inputFieldDetail, [name]: value });
    };

    //! Handle Validation
    const handleValidation = () => {
        let isValid = true;
        const { email, oldPassword, password, confirmPassword } = inputFieldDetail;

        if (!email) {
            handleInputFieldError("email", "Please Enter Email")
            isValid = false;
        }
        if (email) {
            const emailValid = EmailValidator.validate(email)
            if (!emailValid) {
                handleInputFieldError("email", "Please Enter Valid Email")
                isValid = false;
            }
        }
        if (!oldPassword) {
            handleInputFieldError("oldPassword", "Please Enter Old Password")
            isValid = false;
        }
        if (!password) {
            handleInputFieldError("password", "Please Enter Password")
            isValid = false;
        }
        if (password != confirmPassword) {
            handleInputFieldError("confirmPassword", "Please Enter Same Password")
            isValid = false;
        }
        return isValid;
    };

    //! Handle Submit
    // const handleSubmit = async () => {
    //     if (handleValidation()) {
    //         console.log("Detail :: ", { ...inputFieldDetail })

    //         const { email, oldPassword, password } = inputFieldDetail;
    //         const payload = {
    //             data: {
    //                 email, oldPassword, password
    //             },
    //             onComplete: () => console.log("Password Updated!!!!")
    //         }
    //         //! Dispatching API for Changing Password
    //         // dispatch(CommonActions.changePasswordAdminSubAdmin(payload))
    //     }
    // }; // Make sure to import axios

    const handleSubmit = async () => {
    if (handleValidation()) {
        const { email, oldPassword, password } = inputFieldDetail;

        const payload = {
            email,
            oldPassword,
            newPassword: password // Use newPassword if that’s the field name for the new password
        };

        try {
            const response = await axios.post('http://localhost:4000/api/setting/changePassword', payload, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log("Password Update Response:", response.data);
            // Handle success (e.g., show a success message to the user)
            alert('Password updated successfully!');
        } catch (error) {
            console.error("Error updating password:", error.response ? error.response.data : error.message);
            // Handle error (e.g., show an error message to the user)
            alert('Failed to update password. Please try again.');
        }
    }
};


    return (
        <>
            <div style={{ padding: "10px" }}>
                <RouteHeader title={'Change Password'} />

                <div style={{ backgroundColor: Color.white, padding: "20px", borderRadius: "10px" }}>
                    <Grid container spacing={2}>
                        <Grid item lg={12} sm={12} md={12} xs={12} sx={{ fontWeight: "600", fontSize: "20px", marginBottom: "20px" }}>Change Password</Grid>

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
                        <Grid item lg={6} sm={12} md={12} xs={12}>
                            <TextField
                                label="Old Password" variant='outlined' fullWidth
                                name='oldPassword'
                                value={inputFieldDetail?.oldPassword}
                                onChange={handleInputField}
                                error={inputFieldError.oldPassword ? true : false}
                                helperText={inputFieldError.oldPassword}
                                onFocus={() => handleInputFieldError("oldPassword", null)}
                            />
                        </Grid>

                        <Grid item lg={6} sm={12} md={12} xs={12}>
                            <TextField
                                label="New Password" variant='outlined' fullWidth
                                name='password'
                                value={inputFieldDetail?.password}
                                onChange={handleInputField}
                                error={inputFieldError.password ? true : false}
                                helperText={inputFieldError.password}
                                onFocus={() => handleInputFieldError("password", null)}
                            />
                        </Grid>

                        <Grid item lg={6} sm={12} md={12} xs={12}>
                            <TextField
                                label="Confirm New Password" variant='outlined' fullWidth
                                name='confirmPassword'
                                value={inputFieldDetail?.confirmPassword}
                                onChange={handleInputField}
                                error={inputFieldError.confirmPassword ? true : false}
                                helperText={inputFieldError.confirmPassword}
                                onFocus={() => handleInputFieldError("confirmPassword", null)}
                            />
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

export default ChangePassword;