import { createContext, useState } from 'react'
import { IUser } from './models/User'
import { UserContextState } from './types'

const contextDefaultValues: UserContextState = {
	user: undefined,
	setUserWallet: () => {},
	getUserWallet: () => {},
	clearUserWallet: () => {}
}

export const UserContext = createContext<UserContextState>(contextDefaultValues)

const UserProvider = ({ children }: any) => {
	const [user, setUserState] = useState<IUser | undefined>(undefined)

	const setUserWallet = (user: IUser) => {
		localStorage.setItem('wallet', user.wallet)
		setUserState({ wallet: user.wallet })
		getUserWallet()
	}

	const getUserWallet = () => {
		const wallet = localStorage.getItem('wallet')
		if (wallet !== null) {
			setUserState({ wallet })
		}
	}

	const clearUserWallet = () => {
		setUserState(undefined)
		localStorage.removeItem('wallet')
	}

	return (
		<UserContext.Provider
			value={{
				user,
				setUserWallet,
				getUserWallet,
				clearUserWallet
			}}>
			{children}
		</UserContext.Provider>
	)
}

export default UserProvider
