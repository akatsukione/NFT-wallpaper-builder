import * as yup from 'yup';

export const InputValidations = yup.object().shape({
	ape: yup
		.number()
		.typeError('APE must be a number')
		.moreThan(
			9999,
			'APE must be more than 10000 and less than 20145'
		)
		.lessThan(
			20146,
			'APE must be more than 10000 and less than 20145'
		)
		.required('id ape is required'),
});
