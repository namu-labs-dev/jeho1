import { HomeContentModule } from "~/components/Modules/Home/HomeContentModule";
  import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";

type Props = {
  homeContentModuleProps: React.ComponentProps<typeof HomeContentModule>;
};

export const HomeTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%" }}>
    {/*
    <Header style={{ padding: 0, height: 50 }}>
    place for header module
    </Header>
    */}

    <Content style={{ overflow: "auto" }}>
           <HomeContentModule {...props.homeContentModuleProps}  />
    </Content>

    {/*
    <Footer style={{ padding: 0, minHeight: 50 }}>
    place for footer module
    </Footer>
    */}
  </Layout>
  );
};
  