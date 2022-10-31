import './App.css';
import Checkbox from './Checkbox'
import LessText from './LessText'
import InputPhrase from './InputPhrase'
import InputPhraseND from './InputPhraseNoDependency'
import Example from './count'
import Counter from './reducerex'
import ShoppingList from './shoppinglist'
import CustomTextInput from './simpleRef'; 

function App() {
  return (
    <div className="App">
          <div className="component"><Checkbox /> </div> 
          <div className="component"><Example /> </div> 
          <div className="component"><LessText
              text={`Focused, hard work is the real key
                to success. Keep your eyes on the goal, 
                and just keep taking the next step 
                towards completing it.`}
              maxLength={35}  />
              </div> 
          <div className="component"><InputPhrase /></div> 
          <div className="component"><InputPhraseND /></div> 
          <div className="component"><Counter /></div> 
          <div className="component"><CustomTextInput /></div> 
          <div className="component"><ShoppingList /></div> 
    </div>
  );
}
   
export default App;
