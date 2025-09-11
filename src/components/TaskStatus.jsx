import React from 'react'
import styled from 'styled-components'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import DonutLargeIcon from '@mui/icons-material/DonutLarge'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const Checkmark = styled.div`
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 24px;
	height: 24px;
	border-radius: 50%;
	transition: all 0.3s ease;
	flex-shrink: 0;

	& > svg {
		font-size: 24px;
		color: ${props => {
			if (props.status === 'completed') return '#74966d'
			if (props.status === 'in-progress') return '#9a7e6f'
			return '#888'
		}};
		transition: color 0.3s ease;
	}
`

const TaskStatus = ({ status, onClick }) => {
	let icon
	switch (status) {
		case 'completed':
			icon = <CheckCircleIcon />
			break
		case 'in-progress':
			icon = <DonutLargeIcon />
			break
		default:
			icon = <RadioButtonUncheckedIcon />
	}

	return (
		<Checkmark status={status} onClick={onClick}>
			{icon}
		</Checkmark>
	)
}

export default TaskStatus
