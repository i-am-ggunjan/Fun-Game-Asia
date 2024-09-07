import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, TextField } from '@mui/material';
import { Color } from '../../../assets/color';
import Logo from '../../../assets/images/logo_icon.png';
import { DeleteSvg, EditSvg } from '../../../assets/svg';
import RouteHeader from '../../../components/common/RouteHeader';
import DatatableWithSearch from '../../../components/datatable/DatatableWithSearch';
import DatatableHeading from '../../../components/heading/DatatableHeading';
import * as MasterActions from '../../../redux/actions/masterAction';

const SalePerson = () => {
  const [mode, setMode] = useState('Add');
  const dispatch = useDispatch();
  const { salePersonData } = useSelector(state => state?.masterReducer);

  const [inputFieldDetail, setInputFieldDetail] = useState({ name: '' });
  const [inputFieldError, setInputFieldError] = useState({});
  const [image, setImage] = useState({ file: '', bytes: '' });

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
    setImage({ file: '', bytes: '' });
    setMode('Add');
  }

  //* Handle Edit
  const handleEdit = (data) => {
    setInputFieldDetail({ name: data?.name, id: data?._id });
    setImage({ file: data?.image, bytes: '' });
    setMode('Edit');
  }

  //! Handle Image
  const handleImage = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = () => {
        const base64String = reader.result.split(',')[1];
        setImage({ file: base64String, bytes: file });
      };
    }

    handleInputFieldError("image", null);
  };

  //! Handle Submit : Create | Edit
  const handleSubmit = () => {
    console.log({ ...inputFieldDetail, image: image });

    if (mode == 'Edit') {
      handleReset()
      const payload = {
        id: inputFieldDetail?.id,
        data: {
          name: inputFieldDetail?.name,
          image: image?.file,
        },
        onComplete: () => handleReset()
      }

      //! Dispatching API For Update Sale Person
      dispatch(MasterActions.updateSalePerson(payload));

    } else {
      const payload = {
        data: {
          name: inputFieldDetail?.name,
          image: image?.file,
        },
        onComplete: () => handleReset()
      }
      console.log('Payload ::', payload);

      //! Dispatching API For Create Sale Person
      dispatch(MasterActions.createSalePerson(payload));
    }
  }

  //* Datatable Columns
  const columns = [
    { name: 'S.No.', selector: row => salePersonData?.indexOf(row) + 1 },
    { name: 'Name', selector: row => row?.name },
    { name: 'Image', selector: row => <img src={`data:image/png;base64, ${row?.image}`} height={'50px'} width={'50px'} /> },
    {
      name: 'Action',
      cell: row => (
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <div onClick={() => handleEdit(row)} style={{ cursor: "pointer" }}><EditSvg /></div>
          <div onClick={() => dispatch(MasterActions.deleteSalePerson({ id: row?._id }))} style={{ cursor: "pointer" }}><DeleteSvg /></div>
        </div>
      ),
      right: true
    },
  ];

  useEffect(() => {
    //! Dispatching API For Getting Sale Person
    dispatch(MasterActions.getSalePerson());
  }, []);

  return (
    <div style={{ padding: "10px" }}>
      <RouteHeader title={'Sale Person'} />

      <div style={{ backgroundColor: Color.white, padding: "20px", borderRadius: "10px" }}>
        <Grid container spacing={2} sx={{ marginBottom: "40px", alignItems: "center" }}>
          <Grid item lg={4} sm={12} md={12} xs={12}>
            <div style={{ border: `1px solid ${Color.borderColor}`, padding: "2px 12px", borderRadius: "3px", display: 'flex', alignItems: "center", gap: '20px' }}>
              <img src={image?.file ? `data:image/png;base64, ${image?.file}` : Logo} height={'50px'} width={'50px'} />
              <label htmlFor='choose_image' style={{ cursor: "pointer", border: `1px dashed ${Color.greyBg}`, flex: 1, padding: "7px 10px", borderRadius: "5px", fontWeight: "500", fontSize: "17px", textAlign: "center" }}>Choose Image</label>
              <input id='choose_image' type='file' hidden onChange={handleImage} accept="image/*" />
            </div>
          </Grid>

          <Grid item lg={8} sm={12} md={12} xs={12}>
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
              <div onClick={handleSubmit} style={{ fontWeight: "500", backgroundColor: Color.primary, color: Color.white, padding: "10px 25px", borderRadius: "30px", cursor: "pointer", fontSize: "16px" }}>{mode}</div>
            </Grid>
          </Grid>
        </Grid>

        <div style={{ backgroundColor: Color.white, padding: "20px", borderRadius: "10px", boxShadow: "1px 1px 5px grey" }}>
          <DatatableHeading title={'SalePerson'} data={salePersonData} />
          <DatatableWithSearch data={salePersonData} columns={columns} />
        </div>
      </div>
    </div>
  )
}

export default SalePerson;