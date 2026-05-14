import './menu.css'
import Drawer from '@mui/material/Drawer';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CloseIcon from '@mui/icons-material/Close';
import ShimmerWhite from '../assets/shimmer-white.png'

import { Link } from "react-router-dom";


function Menu({ open, onClose }) {
  return (
    <Drawer anchor="right" open={open} onClose={onClose} className="drawer-content">
      <Box className="menu-box">
        <Button onClick={onClose}>
          <CloseIcon sx={{color: '#fff'}}/>
        </Button>
        <div className='menu-content'>

          <Link to="/" className="nav-home" onClick={onClose}>
            <img className="menu-icon" src={ShimmerWhite} alt="icon" />
            <span className="menu-special-letter">H</span>ome
          </Link>

          <Link to="/about" className="nav-about" onClick={onClose}>
            <img className="menu-icon" src={ShimmerWhite} alt="icon" />
            <span className="menu-special-letter">A</span>bout
          </Link>

          <Link to="/stacks" className="nav-stack" onClick={onClose}>
            <img className="menu-icon" src={ShimmerWhite} alt="icon" />
            <span className="menu-special-letter">S</span>tack
          </Link>

          <Link to="/projects" className="nav-project" onClick={onClose}>
            <img className="menu-icon" src={ShimmerWhite} alt="icon" />
            <span className="menu-special-letter">P</span>roject
          </Link>

          <Link to="/experience" className="nav-experience" onClick={onClose}>
            <img className="menu-icon" src={ShimmerWhite} alt="icon" />
            <span className="menu-special-letter">E</span>xperience
          </Link>

          <Link to="/contact" className="nav-contact" onClick={onClose}>
            <img className="menu-icon" src={ShimmerWhite} alt="icon" />
            <span className="menu-special-letter">C</span>ontact
          </Link>
        </div>
      </Box>
    </Drawer>
  );
}

export default Menu;