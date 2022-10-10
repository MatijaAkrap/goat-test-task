import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import goatLogo from './../../assets/img/goat_logo.png'
import { PublicKey } from '@solana/web3.js'
import { getProvider } from '../../utils'
import { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext/UserContext'

interface Props {
	window2?: () => Window
}

const drawerWidth = 240
const navItems = ['Earn', 'Partners', 'Leaderboard']

export default function DrawerAppBar(props: Props) {
	const { window2 } = props
	const [mobileOpen, setMobileOpen] = React.useState(false)
	const provider = getProvider()
	const { user } = useContext(UserContext)
	const { getUserWallet } = useContext(UserContext)
	const { setUserWallet } = useContext(UserContext)

	useEffect(() => {
		if (getUserWallet) {
			getUserWallet()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen)
	}

	const handleAccessSolana = async () => {
		if (!user) {
			if (provider) {
				provider.on('connect', (publicKey: PublicKey) => {
					setUserWallet({ wallet: publicKey.toBase58() })
				})
				provider.connect().catch((error: any) => {
					console.log('login error', error)
				})
			} else {
				window.open('https://phantom.app/', '_blank')
			}
		}
	}

	const handleFormatWalletAddress = (walletAddress: string) => {
		const firstThree = walletAddress.substring(0, 3)
		const lastThree = walletAddress.substring(walletAddress.length - 3)

		return firstThree + '...' + lastThree
	}

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
			<img src={goatLogo} alt='vetzy_icon' />
			<Divider />
			<List>
				{navItems.map((item, i) => (
					<ListItem key={item} disablePadding>
						<ListItemButton sx={{ textAlign: 'center' }}>
							<ListItemText primary={item} />
						</ListItemButton>
					</ListItem>
				))}
				<Button className='wallet-btn' onClick={handleAccessSolana}>
					{user ? 'Invite & Earn' : 'Create wallet'}
				</Button>
				{user && <span className='wallet-address'>{handleFormatWalletAddress(user.wallet)}</span>}
			</List>
		</Box>
	)

	const container = window2 !== undefined ? () => window2().document.body : undefined

	return (
		<Box sx={{ display: 'flex' }}>
			<AppBar component='nav'>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}>
						<MenuIcon />
					</IconButton>
					<img src={goatLogo} alt='vetzy_icon' />
					<Box>
						{navItems.map(item => (
							<Button key={item} sx={{ color: '#fff' }}>
								{item}
							</Button>
						))}
						<Button className='wallet-btn' onClick={handleAccessSolana}>
							{user ? 'Invite & Earn' : 'Create wallet'}
						</Button>
						{user && <span className='wallet-address'>{handleFormatWalletAddress(user.wallet)}</span>}
					</Box>
				</Toolbar>
			</AppBar>
			<Box component='nav'>
				<Drawer
					container={container}
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
					}}>
					{drawer}
				</Drawer>
			</Box>
		</Box>
	)
}
