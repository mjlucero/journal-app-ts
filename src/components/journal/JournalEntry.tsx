import React from 'react';

export const JournalEntry = () => {
	return (
		<div className="journal__entry pointer">
			<div
				className="journal__entry-picture"
				style={{
					backgroundSize: 'cover',
					backgroundImage:
						'url(https://icon-library.com/images/placeholder-image-icon/placeholder-image-icon-21.jpg)'
				}}
			></div>
			<div className="journal__entry-body">
				<p className="journal__entry-title">A new day</p>
				<p className="journal__entry-content">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestiae
					necessitatibus illum, eveniet explicabo aspernatur sapiente
				</p>
			</div>
			<div className="journal__entry-date-box">
				<span>Monday</span>
				<h4>28</h4>
			</div>
		</div>
	);
};
