import { styled } from '@mui/material';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import React from 'react';


const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#0063cc',
  borderColor: '#0063cc',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

ContentPush.propTypes = {

};

function ContentPush(props) {
  return (
    <div>
      <Stack spacing={2} direction="row">
        <ColorButton variant="contained">Custom CSS</ColorButton>
        <BootstrapButton variant="contained" disableRipple>
          Bootstrap
        </BootstrapButton>
      </Stack>
      <h1>ContentPush</h1>
    </div>
  );
}

export default ContentPush;