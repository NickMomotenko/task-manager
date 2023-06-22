export const routes = {
  base: "/",
  profile: { path: "/profile" },
  settings: { path: "/settings" },
  help: { path: "/help" },
};

export const navigationList = [
  { id: 1, title: "Projects", path: routes.base },
  { id: 2, title: "Profile", path: routes.profile },
  { id: 3, title: "Settings", path: routes.settings },
  { id: 4, title: "Help", path: routes.help },
];

export const authPathes = {
  login: "/auth/login",
  registration: "/auth/registration",
  mobile: "/auth/mobile",
  forgot: "/auth/forgot-password",
};
