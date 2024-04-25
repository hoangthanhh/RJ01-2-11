import './App.css';
import Info from './components/Info';

function App() {
  const data =
  {
    id: 1,
    name: "NGUYỄN VĂN A",
    job: "Nhân viên kinh doanh",
    birthday: "19/05/1992",
    email: "hotro@topcv.vn",
    address: "So 10, duong 10, Top CV",
    phoneNumber: "(024) 6680 5588",
    fb: "https://fb.com/topcv.vn",
    sex: "Nam",
  };
  return (
    <div>
      <Info userData={data}/>
    </div>
  );
}

export default App;
