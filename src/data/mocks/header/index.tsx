import { HeaderMockData } from "./header-mock.types";

export const HEADER_MOCK_DATA: HeaderMockData = {
  navbarMain: [
    {
      children: "Initiatives & Campaigns",
      variant: "link",
      unstyled: true,
    },
    {
      children: "Get Involved",
      variant: "link",
      unstyled: true,
    },
    {
      children: "About GRF",
      variant: "link",
      unstyled: true,
    },
    {
      children: "News & Stories",
      variant: "link",
      unstyled: true,
    },
    {
      children: "Give",
      variant: "button",
      invert: true,
      unstyled: false,
    },
  ],
  navbarAdmin: [
    {
      children: "Donations",
    },
  ],
};
