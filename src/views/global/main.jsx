import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import css from '../../styles/style.css'
import { GlobalStyle } from '../../styles/style.css'
import TaskStatus from '../../components/TaskStatus'
import DeleteIcon from '@mui/icons-material/Delete'

import SortIcon from '@mui/icons-material/Sort'
import FilterListIcon from '@mui/icons-material/FilterList'

const {
	CenteredContainer,
	ContentBlock,
	MainButton,
	TopNavBar,
	Title,
	ListContainer,
	ListItemContainer,
	ListItem,
	DeleteButton,
	AddInput,
	ConfirmButton,
	CancelButton,
	AddInputWrapper,
} = css

const Main = () => {
	const [tasks, setTasks] = useState(() => {
		try {
			const savedTasks = localStorage.getItem('tasks')
			return savedTasks ? JSON.parse(savedTasks) : []
		} catch (error) {
			console.error('Failed to load tasks from local storage', error)
			return []
		}
	})

	const [addingTask, setAddingTask] = useState(false)
	const [newTaskText, setNewTaskText] = useState('')
	const [taskToDelete, setTaskToDelete] = useState(null)
	const [sortMode, setSortMode] = useState('default')
	const [viewMode, setViewMode] = useState('all')

	const inputRef = useRef(null)

	useEffect(() => {
		try {
			localStorage.setItem('tasks', JSON.stringify(tasks))
		} catch (error) {
			console.error('Failed to save tasks to local storage', error)
		}
	}, [tasks])

	useEffect(() => {
		if (addingTask && inputRef.current) {
			inputRef.current.focus()
		}
	}, [addingTask])

	const handleAddTask = () => {
		setAddingTask(true)
	}

	const handleConfirmAdd = () => {
		if (newTaskText.trim()) {
			setTasks([
				...tasks,
				{ id: Date.now(), text: newTaskText.trim(), status: 'not-started' },
			])
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

	const handleDeleteTask = id => {
		setTaskToDelete(id)
	}

	const handleConfirmDelete = () => {
		setTasks(tasks.filter(task => task.id !== taskToDelete))
		setTaskToDelete(null)
	}

	const handleCancelDelete = () => {
		setTaskToDelete(null)
	}

	const handleToggleStatus = id => {
		const nextStatus = {
			'not-started': 'in-progress',
			'in-progress': 'completed',
			completed: 'not-started',
		}
		setTasks(
			tasks.map(task =>
				task.id === id ? { ...task, status: nextStatus[task.status] } : task
			)
		)
	}

	const handleSort = () => {
		if (sortMode === 'default') {
			setSortMode('status-asc')
		} else if (sortMode === 'status-asc') {
			setSortMode('status-desc')
		} else {
			setSortMode('default')
		}
	}

	const handleView = () => {
		if (viewMode === 'all') {
			setViewMode('active')
		} else if (viewMode === 'active') {
			setViewMode('completed')
		} else {
			setViewMode('all')
		}
	}

	const getSortedTasks = () => {
		const sortedTasks = [...tasks]
		if (sortMode === 'status-asc') {
			sortedTasks.sort((a, b) => {
				const statusOrder = { 'not-started': 1, 'in-progress': 2, completed: 3 }
				return statusOrder[a.status] - statusOrder[b.status]
			})
		} else if (sortMode === 'status-desc') {
			sortedTasks.sort((a, b) => {
				const statusOrder = { 'not-started': 1, 'in-progress': 2, completed: 3 }
				return statusOrder[b.status] - statusOrder[a.status]
			})
		}
		return sortedTasks
	}

	const getFilteredTasks = () => {
		const sortedTasks = getSortedTasks()
		if (viewMode === 'active') {
			return sortedTasks.filter(task => task.status !== 'completed')
		} else if (viewMode === 'completed') {
			return sortedTasks.filter(task => task.status === 'completed')
		}
		return sortedTasks
	}

	const filteredTasks = getFilteredTasks()

	const getSortButtonText = () => {
		if (sortMode === 'status-asc') return 'Status ↑'
		if (sortMode === 'status-desc') return 'Status ↓'
		return 'Sort'
	}

	const getViewButtonText = () => {
		if (viewMode === 'active') return 'Active'
		if (viewMode === 'completed') return 'Completed'
		return 'View All'
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
		exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
	}

	return (
		<>
			<GlobalStyle />
			<CenteredContainer>
				<Title>ToDo List</Title>
				<ContentBlock>
					<TopNavBar>
						<MainButton onClick={handleSort}>
							<SortIcon style={{ marginRight: '5px' }} /> {getSortButtonText()}
						</MainButton>
						<MainButton onClick={handleView}>
							<FilterListIcon style={{ marginRight: '5px' }} />{' '}
							{getViewButtonText()}
						</MainButton>
						<MainButton onClick={handleAddTask}>+</MainButton>
					</TopNavBar>
					<ListContainer>
						{addingTask && (
							<motion.div
								initial='hidden'
								animate='visible'
								exit='exit'
								variants={itemVariants}
							>
								<ListItemContainer>
									<ListItem>
										<AddInputWrapper>
											<AddInput
												ref={inputRef}
												type='text'
												value={newTaskText}
												onChange={handleChange}
												placeholder='New task..'
											/>
											<ConfirmButton onClick={handleConfirmAdd}>
												OK
											</ConfirmButton>
											<CancelButton onClick={handleCancelAdd}>X</CancelButton>
										</AddInputWrapper>
									</ListItem>
								</ListItemContainer>
							</motion.div>
						)}
						<AnimatePresence>
							{filteredTasks.map(task => (
								<motion.div
									key={task.id}
									initial='hidden'
									animate='visible'
									exit='exit'
									variants={itemVariants}
								>
									<ListItemContainer>
										<ListItem>
											{taskToDelete === task.id ? (
												<>
													<span>Delete "{task.text}"?</span>
													<ConfirmButton onClick={handleConfirmDelete}>
														Да
													</ConfirmButton>
													<CancelButton onClick={handleCancelDelete}>
														Нет
													</CancelButton>
												</>
											) : (
												<>
													<TaskStatus
														status={task.status}
														onClick={() => handleToggleStatus(task.id)}
													/>
													<span>{task.text}</span>
													<DeleteButton
														onClick={() => handleDeleteTask(task.id)}
													>
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
