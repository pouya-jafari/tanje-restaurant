import { Layout, Menu, Dropdown, Button, theme, MenuProps } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import tanjeLogo from "../assets/tanjeLogo.png";
import Icon, {
  BookOutlined,
  HomeFilled,
  PhoneFilled,
  MenuOutlined,
} from "@ant-design/icons";
import { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const { Header, Content } = Layout;

const CustomIcon = () => {
  return (
    <img
      src={tanjeLogo}
      alt="custom icon"
      style={{ width: "70px", height: "60px" }}
    />
  );
};

const TanjeIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={CustomIcon} {...props} />
);

type MenuItem = Required<MenuProps>["items"][number];

const RootLayout = () => {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  const handleNavigateIntro = () => {
    navigate("/");
  };
  const handleNavigateHome = () => {
    navigate("/home");
  };
  const handleNavigateMenu = () => {
    navigate("/home/menu");
  };
  const handleNavigateContact = () => {
    navigate("/home/contact");
  };

  const menuItems: MenuItem[] = [
    {
      label: "Home",
      key: "home",
      icon: <HomeFilled />,
      onClick: handleNavigateHome,
    },
    {
      label: "Menu",
      key: "menu",
      icon: <BookOutlined />,
      onClick: handleNavigateMenu,
    },
    {
      label: "Contact",
      key: "contact",
      icon: <PhoneFilled />,
      onClick: handleNavigateContact,
    },
  ];

  const menu = <Menu items={menuItems} />;

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    // className="bg-[#d8ad63]"

    // <Menu

    // />
    // <span className="text-black" onClick={handleNavigateIntro}>
    //   <TanjeIcon />
    // </span>

    <Layout className="flex flex-col h-screen bg-white">
      <Header
        className="bg-[#d8ad63] items-center"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        {isSmallScreen ? (
          <Dropdown overlay={menu} trigger={["click"]}>
            <Button
              icon={
                <MenuOutlined style={{ fontSize: "24px", color: "white" }} />
              }
              type="text"
              style={{ border: "none" }}
            />
          </Dropdown>
        ) : (
          <Menu
            theme="light"
            className="font-bold menu-hover-effect"
            direction="ltr"
            mode="horizontal"
            defaultSelectedKeys={["mail"]}
            items={menuItems}
            style={{ flex: 1, minWidth: 0, fontSize: 20 }}
          />
        )}
        <span
          className="text-black cursor-pointer mr-auto pt-5"
          onClick={handleNavigateIntro}
        >
          <TanjeIcon />
        </span>
      </Header>

      <Content>
        <div
          style={{
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </div>
      </Content>
    </Layout>
  );
};

export default RootLayout;
