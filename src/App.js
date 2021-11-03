import Checkbox from './Checkbox'
import LessText from './LessText'
import InputPhrase from './InputPhrase'
import InputPhraseND from './InputPhraseNoDependency'
import Example from './count'

function App() {
  return (
    <div className="App">
           <Checkbox /><br/>
           <Example />
           <LessText
              text={`Focused, hard work is the real key
                to success. Keep your eyes on the goal, 
                and just keep taking the next step 
                towards completing it.`}
              maxLength={35}  />
               <br/>
          <InputPhrase />
          <InputPhraseND />
 
    </div>
  );
}
   
export default App;
