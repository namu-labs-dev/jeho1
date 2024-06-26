import { HomeContentModule } from "~/components/Modules/Home/HomeContentModule";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { HomeHeaderModule } from "~/components/Modules/Home/HomeHeader/HomeHeaderModule";
import { WhatCanWeDoModule } from "~/components/Modules/WhatCanWeDo/WhatCanWeDoModule";
import { VideoModule } from "~/components/Modules/Video/VideoModule";
import { ParnterModule } from "~/components/Modules/Parnter/ParnterModule";
import { FooterModule } from "~/components/Modules/Footer/FooterModule";
import { HomeBlogModule } from "~/components/Modules/Home/HomeBlog/HomeBlogModule";
import { OurTeamModule } from "~/components/Modules/OurTeam/OurTeamModule";
import { OurAwardModule } from "~/components/Modules/OurAward/OurAwardModule";
import { LatestProjectModule } from "~/components/Modules/LatestProject/LatestProjectModule";
import { TestimonialModule } from "~/components/Modules/Testimonial/TestimonialModule";

type Props = {
  whatCanWeDoModuleProps: React.ComponentProps<typeof WhatCanWeDoModule>;
  homeHeaderModuleProps: React.ComponentProps<typeof HomeHeaderModule>;
  footerModuleProps: React.ComponentProps<typeof FooterModule>;
};

export const HomeTemplate = (props: Props) => {
  return (
    <Layout
      style={{
        height: "100%",
        backgroundColor: "transparent",
        overflow: "hidden",
        color: "white",
      }}
    >
      <HomeHeaderModule {...props.homeHeaderModuleProps} />

      <Content style={{ overflow: "hidden" }}>
        <WhatCanWeDoModule {...props.whatCanWeDoModuleProps} />
        <LatestProjectModule />
        <OurAwardModule />
        <VideoModule />
        <OurTeamModule />
        <TestimonialModule />
        <HomeBlogModule />
        <ParnterModule />
      </Content>

      <FooterModule {...props.footerModuleProps} />
      {/*
    <Footer style={{ padding: 0, minHeight: 50 }}>
    place for footer module
    </Footer>
    */}
    </Layout>
  );
};
