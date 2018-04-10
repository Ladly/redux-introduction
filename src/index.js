import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { rootReducer } from './store/store'
import registerServiceWorker from './registerServiceWorker'

import { store } from './store/store'
import { App } from './app/App'

ReactDOM.render(	
	<Provider store={store(rootReducer)}>
		<App />
	</Provider>
	, document.getElementById('root'))
registerServiceWorker()
