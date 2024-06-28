import { PortfolioOurPortfolioWorkModule } from "~/components/Modules/Portfolio/PortfolioOurPortfolioWorkModule";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { FooterModule } from "~/components/Modules/Footer/FooterModule";
import { HeaderModule } from "~/components/Modules/Header/HeaderModule";

type Props = {
  portfolioOurPortfolioWorkModuleProps: React.ComponentProps<
    typeof PortfolioOurPortfolioWorkModule
  >;
  footerModuleProps: React.ComponentProps<typeof FooterModule>;
  headerModuleProps: React.ComponentProps<typeof HeaderModule>;
};

export const PortfolioTemplate = (props: Props) => {
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

      <Content style={{ overflow: "auto" }}>
        <PortfolioOurPortfolioWorkModule
          {...props.portfolioOurPortfolioWorkModuleProps}
        />
      </Content>

      <Footer
        style={{
          backgroundColor: "transparent",
          overflow: "hidden",
          color: "white",
          padding: 0,
        }}
        className='md:px-[1.2rem]'
      >
        <FooterModule {...props.footerModuleProps} />
      </Footer>
    </Layout>
  );
};
