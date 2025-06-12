import './App.css'
import WelcomingMessage from './components/WelcomingMessage/WelcomingMessage.tsx';
import { StyleExample } from './components/StyleExample/StyleExample.tsx';

// 1. Functional component

function App() {
const title = 'Hello from first React App!';

const studentName = "John Doe";
const studentAge = 20;
const isEnroled = false;

const displayTodayDate = () => {
const dateString = new Date().toISOString();
  return dateString
}

// 2. JSX expression must have 1 CONTAINER(PARENT) element
  return (
    <div>
   <h1>
    {title}
   </h1>
   <p>
    Today we will learn React.
   </p>
   <hr />
   <h2>JSX</h2>
   <p>Student fullname: {studentName}</p>
   <p>Student age: {studentAge}</p>
   <p>Today is: {displayTodayDate()}</p>

   {/* Conditional rendering */}
   {isEnroled ? <p>Yes Student is enrolled</p> : <p>No Student is not enrolled</p> }

   {studentAge >= 18 && (
    <p> Student is adult.</p>
   )}

   <hr />
   <h2>Components</h2>
   {/* HTML => Selfo closing tag 
   This is the wat yo RENDER the component
   */} 
   <WelcomingMessage />
   <hr />
  <h2>Style Component</h2>
  <StyleExample />
   </div>
  )
}

export default App
