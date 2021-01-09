import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { JournalEntries } from './JournalEntries';
import { startLogout } from '../../store/actions/auth';
import { RootState } from '../../store';

export const Sidebar = () => {
	const dispatch = useDispatch();
	const name = useSelector((state: RootState) => state.auth.name);

	const handleLogout = () => {
		dispatch(startLogout());
	};

	return (
		<aside className="journal__sidebar">
			<div className="journal__sidebar-navbar">
				<h3 className="mt-5">
					<i className="far fa-moon" />
					<span>{` ${name}`}</span>
				</h3>

				<button className="btn" onClick={handleLogout}>
					Logout
				</button>
			</div>
			<div className="journal__new-entry">
				<i className="far fa-calendar-plus fa-5x" />
				<p className="mt-5">New Entry</p>
			</div>
			<JournalEntries />
		</aside>
	);
};
