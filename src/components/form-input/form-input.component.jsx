import { GroupContainer, FormInputStyled, FormInputLabel } from './form-input.styles';

const FormInput = ({ label, ...otherProps }) => {
	return (
		<GroupContainer>
			<FormInputStyled {...otherProps} />
			{label && <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>}
		</GroupContainer>
	);
};

export default FormInput;
