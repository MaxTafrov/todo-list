import React, { useState, useRef, useEffect } from 'react'
import css from '../../styles/style.css'
import { GlobalStyle } from '../../styles/style.css'
import { motion, AnimatePresence } from 'framer-motion'
import { Cancel as CancelIcon } from '@mui/icons-material'

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
	ConfirmButton,
	AddInput,
	CancelButton,
	DeleteIcon,
	AddInputWrapper,
} = css

const Main = () => {
	const [tasks, setTasks] = useState([])
	const [addingTask, setAddingTask] = useState(false)
	const [newTaskText, setNewTaskText] = useState('')
	const [taskToDelete, setTaskToDelete] = useState(null)

	const inputRef = useRef(null)

	const handleAddTask = () => {
		setAddingTask(true)
	}

	const handleConfirmAdd = () => {
		if (newTaskText.trim) {
			setTasks([...tasks, newTaskText.trim()])
			setNewTaskText('')
			setAddingTask(false)
		}
	}

	const handleCancelAdd = () => {
		setNewTaskText('')
		setAddingTask(false)
	}

	const handleChange = e => {
		setNewTaskText(e.target.value)
	}

	const handleDeleteTask = index => {
		setTaskToDelete(index)
	}

	const handleConfirmDelete = () => {
		setTasks(tasks.filter((_, i) => i !== taskToDelete))
		setTaskToDelete(null)
	}

	const handleCancelDelete = () => {
		setTaskToDelete(null)
	}

	useEffect(() => {
		if (addingTask && inputRef.current) {
			inputRef.current.focus()
		}
	}, [addingTask])

	const itemVariant = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
		exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
	}

	return (
		<>
			<GlobalStyle />
			<CenteredContainer>
				<Title>ToDo List</Title>
				<ContentBlock>
					<TopNavBar>
						<MainButton>Sort</MainButton>
						<MainButton>View</MainButton>
						<MainButton onClick={handleAddTask}>+</MainButton>
					</TopNavBar>
					<ListContainer>
						{addingTask && (
							<motion.div
								initial='hidden'
								animate='visible'
								exit='exit'
								variants={itemVariant}
							>
								<ListItemContainer>
									<ListItem>
										<AddInputWrapper>
											<AddInput
												ref={inputRef}
												type='text'
												value={newTaskText}
												onChange={handleChange}
												placeholder='New Task'
											/>
											<ConfirmButton onClick={handleConfirmAdd}>
												OK
											</ConfirmButton>
											<CancelButton onClick={handleCancelAdd}>
												<DeleteIcon />
											</CancelButton>
										</AddInputWrapper>
									</ListItem>
								</ListItemContainer>
							</motion.div>
						)}
						<AnimatePresence>
							{tasks.map((task, index) => (
								<motion.div
									key={task}
									initial='hidden'
									animate='visible'
									exit='exit'
									variants={itemVariant}
								>
									<ListItemContainer key={index}>
										<ListItem>
											{taskToDelete === index ? (
												<>
													<span> Delete "{task}"?</span>
													<ConfirmButton onClick={handleConfirmDelete}>
														Yes
													</ConfirmButton>
													<CancelButton onClick={handleCancelDelete}>
														No
													</CancelButton>
												</>
											) : (
												<>
													<span>{task}</span>
													<DeleteButton onClick={() => handleDeleteTask(index)}>
														<DeleteIcon />
													</DeleteButton>
												</>
											)}
										</ListItem>
									</ListItemContainer>
								</motion.div>
							))}
						</AnimatePresence>
					</ListContainer>
				</ContentBlock>
			</CenteredContainer>
		</>
	)
}
export default Main
