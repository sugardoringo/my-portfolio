import Button from "@mui/material/Button";
import './MenuButton.css'

function MenuButton({ onClick }) {
  return (
    <Button variant="contained" onClick={onClick} className="nav-menu">
      Menu
    </Button>
  );
}

export default MenuButton;