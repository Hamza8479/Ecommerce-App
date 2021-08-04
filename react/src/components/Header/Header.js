import React, { useState } from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  LayoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { SubMenu, Item } = Menu;

const Header = () => {
  //   const [state, setState] = useState("todo");

  //   const handleClick = (e) => {
  //     setState(e.key);
  //   };

  return (
    <Menu style={{ display: "flex", listStyleType: "none" }}>
      <Item icon={<HomeOutlined />} className="p-2">
        <Link to="/">Todo</Link>
      </Item>
      <Item icon={<LayoutOutlined />} className="p-2">
        <Link to="/layout">Layout</Link>
      </Item>
    </Menu>
  );
};

export default Header;
