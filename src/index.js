import React from 'react';
import ReactDom from 'react-dom';
import Root from './containers/Root';
import { configure } from 'mobx';

configure({ enforceActions: 'always' });

ReactDom.render(<Root />, document.getElementById('root'));
