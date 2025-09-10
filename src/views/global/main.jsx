import React from 'react'
import css from '../../styles/style.css'
import { GlobalStyle } from '../../styles/style.css'

const {
	CenteredContainer,
	ContentBlock,
	MainButton,
	TopNavBar,
	Title,
	ListContainer,
	ListItem,
	ListItemContainer,
	DeleteButton,
} = css

const Main = () => {
	return (
		<>
			<GlobalStyle />

			<CenteredContainer>
				<Title>ToDo List</Title>
				<ContentBlock>
					<TopNavBar>
						<MainButton>Sort</MainButton>
						<MainButton>View</MainButton>
						<MainButton>+</MainButton>
					</TopNavBar>
					<ListContainer>
						<ListItemContainer>
							<ListItem>
								<DeleteButton>Delete</DeleteButton>
							</ListItem>
						</ListItemContainer>
						<ListItemContainer>
							<ListItem>
								<DeleteButton>Delete</DeleteButton>
							</ListItem>
						</ListItemContainer>
						<ListItemContainer>
							<ListItem>
								<DeleteButton>Delete</DeleteButton>
							</ListItem>
						</ListItemContainer>
						<ListItemContainer>
							<ListItem>
								<DeleteButton>Delete</DeleteButton>
							</ListItem>
						</ListItemContainer>
						<ListItemContainer>
							<ListItem>
								<DeleteButton>Delete</DeleteButton>
							</ListItem>
						</ListItemContainer>
					</ListContainer>
				</ContentBlock>
			</CenteredContainer>
		</>
	)
}
export default Main
