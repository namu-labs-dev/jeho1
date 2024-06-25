import { List } from "antd";
import SubscribeComponent from "../SubscribeComponent/SubscribeComponent";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import { CloseCircleOutlined } from "@ant-design/icons";
import { info } from "~/data/info";
import type * as svgs from "public/svg";

type drawerAtomProps = {
  handleDrawer: () => void;
  activeDrawer: boolean;
};

export const DrawerComponent = (props: drawerAtomProps) => {
  const { activeDrawer, handleDrawer } = props;
  return (
    <div
      style={{
        backgroundColor: "hsla(0,0%,9%,.5)",
      }}
      onClick={handleDrawer}
      className={`fixed right-0 top-0 z-50 flex h-[100vh] w-full justify-end transition-all duration-300 ease-linear ${activeDrawer ? "visible opacity-100" : "invisible opacity-0"}`}
    >
      <button
        onClick={handleDrawer}
        className='absolute right-[30px] top-[30px] z-30'
        type='button'
      >
        <CloseCircleOutlined className='text-[25px] text-white' />
      </button>
      <aside
        onClick={(e) => e.stopPropagation()}
        className={`relative z-20 h-[100vh] w-[500px] transition-all duration-300 ease-linear ${activeDrawer ? "right-0" : "-right-[500px]"} overflow-y-scroll bg-[#181818] px-[50px] pb-[50px] pt-[90px]`}
      >
        <div className='pointer-events-none absolute -bottom-[90px] -right-24 -z-10 h-[257px] w-[257px] overflow-hidden rounded-full bg-black' />
        <div>
          <SVGAtom iconName='logo' width={89} height={30} color='#ff4a17' />

          <h2 className='py-[35px] text-[22px] font-bold leading-[1.4em] text-white'>
            Do you have a project in your <br /> mind? Keep connect us.{" "}
          </h2>
        </div>
        <div className='py-[35px]'>
          <h2 className='mb-[35px] text-[18px] leading-[1.4em] text-white'>
            Contact Us
          </h2>

          <List
            itemLayout='horizontal'
            dataSource={info}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <SVGAtom
                      iconName={item.iconName as keyof typeof svgs}
                      width={24}
                      height={24}
                      color='#ff4a17'
                    />
                  }
                  title={
                    <p className='text-[17px] font-medium text-accentGrey'>
                      {item.title}
                    </p>
                  }
                />
              </List.Item>
            )}
          />
        </div>
        <SubscribeComponent />
        {/* <div className='my-[35px]'>
      <h2 className='mb-[35px] text-[18px] leading-[1.4em] text-white'>
        Subscribe
      </h2>
      <Space.Compact className='flex h-[50px] items-center rounded-[10px] bg-black px-[5px]'>
        <Input
          className='h-full border-none bg-black'
          placeholder='example@gmail.com'
        />
        <Button
          htmlType='button'
          type='default'
          className='h-[40px] rounded-[10px] border-none bg-accentRed'
        >
          Send
        </Button>
      </Space.Compact>

      <p className='mt-[25px] text-[16px] text-accentGrey'>
        At vero eos et accusamus et iusto odio as part dignissimos ducimus
        qui blandit.
      </p>
    </div> */}
        {/* <SocialIconCompent {...props.socialIconCompentProps} /> */}
        <ul className='flex items-center gap-[10px] py-[35px]'>
          {/* {footerlistitem.map((icon, index) => (
        <FooterList {...icon} key={index} />
      ))} */}
        </ul>
      </aside>
    </div>
  );
};
