import { Grid, Box } from '@mui/material'

interface IEmptyBoxesStateProps {
	numberOfBoxes: number
}

const EmptyBoxes = (props: IEmptyBoxesStateProps) => {
	return (
		<>
			{[...Array(props.numberOfBoxes)].map((e, i) => (
				<Box className='empty-box' />
			))}
		</>
	)
}

export default EmptyBoxes
