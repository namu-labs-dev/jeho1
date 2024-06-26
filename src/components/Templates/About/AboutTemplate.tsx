import { AboutOurAgencyModule } from "~/components/Modules/About/AboutOurAgencyModule";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { HeaderModule } from "~/components/Modules/Header/HeaderModule";
import { WhyChooseUsModule } from "~/components/Modules/WhyChooseUs/WhyChooseUsModule";
import { OurTeamModule } from "~/components/Modules/OurTeam/OurTeamModule";
import { FooterModule } from "~/components/Modules/Footer/FooterModule";

type Props = {
  aboutOurAgencyModuleProps: React.ComponentProps<typeof AboutOurAgencyModule>;
  headerModuleProps: React.ComponentProps<typeof HeaderModule>;
  whyChooseUsModuleProps: React.ComponentProps<typeof WhyChooseUsModule>;
  ourTeamModuleProps: React.ComponentProps<typeof OurTeamModule>;
  footerModuleProps: React.ComponentProps<typeof FooterModule>;
};

export const AboutTemplate = (props: Props) => {
  return (
    <Layout
      style={{
        height: "100%",
        backgroundColor: "transparent",
        overflow: "hidden",
        color: "white",
      }}
    >
      <HeaderModule {...props.headerModuleProps} />
      {/*
    <Header style={{ padding: 0, height: 50 }}>
    place for header module
    </Header>
    */}

      <Content style={{ overflow: "hidden" }} className='md:px-[1.2rem]'>
        <AboutOurAgencyModule {...props.aboutOurAgencyModuleProps} />
        <WhyChooseUsModule {...props.whyChooseUsModuleProps} />
        <OurTeamModule {...props.ourTeamModuleProps} />
      </Content>

      <Footer
        style={{
          backgroundColor: "transparent",
          overflow: "hidden",
          color: "white",
        }}
        className='md:px-[1.2rem]'
      >
        <FooterModule {...props.footerModuleProps} />
      </Footer>
    </Layout>
  );
};
