import { Layout, Menu, MenuProps, theme } from "antd";
import { Outlet } from "react-router-dom";
import tanjeLogo from "../assets/tanjeLogo.png";

import Icon, {
  BookOutlined,
  HomeFilled,
  MenuOutlined,
  PhoneFilled,
} from "@ant-design/icons";
import { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";

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

// const items = new Array(3).fill(null).map((_, index) => ({
//   key: String(index + 1),
//   label: `nav ${index + 1}`,
// }));

type MenuItem = Required<MenuProps>["items"][number];
const items: MenuItem[] = [
  {
    label: <span className="menu-label">Home</span>,
    key: "mail",
    icon: <HomeFilled style={{ color: "white" }} className="menu-icon" />,
  },
  {
    label: <span className="menu-label">Menu</span>,
    key: "app",
    icon: <BookOutlined style={{ color: "white" }} className="menu-icon" />,
  },
  {
    label: <span className="menu-label">Catering</span>,
    key: "cat",
    icon: <MenuOutlined style={{ color: "white" }} className="menu-icon" />,
  },
  {
    label: <span className="menu-label">Contact</span>,
    key: "SubMenu",
    icon: <PhoneFilled style={{ color: "white" }} className="menu-icon" />,
    theme: "dark",
    children: [
      {
        type: "group",
        label: "",

        children: [
          {
            label: "Contact",
            key: "setting:1",
          },
          {
            label: "About",
            key: "setting:2",
          },
        ],
      },
    ],
  },
];

const RootLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className="flex flex-col  h-screen bg-white ">
      <Header
        className="bg-[#d8ad63]"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        {/* <div className="demo-logo">logo</div> */}
        <Menu
          theme="light"
          className="font-bold menu-hover-effect"
          direction="ltr"
          mode="horizontal"
          defaultSelectedKeys={["mail"]}
          items={items}
          style={{ flex: 1, minWidth: 0, fontSize: 20 }}
        />
        <span className="text-black">
          <TanjeIcon />
        </span>
      </Header>
      {/* style={{ padding: "0 48px" }} */}
      {/* className="max-w-[800px]" */}
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
