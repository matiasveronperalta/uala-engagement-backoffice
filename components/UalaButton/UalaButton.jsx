import Button from '@mui/material/Button';

const styles = {
  '&:hover': {
    background: '#0030b7',
  },
  
};

const UalaButton = ({
  title,
  color,
  disabled,
  variant = 'contained',
  type = 'submit',
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      disabled={disabled}
      type={type}
      style={{ borderRadius: '30px', height: '3rem', fontSize: '1rem' }}
      fullWidth
    >
      {title}
    </Button>
  );
};

export default UalaButton;
