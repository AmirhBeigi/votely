import TextField from '../../atom/TextField';
import { useState } from 'react';
import { CloseEyeIcon, OpenEyeIcon } from '../../icons';

export const PasswordField: React.FC<NativeDomProps<HTMLInputElement>> = props => {
  const [shouldShowPassword, setShouldShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShouldShowPassword(!shouldShowPassword);
  };

  return (
    <TextField
      type={shouldShowPassword ? 'text' : 'password'}
      afterElement={
        shouldShowPassword ? (
          <CloseEyeIcon color="#000" onClick={handleShowPassword} />
        ) : (
          <OpenEyeIcon color="#000" onClick={handleShowPassword} />
        )
      }
      {...props}
    />
  );
};

export default PasswordField;
