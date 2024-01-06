import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import PersonIcon from "@mui/icons-material/Person";

export default function MenuIcons() {
  return (
    <>
    <div className="ml-4 cursor-pointer">
      <DarkModeIcon/>

    </div>
    <div className="ml-4 cursor-pointer">

      <PersonIcon/>
    </div>
    </>
  );
}
