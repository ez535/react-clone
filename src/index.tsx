import { createRoot } from 'react-dom/client';
import {Button} from "./ui/button/";

const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('No root element');

const root = createRoot(rootElement);
root.render(<Button disabled={true}>Кнопка</Button>);