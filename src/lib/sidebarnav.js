export const USER_CLASSES = {
  DEFAULT: "default",
  ADMIN: "admin",
  EXPERT: "expert",
  ANALYST: "analyst",
};

// Define navigation items with access control
export const navigationItems = {
  main: [
    {
      title: "Home",
      href: "/",
      icon: "/icons/home_icon.svg",
      access: [
        USER_CLASSES.DEFAULT,
        USER_CLASSES.ADMIN,
        USER_CLASSES.EXPERT,
        USER_CLASSES.ANALYST,
      ],
    },
    {
      title: "Experts",
      href: "/experts",
      icon: "/icons/experts_icon.svg",
      access: [USER_CLASSES.DEFAULT, USER_CLASSES.ADMIN],
    },
    {
      title: "Projects",
      href: "/projects",
      icon: "/icons/projects_icon.svg",
      access: [USER_CLASSES.DEFAULT, USER_CLASSES.ADMIN, USER_CLASSES.EXPERT],
    },
    {
      title: "Messages",
      href: "/messages",
      icon: "/icons/messages_icon.svg",
      access: [
        USER_CLASSES.DEFAULT,
        USER_CLASSES.ADMIN,
        USER_CLASSES.EXPERT,
        USER_CLASSES.ANALYST,
      ],
    },
    {
      title: "Reports",
      href: "/reports",
      icon: "/icons/reports_icon.svg",
      access: [USER_CLASSES.DEFAULT, USER_CLASSES.ADMIN, USER_CLASSES.ANALYST],
    },
    {
      title: "Analytics",
      href: "/analytics",
      icon: "/icons/analytics_icon.svg",
      access: [USER_CLASSES.ADMIN, USER_CLASSES.ANALYST],
    },
    {
      title: "Compliance",
      href: "/compliance",
      icon: "/icons/compliance_icon.svg",
      access: [USER_CLASSES.ADMIN],
    },
    {
      title: "Organizations",
      href: "/organizations",
      icon: "/icons/organizations_icon.svg",
      access: [USER_CLASSES.ADMIN],
    },
  ],
  footer: [
    {
      title: "Settings",
      href: "/settings",
      icon: "/icons/settings_icon.svg",
      access: [
        USER_CLASSES.DEFAULT,
        USER_CLASSES.ADMIN,
        USER_CLASSES.EXPERT,
        USER_CLASSES.ANALYST,
      ],
    },
    {
      title: "Help",
      href: "/help",
      icon: "/icons/help_icon.svg",
      access: [
        USER_CLASSES.DEFAULT,
        USER_CLASSES.ADMIN,
        USER_CLASSES.EXPERT,
        USER_CLASSES.ANALYST,
      ],
    },
  ],
};

// Helper function to filter nav items by user class
export function getNavItemsByUserClass(userClass = USER_CLASSES.DEFAULT) {
  console.log(
    navigationItems.main.filter((item) => item.access.includes(userClass))
  );

  return {
    main: navigationItems.main.filter((item) =>
      item.access.includes(userClass)
    ),

    footer: navigationItems.footer.filter((item) =>
      item.access.includes(userClass)
    ),
  };
}
