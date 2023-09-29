import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { CreditCardOutlined, QueryStatsOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";



const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
        <span className="logo">iamadmin</span>
        </Link>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                <DashboardIcon/>
                   <span>Dashboard</span>
                </li>
                <p className="title">LISTS</p>
                <Link to="/users" style={{ textDecoration: "none" }}>

                <li>
                 <Person2OutlinedIcon className="icon"/>
                   <span>Users</span>
                </li>
                </Link>
                <Link to="/products" style={{ textDecoration: "none" }}>
                <li>
                <Inventory2OutlinedIcon className="icon"/>
                   <span>Products</span>
                </li>
                </Link>
                <li>
                 <CreditCardOutlined className="icon"/>
                   <span>Orders</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                <StorefrontOutlinedIcon className="icon"/>
                   <span>Useful</span>
                </li>
                <li>
                <QueryStatsOutlined className="icon" />
                   <span>Stats</span>
                </li>
                <li>
                <NotificationsNoneOutlinedIcon className="icon"/>
                   <span>Notification</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                <SettingsApplicationsOutlinedIcon className="icon"/>
                   <span>System Health</span>
                </li>
                <li>
                <FormatListBulletedOutlinedIcon className="icon"/>
                   <span>Logs</span>
                </li>
                <li>
                <SettingsSystemDaydreamOutlinedIcon className="icon" />
                   <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                <Person2OutlinedIcon className="icon" />
                   <span>Profile</span>
                </li>
                <li>
                <LogoutOutlinedIcon className="icon" />
                   <span>LogOut</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>


        </div>
    </div>
  )
}

export default Sidebar