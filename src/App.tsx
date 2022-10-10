import './style/App.scss'
import AppBar from './components/appBar/AppBar'
import AppContent from './components/appContent/AppContent'
import UserProvider from '../src/context/UserContext'

function App() {
	return (
		<div className='App'>
			<UserProvider>
				<AppBar />
				<AppContent />
			</UserProvider>
		</div>
	)
}

export default App
