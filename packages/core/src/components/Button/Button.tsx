import { WithStyle } from '@utils/types';
import React from 'react';
import Text from '../Text';
import { ButtonStyled } from './Button.styled';
import { Props } from './types';

import { isValidStringOrNumber } from 'src/utils/helpers/ReactHelper';

const Button: React.FunctionComponent<Props> & WithStyle = props => {
    return (
        <ButtonStyled {...props}>
            {React.Children.map(props.children, c => {
                return isValidStringOrNumber(c) ? (
                    <Text textWeight="Strong" uppercase>
                        {c}
                    </Text>
                ) : (
                    c
                );
            })}
        </ButtonStyled>
    );
};
Button.displayName = 'Button';
Button.Style = ButtonStyled;

export default Button;
