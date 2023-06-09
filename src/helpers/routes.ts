export const routes = {
  base: { path: "/" },
  profile: { path: "/profile" },
  settings: { path: "/settings" },
  help: { path: "/help" },
};

export const navigationList = [
  { id: 1, title: "Projects", path: routes.base.path },
  { id: 2, title: "Profile", path: routes.profile.path },
  { id: 3, title: "Settings", path: routes.settings.path },
  { id: 4, title: "Help", path: routes.help.path },
];

export const authPathes = {
  login: "/auth/login",
  registration: "/auth/registration",
  mobile: "/auth/mobile",
  forgot: "/auth/forgot-password",
};
