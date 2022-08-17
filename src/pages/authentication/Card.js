import PropTypes from 'prop-types';

// material-ui
import { Box } from '@mui/material';
import MainCard from '../../@basic/components/MainCard';

// project import

// ==============================|| AUTHENTICATION - CARD WRAPPER ||============================== //

const Card = ({ children, ...other }) => (
    <MainCard
        sx={{
            maxWidth: { xs: 400, lg: 475 },
            margin: { xs: 2.5, md: 3 },
            '& > *': {
                flexGrow: 1,
                flexBasis: '50%'
            }
        }}
        content={false}
        {...other}
        border={false}
        boxShadow
    >
        <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>{children}</Box>
    </MainCard>
);

Card.propTypes = {
    children: PropTypes.node
};

export default Card;
