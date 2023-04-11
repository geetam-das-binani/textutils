import { useState } from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Alert from "./Components/Alert";
import Textform from "./Components/Textform";
import { BrowserRouter,Routes,Route } from "react-router-dom";


function App() {
	const [darkmode, setdarkmode] = useState("light");
	const [btn, setbtn] = useState("Enable dark mode");
	const [btn1, setbtn1] = useState("Enable red mode");
	const [btn2, setbtn2] = useState("Enable yellow mode");
	const [alrt, setalrt] = useState(null);
	
	      let showalert = (message, type) => {
	        setalrt({ msg: message, type: type });
	        setTimeout(()=>{
	          setalrt(null)
	        },1000)

	      }
	      let togglemode = () => {
	        if (darkmode === 'light') {
	          setdarkmode('dark');
	          setbtn("Enable light mode");
	         document.body.style.backgroundColor = "#808a78";
	        showalert("Dark Mode Enabled", "success");
	

	        }
	         else {
	          setdarkmode("light");
	          setbtn("Enable dark mode");
	          document.body.style.backgroundColor = "white";
	          showalert("Dark Mode Disabled", "success");
			 

	        }
	      }
	      let togglemode1=()=>{
	        if(darkmode==='light'){
	          setdarkmode('danger')
	          document.body.style.backgroundColor = "#b00f1e";
	          setbtn1('Enable light mode')
	          showalert("Red Mode Enabled", "success");

	        }
	        else{
	          setdarkmode('light')
	          document.body.style.backgroundColor = "white";
	          setbtn1('Enable red mode')
	          showalert("Red Mode Disabled", "success");
	        }
	      }

		  let togglemode2=()=>{
	        if(darkmode==='light'){
	          setdarkmode('warning')
	          document.body.style.backgroundColor = "#b9b932";
	          setbtn2('Enable light mode')
	          showalert("Yellow Mode Enabled", "success");

	        }
	        else{
	          setdarkmode('light')
	          document.body.style.backgroundColor = "white";
	          setbtn2('Enable yellow mode')
	          showalert("Yellow Mode Disabled", "success");
	        }
	      }


	return (
		<BrowserRouter>
	<Navbar	title="TextUtils"	button={btn} button1={btn1} button2={btn2} mode={darkmode}  togglemode={togglemode} togglemode1={togglemode1} togglemode2={togglemode2}/> 
		<Alert alert={alrt} />
			<Routes>
			<Route  path="/" element={<Textform heading="Enter the text to analyze below" mode={darkmode}  alert={showalert}/>} />
			<Route  path="about" element={<About heading="About Us" mode={darkmode}/> }/>
			</Routes>
		</BrowserRouter>
  
	);
}
export default App;

