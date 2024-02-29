import React from 'react';
import { CheckboxContainer, HiddenCheckbox, StyledCheckmark } from './checkbox.styles';

const CustomCheckbox = ({ checked, onChange, label }) => (
	<CheckboxContainer>
		{label}
		<HiddenCheckbox checked={checked} onChange={onChange} />
		<StyledCheckmark />
	</CheckboxContainer>
);

export default CustomCheckbox;
