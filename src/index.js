import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import MeisterForm from './components/container/MeisterForm';


// Bootstrap Application
render(
    <Provider store={configureStore()}>
        <CssBaseline />
        <MeisterForm />
    </Provider>,
    document.getElementById('root')
);
