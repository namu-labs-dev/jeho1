import { ServicePricingPackModule } from "~/components/Modules/Service/ServicePricingPackModule";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { HeaderModule } from "~/components/Modules/Header/HeaderModule";
import { FooterModule } from "~/components/Modules/Footer/FooterModule";
import { TestimonialModule } from "~/components/Modules/Testimonial/TestimonialModule";

type Props = {
  servicePricingPackModuleProps: React.ComponentProps<
    typeof ServicePricingPackModule
  >;
  headerModuleProps: React.ComponentProps<typeof HeaderModule>;
  footerModuleProps: React.ComponentProps<typeof FooterModule>;
};

export const ServiceTemplate = (props: Props) => {
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

      <Content style={{ overflow: "auto", marginTop: 100 }}>
        <TestimonialModule />
        <ServicePricingPackModule {...props.servicePricingPackModuleProps} />
      </Content>

      <FooterModule {...props.footerModuleProps} />
    </Layout>
  );
};
