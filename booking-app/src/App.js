import './App.css';
import {BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import {FaCalendarAlt, FaDoorOpen, FaUsers} from "react-icons/all";
import BookablesPage from "./components/Bookables/BookablesPage";
import BookingsPage from "./components/Bookings/BookingsPage";
import UsersPage from "./components/Users/UsersPage";

function App() {
  return (
      <Router>
        <div className="App">
            <header>
              <nav>
                <ul>
                  <li>
                    <Link to="/bookings" className={'btn btn-header'}>
                      <FaCalendarAlt />
                      <span id="bookings">Bookings</span>
                    </Link>
                  </li>
                    <li>
                        <Link to="/bookables" className={'btn btn-header'}>
                            <FaDoorOpen />
                            <span id="bookables">Bookables</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/users" className={'btn btn-header'}>
                            <FaUsers />
                            <span id="users">Users</span>
                        </Link>
                    </li>
                </ul>
              </nav>
            </header>
            <Routes>
                <Route path="/bookings" element={<BookingsPage />} />
                <Route path="/bookables" element={<BookablesPage />} />
                <Route path="/users" element={<UsersPage />} />
            </Routes>
        </div>
      </Router>

  );
}

export default App;
