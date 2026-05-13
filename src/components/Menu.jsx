import './menu.css'
import Drawer from '@mui/material/Drawer';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CloseIcon from '@mui/icons-material/Close';
import ShimmerWhite from '../assets/shimmer-white.png'

function Menu({ open, onClose }) {
  return (
    <Drawer anchor="right" open={open} onClose={onClose} className="drawer-content">
      <Box className="menu-box">
        <Button onClick={onClose}>
          <CloseIcon sx={{color: '#fff'}}/>
        </Button>
        <div className='menu-content'>

          <a href="#home" className="nav-home">
            <img className="menu-icon" src={ShimmerWhite} alt="icon" />
            <span className="menu-special-letter">H</span>ome
          </a>
          <a href="#about" className="nav-about">
            <img className="menu-icon" src={ShimmerWhite} alt="icon" />
            <span className="menu-special-letter">A</span>bout
            </a>
          <a href="#stacks" className="nav-stack">
            <img className="menu-icon" src={ShimmerWhite} alt="icon" />
            <span className="menu-special-letter">S</span>tack
            </a>
          <a href="#project" className="nav-project">
            <img className="menu-icon" src={ShimmerWhite} alt="icon" />
            <span className="menu-special-letter">P</span>roject
            </a>
          <a href="#experience" className="nav-experience">
            <img className="menu-icon" src={ShimmerWhite} alt="icon" />
            <span className="menu-special-letter">E</span>xperience
            </a>
          <a href="#contact" className="nav-contact">
            <img className="menu-icon" src={ShimmerWhite} alt="icon" />
            <span className="menu-special-letter">C</span>ontact</a>
        </div>
      </Box>
    </Drawer>
  );
}

export default Menu;