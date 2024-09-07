import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, TextField } from '@mui/material';
import { Color } from '../../../assets/color';
import { DeleteSvg, EditSvg } from '../../../assets/svg';
import RouteHeader from '../../../components/common/RouteHeader';
import DatatableWithSearch from '../../../components/datatable/DatatableWithSearch';
import DatatableHeading from '../../../components/heading/DatatableHeading';
import * as MasterActions from '../../../redux/actions/masterAction';

const HsnCode = () => {
  const [mode, setMode] = useState('Add');
  const dispatch = useDispatch();
  const { hsncodeData } = useSelector(state => state?.masterReducer);

  const [inputFieldDetail, setInputFieldDetail] = useState({ name: '', hsncode: '', cgst: '', sgst: '' });
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
    setInputFieldDetail({ name: '', hsncode: '', cgst: '', sgst: '' });
    setMode('Add');
  }

  //* Handle Edit
  const handleEdit = (data) => {
    setInputFieldDetail({ id: data?._id, name: data?.name, hsncode: data?.hsncode, cgst: data?.cgst, sgst: data?.sgst });
    setMode('Edit');
  }

  //! Handle Submit : Create | Edit
  const handleSubmit = () => {
    console.log({ ...inputFieldDetail });
    const { name, hsncode, cgst, sgst } = inputFieldDetail;

    if (mode == 'Edit') {
      handleReset()
      const payload = {
        id: inputFieldDetail?.id,
        data: {
          name, hsncode,
          cgst: cgst,
          sgst: sgst,
          igst: Number(cgst) + Number(sgst)
        },
        onComplete: () => handleReset()
      }

      //! Dispatching API For Update Hsn Code
      dispatch(MasterActions.updateHsnCode(payload));

    } else {
      const payload = {
        data: {
          name, hsncode,
          cgst: cgst,
          sgst: sgst,
          igst: Number(cgst) + Number(sgst)
        },
        onComplete: () => handleReset()
      }

      //! Dispatching API For Create Hsn Code
      dispatch(MasterActions.createHsnCode(payload));
    }
  }

  //* Datatable Columns
  const columns = [
    { name: 'S.No.', selector: row => hsncodeData?.indexOf(row) + 1 },
    { name: 'Name', selector: row => row?.name },
    { name: 'Hsn Code', selector: row => row?.hsncode },
    { name: 'CGST (%)', selector: row => row?.cgst },
    { name: 'SGST (%)', selector: row => row?.sgst },
    { name: 'IGST (%)', selector: row => row?.igst },
    {
      name: 'Action',
      cell: row => (
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <div onClick={() => handleEdit(row)} style={{ cursor: "pointer" }}><EditSvg /></div>
          <div onClick={() => dispatch(MasterActions.deleteHsnCode({ id: row?._id }))} style={{ cursor: "pointer" }}><DeleteSvg /></div>
        </div>
      ),
      right: true
    },
  ];

  useEffect(() => {
    //! Dispatching API For Getting HSN Code 
    dispatch(MasterActions.getHsnCode());
  }, []);

  return (
    <div style={{ padding: "10px" }}>
      <RouteHeader title={'Hsn Code'} />

      <div style={{ backgroundColor: Color.white, padding: "20px", borderRadius: "10px" }}>
        <Grid container spacing={2} sx={{ marginBottom: "40px", alignItems: "center" }}>
          <Grid item lg={6} sm={12} md={12} xs={12}>
            <TextField label="Name" variant="outlined" fullWidth
              name="name"
              value={inputFieldDetail?.name}
              onChange={handleInputField}
              error={inputFieldError.name ? true : false}
              helperText={inputFieldError.name}
              onFocus={() => handleInputFieldError("name", null)}
            />
          </Grid>

          <Grid item lg={6} sm={12} md={12} xs={12}>
            <TextField label="HSN Code" variant="outlined" fullWidth
              name="hsncode"
              value={inputFieldDetail?.hsncode}
              onChange={handleInputField}
              error={inputFieldError.hsncode ? true : false}
              helperText={inputFieldError.hsncode}
              onFocus={() => handleInputFieldError("hsncode", null)}
            />
          </Grid>

          <Grid item lg={4} sm={12} md={12} xs={12}>
            <TextField label="CGST (%)" variant="outlined" fullWidth type='number'
              name="cgst"
              value={inputFieldDetail?.cgst}
              onChange={handleInputField}
              error={inputFieldError.cgst ? true : false}
              helperText={inputFieldError.cgst}
              onFocus={() => handleInputFieldError("cgst", null)}
            />
          </Grid>

          <Grid item lg={4} sm={12} md={12} xs={12}>
            <TextField label="SGST (%)" variant="outlined" fullWidth type='number'
              name="sgst"
              value={inputFieldDetail?.sgst}
              onChange={handleInputField}
              error={inputFieldError.sgst ? true : false}
              helperText={inputFieldError.sgst}
              onFocus={() => handleInputFieldError("sgst", null)}
            />
          </Grid>

          <Grid item lg={4} sm={12} md={12} xs={12}>
            <TextField label="IGST (%)" variant="outlined" fullWidth disabled
              name="igst"
              value={(inputFieldDetail?.cgst && inputFieldDetail?.sgst) ? Number(inputFieldDetail?.cgst) + Number(inputFieldDetail?.sgst) : ''}
            />
          </Grid>

          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Grid container sx={{ justifyContent: "flex-end" }}>
              <div onClick={handleSubmit} style={{ fontWeight: "500", backgroundColor: Color.primary, color: Color.white, padding: "5px 20px", borderRadius: "30px", cursor: "pointer", fontSize: "15px" }}>{mode}</div>
            </Grid>
          </Grid>
        </Grid>

        <div style={{ backgroundColor: Color.white, padding: "20px", borderRadius: "10px", boxShadow: "1px 1px 5px grey" }}>
          <DatatableHeading title={'Hsn Code'} data={hsncodeData} />
          <DatatableWithSearch data={hsncodeData} columns={columns} />
        </div>
      </div>
    </div>
  )
}

export default HsnCode;