import "./navbar.scss"
import {  LanguageOutlined, ListOutlined, SearchOutlined } from "@mui/icons-material";
import { DarkModeOutlined } from "@mui/icons-material";
import { FullscreenExitOutlined } from "@mui/icons-material";
import NotificationsNoneOutlined from "@mui/icons-material/NotificationsNoneOutlined";
import { ChatBubbleOutlineOutlined } from "@mui/icons-material";




const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
      <div className="search">
      <input type="text" placeholder="search..." />
      <SearchOutlined />
  </div>

  <div className="items">
    <div className="items">
      <LanguageOutlined  className="icon"/>
      English
    </div>
    <div className="item">
      <DarkModeOutlined className="icon"/>
    </div>
    <div className="item">
      <FullscreenExitOutlined className="icon"/>
    </div>
    <div className="item">
      <NotificationsNoneOutlined className="icon"/>
      <div className="counter">1</div>
    </div>
    <div className="item">
      <ChatBubbleOutlineOutlined className="icon"/>
      <div className="counter">2</div>
    </div>
    <div className="item">
      <ListOutlined className="icon"/>
    </div>
      </div>
      </div>
    </div>
  );
};

export default Navbar;