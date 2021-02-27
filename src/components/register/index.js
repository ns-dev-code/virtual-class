import React, { useState, useEffect } from 'react';
import { navigate } from 'gatsby';
import { Typography, TextField, Paper, Button, InputAdornment, IconButton, InputLabel, FormControl, Select, OutlinedInput, FormHelperText, Box } from '@material-ui/core';
import { useStyles } from './register-styles';
import { withSnackbar } from 'notistack';
import * as _ from 'lodash';
import { Visibility, VisibilityOff } from '@material-ui/icons';

function Register(props) {
    const {
        values: { firstName, lastName, email, userType, password },
        handleChange,
        handleSubmit,
        errors,
        status,
        touched,
        isValid,
        setStatus,
        setFieldTouched
    } = props;
    const classes = useStyles()
    const [showPassword, setShowPassword] = useState(false);
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = useState(0);
    useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleClick = redirect => () => {
        switch (redirect) {
            case 'home': navigate('/'); break;
            case 'login': navigate('/login'); break;
            default: navigate('/register'); break;
        }
    }

    const change = (name, e) => {
        handleChange(e);
        setFieldTouched(name, true, false);
    }
    console.log(userType);
    return (
        <React.Fragment>
            <Box py={4} >
                <Paper className={classes.root}>
                    <div style={{ margin: 'auto', cursor: 'pointer' }} onClick={handleClick('home')}>
                        <img src={'https://alexwebdevelop.com/wp-content/uploads/2019/08/php-login-and-authentication-the-definitive-guide.png'} alt="loginImage" className={classes.image} />
                    </div>

                    {status && <Typography color="error">
                        {status.message}
                    </Typography>}
                    <br />
                    <Typography align="center" variant="h6" className={classes.text}>Register Here</Typography>
                    <form onSubmit={handleSubmit} autoComplete="off" >
                        <TextField
                            name="firstName"
                            error={touched.firstName && Boolean(errors.firstName)}
                            label="First Name"
                            placeholder="Enter first name"
                            variant="outlined"
                            onChange={change.bind(null, 'firstName')}
                            value={firstName}
                            fullWidth
                            type="text"
                            className={classes.textField}
                            helperText={touched.firstName ? errors.firstName : ''}
                        />
                        <TextField
                            name="lastName"
                            error={touched.lastName && Boolean(errors.lastName)}
                            label="Last Name"
                            placeholder="Enter last name"
                            variant="outlined"
                            onChange={change.bind(null, 'lastName')}
                            value={lastName}
                            fullWidth
                            type="text"
                            className={classes.textField}
                            helperText={touched.lastName ? errors.lastName : ''}
                        />
                        <FormControl variant="outlined" className={classes.select}>
                            <InputLabel ref={inputLabel} htmlFor="userType-outlined">Select user type</InputLabel>
                            <Select
                                native
                                value={userType}
                                placeholder="Select user type"
                                onChange={change.bind(null, 'userType')}
                                input={<OutlinedInput name="userType" labelWidth={labelWidth} id="userType-outlined" />}
                            >
                                <option value="student">Instructor</option>
                                <option value="recruiter">Admin</option>
                            </Select>
                            <FormHelperText>{touched.userType ? errors.userType : ''}</FormHelperText>
                        </FormControl>
                        <TextField
                            name="email"
                            error={touched.email && Boolean(errors.email)}
                            label="Email"
                            placeholder="Enter email"
                            variant="outlined"
                            onChange={change.bind(null, 'email')}
                            value={email}
                            fullWidth
                            type="email"
                            className={classes.textField}
                            helperText={touched.email ? errors.email : ''}
                        />
                        <TextField
                            name="password"
                            label="Password"
                            placeholder="Enter password"
                            error={touched.password && Boolean(errors.password)}
                            variant="outlined"
                            onChange={change.bind(null, 'password')}
                            fullWidth
                            value={password}
                            type={showPassword ? 'text' : 'password'}
                            className={classes.textField}
                            helperText={touched.password ? errors.password : ''}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            edge="end"
                                            aria-label="toggle password"
                                            onClick={handleShowPassword}
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                        <Button
                            variant="contained"
                            color="secondary"
                            size="medium"
                            className={classes.fabButton}
                            disabled={!isValid}
                            type="submit"
                            color="primary"
                        >
                            Sign up
                    </Button>

                    </form>
                    <div className={classes.alreadyMember}>
                        <Typography align="center">Already a User ? <span className={classes.signIn} onClick={handleClick('login')}>Sign in</span></Typography>
                    </div>
                </Paper>
            </Box>
        </React.Fragment>
    )
}
export default withSnackbar(Register)