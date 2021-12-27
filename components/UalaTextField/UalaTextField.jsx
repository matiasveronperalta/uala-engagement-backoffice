import TextField from '@mui/material/TextField';

const UalaTextField = ({ label, name, type='text', required=false}) => {
  return (
    <TextField
      label={label}
      variant='standard'
      margin='normal'
      name={name}
      type={type}
      required={required}
      fullWidth
    />
  );
};

export default UalaTextField;
