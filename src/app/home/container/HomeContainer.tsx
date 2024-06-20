import { HomeTemplate } from "~/components/Templates/Home/HomeTemplate";

export const HomeContainer = () => {

  const homeTemplateProps: React.ComponentProps<typeof HomeTemplate> = {
    homeContentModuleProps: { title: "HomeContentModule" },
  };

  return <HomeTemplate {...homeTemplateProps} />;
};
