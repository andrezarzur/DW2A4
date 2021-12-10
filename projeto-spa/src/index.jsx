import {render} from 'react-dom'
import {App} from './App'
import { BrowserRouter } from 'react-router-dom';

render((
    <BrowserRouter>
      <App /> {/* The various pages will be displayed by the `Main` component. */}
    </BrowserRouter>
  ), document.getElementById('root')
);
