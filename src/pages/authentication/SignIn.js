import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';
import Wrapper from './Wrapper';
import SignInForm from './forms/SignInForm';

// project import

// ================================|| LOGIN ||================================ //

const SignIn = () => (
    <Wrapper>
        <Grid container spacing={3} sx={{ maxWidth: "400px", height: "100%" }}>
            <Grid item xs={12}>
                <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                    <Typography variant="h3">Sign in</Typography>
                    <Typography component={Link} to="/signup" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
                        Don&apos;t have an account?
                    </Typography>
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <SignInForm />
            </Grid>
        </Grid>
    </Wrapper>
);

export default SignIn;
