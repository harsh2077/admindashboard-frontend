import { useState } from "react";
import { Menu, MenuItem} from "react-pro-sidebar";
import { Sidebar } from 'react-pro-sidebar'; // prosidebar has been changed to sidebar
import 'react-pro-sidebar/dist/css/styles.css';
import { Box,IconButton,Typography, colors, useTheme } from "@mui/material";
import { Link, NavLink ,useLocation } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon  from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon  from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon  from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon  from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { useNavigate } from "react-router-dom";
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <NavLink to={to} state={{ some: "value" }}>
    <MenuItem
      active={selected === title}
      style={{
        color: colors.redAccent[500],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
    
      <Typography>{title}</Typography>
  
    </MenuItem> </NavLink>
  );
};

const Sidebars = () => {
     const theme = useTheme();
     const colors = tokens(theme.palette.mode);
     const [isCollapsed, setIsCollapsed] =useState(false);// whether the bar is there or not 
     const[selected,setSelected] =useState("Dashboard");  // selected will represnt what page are at 
     // we are overiding a library so we need to use importnat
     let { state } = useLocation();
     return (
     <Box 
         
     >
<Sidebar collapsed={isCollapsed}
style={{
  ...theme.palette.mode === "dark"? {background:"#f0f8ff"} : {background:"#f5f5f5"}
}}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[500],
              backgroundColor: colors.grey[200],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.primary[500]}>
                 admin
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.primary[500]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  harsh h
                </Typography>
                <Typography variant="h5" color={colors.blueAccent[600]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.blueAccent[700]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.blueAccent[600]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.blueAccent[600]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
     </Box>
          )
}

export default Sidebars;