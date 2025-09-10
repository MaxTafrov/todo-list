import { List } from '@mui/icons-material'
import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	body {
	 width: 100%;
		height: 100%;
		box-sizing: border-box;
		font-family: 'Arial', sans-serif;
		justify-content: center;
		align-items: center;
		background-color: #37353e;
		display: flex;
	}
`

const css = {
	CenteredContainer: styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		min-height: 100vh;

		max-width: 100vw;
	`,
	ContentBlock: styled.div`
		background-color: #44444e;
		padding: 20px;
		border-radius: 25px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		min-width: 550px;
		min-height: 500px;
		display: flex;
		flex-direction: column;
	`,
	TopNavBar: styled.div`
		width: 100%;
		height: 40px;
		display: flex;
		margin-bottom: 20px;
		align-items: center;
		gap: 10px;
	`,
	MainButton: styled.button`
		width: 100px;
		height: 52px;
		background-color: #715a5a;
		border: none;
		border-radius: 10px;
		font-weight: bold;
		color: #d3dad9;
		cursor: pointer;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
		&:nth-last-child(1) {
			width: 52px;
			margin-left: auto;
			border-radius: 50%;
		}
		&:hover {
			box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
			transition: box-shadow 0.5s ease;
		}
	`,
	Title: styled.span`
		font-size: 62px;
		font-weight: bold;
		color: #d3dad9;
		margin-bottom: 10px;
		align-self: center;
	`,
	ListContainer: styled.div`
		flex: 1;
		overflow-y: auto;
		padding: 0 10px;
	`,
	ListItemContainer: styled.div`
		margin-bottom: 15px;
		display: flex;
		align-items: center;
		background-color: #d3dad9;
		border-radius: 15px;
		padding: 5px;
	`,

	ListItem: styled.div`
		display: flex;
		flex: 1;
		min-height: 20px;
		color: black;
	`,
	DeleteButton: styled.button`
		color: white;
		height: 40px;
		width: 50px;
		cursor: pointer;
		border: none;
		background-color: #9a7e6f;
		margin-left: auto;
		margin-right: 0;
		border-radius: 15px;
		font-weight: bold;

		&:hover {
			color: red;
			background-color: #664f42;
			transition: background-color 0.3s ease;
			transition: color 0.6s ease;
		}
	`,
}

export default css
