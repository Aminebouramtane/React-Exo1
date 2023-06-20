import Navbar from "./components/layouts/Navbar";
import Sidebar from "./components/layouts/Sidebar";


function App() {
  return (
    <div className="container">
      <Navbar/>
      <div className="row">
        <div className="col-3">
          <Sidebar/>
        </div>
        <div className="col-9">
          home
        </div>
      </div>
    </div>

  );
}

export default App;
