// src/RegistrationForm.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box, Typography, Container, Grid, InputAdornment, IconButton, MenuItem, Link } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Email from '@mui/icons-material/Email';
import Settings from '@mui/icons-material/Settings';
import BadgeIcon from '@mui/icons-material/Badge';
import Paper from '@mui/material/Paper';

const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      state: '',
      dateOfBirth: '',
      gender: '',
      email: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .max(50, 'Must be 50 characters or less')
        .required('Required'),
      address: Yup.string()
        .max(100, 'Must be 100 characters or less')
        .required('Required'),
      city: Yup.string()
        .max(50, 'Must be 50 characters or less')
        .required('Required'),
      state: Yup.string()
        .max(50, 'Must be 50 characters or less')
        .required('Required'),
      dateOfBirth: Yup.date()
        .required('Required'),
      gender: Yup.string()
        .oneOf(['male', 'female', 'other'], 'Invalid Gender')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container component="main" maxWidth="xl">
      <Box
        sx={{
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100vh',
          overflow: 'hidden'
        }}
      >
        <Grid container spacing={2} sx={{ height: '100vh' }}>
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5', padding: '0px !important', position:'relative' }}>
            <img src={require('./Banner.jpg')} alt='Banner' className='fullsize' />  
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'block', justifyContent: 'center', alignItems: 'center', height: '100vh', overflowY: 'scroll', position:'relative' }}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              style={{padding:'20px 0px', position:'fixed', zIndex: 1, width: 'calc(45% - 18px)', top: '0px', left: 'auto', background:'#fff'}}
            >
            <Typography component="div"><Link style={{display:'flex', alignItems:'center', textDecoration:'none', color:'green'}}><Settings />Quality Health</Link></Typography>
            <Button variant="outlined">How it works</Button>
            </Grid>
            <Box 
            sx={{ 
              width: { xs: '100%', md: '50%' }, 
              margin: '0px auto',
            }}
            >
              <Typography component="h1" variant="h5" align="center" style={{paddingTop: '100px', fontFamily:'Tiempos Headline Regular', fontSize:'3rem', color:'green'}}>
                Sign Up
              </Typography>
              <Box style={{padding: '10px'}} component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
                <Paper elevation={3} style={{padding: '8px'}}>
                <Typography component="div" variant="b1" style={{display: 'flex', alignItems:'center', fontSize: '18px', borderBottom: 'solid 1px rgb(204, 204, 204)', padding:' 15px 15px 15px 0px'}}>
                  <BadgeIcon /> &nbsp; Your information
                </Typography>
                <TextField
                  fullWidth
                  id="fullName"
                  name="fullName"
                  label="Full Name"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                  helperText={formik.touched.fullName && formik.errors.fullName}
                  margin="normal"
                  variant='standard'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton edge="end">
                          <EditIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  style={{margin: '0px'}}
                />
                <TextField
                  fullWidth
                  id="address"
                  name="address"
                  label="Address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.address && Boolean(formik.errors.address)}
                  helperText={formik.touched.address && formik.errors.address}
                  margin="normal"
                  variant='standard'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton edge="end">
                          <EditIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  style={{margin: '0px'}}
                />
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="city"
                      name="city"
                      label="City"
                      value={formik.values.city}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.city && Boolean(formik.errors.city)}
                      helperText={formik.touched.city && formik.errors.city}
                      margin="normal"
                      variant='standard'
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton edge="end">
                              <EditIcon />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      style={{margin: '0px 0px 20px 0px'}}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="state"
                      name="state"
                      label="State"
                      value={formik.values.state}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.state && Boolean(formik.errors.state)}
                      helperText={formik.touched.state && formik.errors.state}
                      margin="normal"
                      variant='standard'
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton edge="end">
                              <EditIcon />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      style={{margin: '0px 0px 20px 0px'}}
                    />
                  </Grid>
                </Grid>
                <TextField
                  fullWidth
                  id="dateOfBirth"
                  name="dateOfBirth"
                  label="Date of Birth"
                  type="date"
                  value={formik.values.dateOfBirth}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.dateOfBirth && Boolean(formik.errors.dateOfBirth)}
                  helperText={formik.touched.dateOfBirth && formik.errors.dateOfBirth}
                  margin="normal"
                  variant='standard'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton edge="end">
                          <EditIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  style={{margin: '0px'}}
                />
                <TextField
                  fullWidth
                  id="gender"
                  name="gender"
                  label="Gender"
                  select
                  value={formik.values.gender}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.gender && Boolean(formik.errors.gender)}
                  helperText={formik.touched.gender && formik.errors.gender}
                  margin="normal"
                  variant='standard'
                  style={{margin: '0px'}}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </TextField>
                </Paper>
                <br />
                <Paper elevation={0}>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  margin="normal"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton edge="end">
                          <EditIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  style={{margin: '0px'}}
                />
                </Paper>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ mt: 3, mb: 2 }}
                  style={{
                    backgroundColor: '#2B3649',
                    padding: '10px',
                    textTransform: 'capitalize'
                  }}
                  startIcon={<Email />}
                >
                  Continue with email
                </Button>
              </Box>
              <Typography component="div" align="center">
              By signing up, I agree to the <Link href="#">Offer Terms</Link>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default RegistrationForm;
