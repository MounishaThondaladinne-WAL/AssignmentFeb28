import './App.css';
import RandomActivity from './RandomActivity25feb';
import './RandomActivityfeb25.css';
import Hoc from './HocExam';
import Subjects from './subjectsExam';
import LibraryFormik from './LibraryExamFormik';
import UserPersonalInfo from './ExampleUseContext/UsePersonalInfo';
import UserProfessionalInfo from './ExampleUseContext/UseProfessionalInfo';
import UserObContext from './ExampleUseContext/UserObContext';
import CountReducer from './ExampleUseReducer/CountReducer';
import CounterUseReducer from './ExampleUseReducer/CounterUseReducer';
function App() {
  const ModifiedSubjects = Hoc(Subjects);
  const userOb = {
    personal: { name: "Karthik", phoneNo: 99919212 },
    professional: { company: "Westsideagile", designation: "Engineer" },
  };
  return (
    <div className="App">
      <CounterUseReducer/>
      <UserObContext.Provider value={userOb}>
      <UserPersonalInfo />
      <UserProfessionalInfo />
      </UserObContext.Provider>
      {/*<ModifiedSubjects/>
      <RandomActivity></RandomActivity>
      <LibraryFormik></LibraryFormik>*/}
  </div>
  );
}

export default App;
