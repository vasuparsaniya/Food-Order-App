import CircularProgress from '@mui/material/CircularProgress';
import classes from '../../assets/css/components/Buttons/ButtonLoader.module.css';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  isLoading?: boolean;
  className?: string;
  isSubmitButton?: boolean;
};

const ButtonLoader = (props: Props) => {
  const {
    children,
    onClick,
    isLoading = false,
    className = '',
    type = 'button',
    isSubmitButton = false,
  } = props;

  return (
    <>
      <button
        type={type}
        className={`flex items-center gap-1 ${isLoading ? 'opacity-60' : ''} ${classes.button} ${isSubmitButton && classes.submit} ${className}`}
        {...(onClick && { onClick: onClick })}
      >
        {isLoading && (
          <CircularProgress
            sx={{ color: '#cf7e5f', maxWidth: '20px', maxHeight: '20px' }}
          />
        )}
        {children}
      </button>
    </>
  );
};

export default ButtonLoader;
