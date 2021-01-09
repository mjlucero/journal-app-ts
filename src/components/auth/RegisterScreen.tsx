import React from 'react';
import validator from 'validator';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setErrorMessage } from '../../store/actions/ui';

import { RootState } from '../../store';
import { useForm } from '../../hooks/useForm';
import { starRegisterWithEmail } from '../../store/actions/auth';

export const RegisterScreen = () => {
	const dispatch = useDispatch();
	const { errorMessage } = useSelector((state: RootState) => state.ui);

	const [formValues, handleInputChange] = useForm({
		name: 'Mauricio',
		email: 'javier.lucero2014@gmail.com',
		password: '123456',
		repeatPassword: '123456'
	});

	const {
		name,
		email,
		password,
		repeatPassword
	}: {
		name: string;
		email: string;
		password: string;
		repeatPassword: string;
	} = formValues;

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (isValidForm()) {
			dispatch(starRegisterWithEmail(email, password, name));
		}
	};

	const isValidForm = (): boolean => {
		if (!name.trim().length) {
			dispatch(setErrorMessage('Name is required'));
			return false;
		} else if (!validator.isEmail(email)) {
			dispatch(setErrorMessage('Email should be a valid email'));
			return false;
		} else if (password !== repeatPassword || password.length < 5) {
			dispatch(
				setErrorMessage(
					'Password should be at least 6 characters and match each other'
				)
			);
			return false;
		}

		return true;
	};

	return (
		<>
			<h3 className="auth__title">Register</h3>
			<form onSubmit={handleSubmit}>
				{errorMessage && (
					<div className="auth__alert-error">{errorMessage}</div>
				)}
				<input
					className="auth__input"
					type="text"
					placeholder="Name"
					name="name"
					autoComplete="nope"
					value={name}
					onChange={handleInputChange}
				/>
				<input
					className="auth__input"
					type="text"
					placeholder="Email"
					name="email"
					autoComplete="off"
					value={email}
					onChange={handleInputChange}
				/>
				<input
					className="auth__input"
					type="password"
					placeholder="Password"
					name="password"
					value={password}
					onChange={handleInputChange}
				/>
				<input
					className="auth__input"
					type="password"
					placeholder="Repeat password"
					name="repeatPassword"
					value={repeatPassword}
					onChange={handleInputChange}
				/>
				<button className="btn btn-primary btn-block mb-5" type="submit">
					Register
				</button>
				<Link className="link" to="/auth/login">
					Alredy register?
				</Link>
			</form>
		</>
	);
};
