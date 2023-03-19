import './App.css';
import View from './components/View';
import ContextProvider from './context/CotextProvider'



function App() {
  return (
    <ContextProvider>
      <View />
    </ContextProvider>
  );
}

export default App;
