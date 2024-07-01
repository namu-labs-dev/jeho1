export type PackagelistProps = {
  title: string;
  priceMonthly: number;
  priceYearly: number;
  period: string;
  pricingListText: string[];
};
export const packagelist: PackagelistProps[] = [
  {
    title: "Standard",
    priceMonthly: 29,
    priceYearly: 59,
    period: "monthly",
    pricingListText: [
      "Static responsive website",
      "Video marketing",
      "Keywords research",
      "Facebook campaign",
      "eCommerce solution",
      "Google adword",
    ],
  },
  {
    title: "Professional",
    priceMonthly: 199,
    priceYearly: 399,
    period: "monthly",
    pricingListText: [
      "Static responsive website",
      "Video marketing",
      "Keywords research",
      "Facebook campaign",
      "eCommerce solution",
      "Google adword",
    ],
  },
  {
    title: "Ultimate",
    priceMonthly: 299,
    priceYearly: 599,
    period: "monthly",
    pricingListText: [
      "Static responsive website",
      "Video marketing",
      "Keywords research",
      "Facebook campaign",
      "eCommerce solution",
      "Google adword",
    ],
  },
];
