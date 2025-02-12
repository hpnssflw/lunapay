export const routes = [
  {
    path: "/about-us",
    label: "About us",
  },
  {
    path: "/services",
    label: "Services",
  },
  {
    path: "/blog",
    label: "Blog",
  },
];

export const navLinkClasses = `
text-black hover:text-primary transition-colors duration-200
font-medium px-4 py-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
active:text-primary [&[data-active]]:bg-white [&[data-active]]:text-primary
`;
