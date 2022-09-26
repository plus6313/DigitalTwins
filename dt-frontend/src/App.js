import { useState } from "react";
import "./App.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import image_greenArea from "./images/greenArea.jpg";
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
function App() {
    const [resText, setResText] = useState({data : "0"});
	const [startDate, setStartDate] = useState(new Date());
    const sendgreenAreaData = () => {
        let url =
            "http://localhost:3000/api/rice/greenArea/" +
            startDate +
            "?t=" +
            startDate +
            "&n=" +
            startDate;
        fetch(url)
            .then((res) => res.json())
            .then((Data) => {
                console.log(Data);
                setResText(Data);
            });
    };

    return (
        <div className="App">
            <p>請輸入日期：</p>
			<DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            <button onClick={sendgreenAreaData}>按我</button>
            <br />
            <br />
			<img src={image_greenArea} alt="image_greenArea"/>
            <p>是否接收成功：{resText.success === true ? "成功" : "失敗" }</p>
            <p>綠覆率：{resText.data*100}%</p>
        </div>
    );
}
export default App;