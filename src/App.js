import Checkbox from './Checkbox'
import LessText from './LessText'
import InputPhrase from './InputPhrase'
import InputPhraseND from './InputPhraseNoDependency'
import UserProfile from './UserProfilewChildren'

function App() {
  const friends=[{id:1,name:'Jamie'},{id:2,name:'Jim'},{id:3,name:'James'}]
  return (
    <div className="App">
           <Checkbox /><br/>
           <LessText
              text={`Focused, hard work is the real key
                to success. Keep your eyes on the goal, 
                and just keep taking the next step 
                towards completing it.`}
              maxLength={35}  />
               <br/>
          <InputPhrase />
          <InputPhraseND />
          <UserProfile friends={friends} displayName= "Friends" />
 
    </div>
  );
}
   
export default App;
