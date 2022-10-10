import { Box } from '@mui/material'
import EmptyBoxes from './EmptyBoxes'
import pointer from './../../assets/img/pointer.png'

const AppContent = () => {
	return (
		<Box className='app-content-container'>
			<Box className='app-content'>
				<EmptyBoxes numberOfBoxes={36} />
				<Box className='balance-box'>
					<div className='sub-container'>{'$2'}</div>
				</Box>
				<Box className='first-time-box'>
					<div className='left-container'>
						<span>{'Invite & Earn - Bonus Phase'}</span>
						<span>{'Earn $2 for every person you invited who completes verification'}</span>
					</div>
					<button>{'Invite & Earn'}</button>
				</Box>
				<Box className='create-box'>
					<div className='title-row'>
						<h3>{'Create'}</h3>
						<img src={pointer} alt='' />
					</div>
					<p>{'Create a Wallet in seconds'}</p>
				</Box>
				<Box className='verify-box'>
					<div className='title-row'>
						<h3>{'Verify'}</h3>
						<img src={pointer} alt='' />
					</div>
					<p>{'Connect your identities'}</p>
				</Box>
				<Box className='earn-box'>
					<div className='title-row'>
						<h3>{'Earn'}</h3>
						<img src={pointer} alt='' />
					</div>
					<p>{'Get paid in under 5 minutes.'}</p>
				</Box>
				<Box className='dolla-box'>
					<div className='sub-container'>$</div>
				</Box>
				<Box className='get-started-box'>
					<h1>{'Get started'}</h1>
					<p className='block3-subtitle'>{'Your Web3 journey begins here'}</p>
					<div className='btn-container'>
						<button className='create-btn'>{'Create'}</button>
						<span>{'OR'}</span>
						<button className='connect-btn'>{'Connect Wallet'}</button>
					</div>
				</Box>
				<Box className='info-box-1'>
					<div>
						<h2>{'$150'}</h2>
						<p className='subtitle'>{'Earnable right now'}</p>
					</div>
				</Box>
				<Box className='info-box-2'>
					<div>
						<h2>{'$765k'}</h2>
						<p className='subtitle'>{'Money Platform Earn'}</p>
					</div>
				</Box>
				<Box className='info-box-3'>
					<div className='top-earner'>
						{/* <img src={logo} alt='' /> */}
						<div className='user-data'>
							<p className='username'>{'Clark Kent'}</p>
							<p className='id'>{'0XDA...A1'}</p>
						</div>
					</div>
					<div>
						<h2>{'$1,457'}</h2>
						<p className='subtitle'>{'Top Monthly Earner'}</p>
					</div>
				</Box>
				<Box className='info-box-4'>
					<div>
						<h2>{'1.2m'}</h2>
						<p className='subtitle'>{'Tasks completed'}</p>
					</div>
				</Box>
			</Box>
		</Box>
	)
}

export default AppContent
