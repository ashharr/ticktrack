import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import FourthComponent from './FourthComponent';
import {FifthComponent} from './FirstComponent';


export default function LearningComponent(){
    return(<div className="LearningComponent">
      My Todo Application
      <FirstComponent/>
      <SecondComponent/>
      <ThirdComponent/>
      <FourthComponent/>
      <FifthComponent/>
    </div>
    );
}