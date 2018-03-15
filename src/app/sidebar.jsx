import React from 'react';
import Clients from '../clients/clients';
import '../../public/css/sidebar.css';

const Sidebar = () => {
	return (
		<div className='sidebar-wrapper'>
			<nav id="sidebar">
				<div className="sidebar-header">
					<h1>Clok.io</h1>
				</div>
				<Clients />
			</nav>
		</div>
	);
};

export default Sidebar;