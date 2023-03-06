/* eslint-disable react/react-in-jsx-scope */
import {ButtonListMenu} from './styles';
import {List} from 'phosphor-react';

export function MenuList() {
	return (
		<>
			<ButtonListMenu >
				<i> <List size={35} /> </i>
			</ButtonListMenu>
		</>
	);
}
