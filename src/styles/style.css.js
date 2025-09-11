import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import AddIcon from '@mui/icons-material/Add'
import ClearIcon from '@mui/icons-material/Clear'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import DonutLargeIcon from '@mui/icons-material/DonutLarge'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

export const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #37353e;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    overflow-x: hidden;
  }
`

const BaseButton = styled.button`
	color: #d3dad9;
	cursor: pointer;
	border: none;
	border-radius: 10px;
	font-weight: bold;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	transition: box-shadow 0.3s ease, background-color 0.3s ease;
	flex-shrink: 0;

	&:hover {
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
	}
`

const css = {
	CenteredContainer: styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 100%;
		min-height: 100vh;
		padding: 20px;
		box-sizing: border-box;
	`,
	ContentBlock: styled.div`
		background-color: #44444e;
		padding: 30px;
		border-radius: 25px;
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
		width: 450px;
		min-height: 600px;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;

		@media (max-width: 768px) {
			min-height: 90vh;
			padding: 20px;
			width: clamp(280px, 105%, 500px);
		}
		@media (max-width: 480px) {
			width: clamp(250px, 100%, 400px);
			padding: 15px;
			min-height: 85vh;
		}
	`,
	TopNavBar: styled.div`
		width: 100%;
		height: 52px;
		display: flex;
		margin-bottom: 20px;
		align-items: center;
		gap: 15px;

		@media (max-width: 480px) {
			flex-wrap: wrap;
			height: auto;
			gap: 10px;
			justify-content: space-between;
		}
	`,
	MainButton: styled(BaseButton)`
		width: 120px;
		height: 52px;
		background-color: #715a5a;
		font-size: 1rem;
		padding: 0 10px;
		display: flex;
		align-items: center;
		justify-content: center;

		&:nth-last-child(1) {
			width: 52px;
			height: 52px;
			margin-left: auto;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 24px;
			padding: 0;
			background-color: #74966d;
		}

		@media (max-width: 480px) {
			width: 45%;
			height: 45px;
			padding: 0 10px;

			&:nth-last-child(1) {
				width: 45px;
				height: 45px;
				margin-left: auto;
			}
		}
	`,
	Title: styled.span`
		font-size: 62px;
		font-weight: bold;
		color: #d3dad9;
		margin-bottom: 20px;
		align-self: center;
		text-align: center;
		word-break: break-word;

		@media (max-width: 480px) {
			font-size: 48px;
			margin-bottom: 15px;
		}
		@media (max-width: 360px) {
			font-size: 38px;
		}
	`,
	ListContainer: styled.div`
		flex: 1;
		overflow-y: auto;
		padding: 0 5px;
	`,
	ListItemContainer: styled.div`
		margin-bottom: 15px;
		display: flex;
		align-items: center;
		background-color: #d3dad9;
		border-radius: 15px;
		padding: 5px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	`,
	AddInputWrapper: styled.div`
		display: flex;
		align-items: center;
		flex: 1;
		gap: 10px;

		@media (max-width: 480px) {
			flex-wrap: wrap;
			justify-content: center;
			gap: 5px;
			padding-top: 10px;
			padding-bottom: 10px;
		}
	`,
	AddInput: styled.input`
		flex: 1;
		height: 40px;
		border: none;
		border-radius: 10px;
		padding: 0 15px;
		font-size: 16px;
		outline: none;
		background-color: #ffffff;
		box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
		min-width: 100px;

		@media (max-width: 480px) {
			width: 100%;
			order: -1;
			min-width: unset;
		}
	`,

	Checkmark: styled.div`
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
				return '#888' //
			}};
			transition: color 0.3s ease;
		}
	`,
	CancelButton: styled(BaseButton)`
		background-color: #9a7e6f;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		font-size: 18px;
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;
	`,
	ConfirmButton: styled(BaseButton)`
		background-color: #74966d;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		font-size: 18px;
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;
	`,
	ListItem: styled.div`
		display: flex;
		flex: 1;
		min-height: 50px;
		color: #444;
		align-items: center;
		padding-left: 15px;
		font-size: 18px;
		flex-wrap: wrap;
		gap: 10px;

		@media (max-width: 480px) {
			flex-direction: column;
			align-items: flex-start;
			gap: 10px;
			padding-left: 10px;
		}
	`,
	DeleteIcon: styled(ClearIcon)`
		color: white;
		font-size: 24px;
		transition: color 0.3s ease;
	`,
	AddActionButtonIcon: styled(AddIcon)`
		color: white;
		font-size: 24px;
	`,
	DeleteButton: styled(BaseButton)`
		height: 40px;
		width: 40px;
		border-radius: 50%;
		background-color: #b86262;
		margin-left: auto;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-shrink: 0;

		@media (max-width: 480px) {
			margin-left: 0;
			align-self: flex-end;
		}
	`,
}

export default css
