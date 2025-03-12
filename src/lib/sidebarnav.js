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
      href: "/app",
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
      href: "/app/experts",
      icon: "/icons/experts_icon.svg",
      access: [USER_CLASSES.DEFAULT, USER_CLASSES.ADMIN],
    },
    {
      title: "Projects",
      href: "/app/projects",
      icon: "/icons/projects_icon.svg",
      access: [USER_CLASSES.DEFAULT, USER_CLASSES.ADMIN, USER_CLASSES.EXPERT],
    },
    {
      title: "Messages",
      href: "/app/messages",
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
      href: "/app/reports",
      icon: "/icons/reports_icon.svg",
      access: [USER_CLASSES.DEFAULT, USER_CLASSES.ADMIN, USER_CLASSES.ANALYST],
    },
    {
      title: "Analytics",
      href: "/app/analytics",
      icon: "/icons/analytics_icon.svg",
      access: [USER_CLASSES.ADMIN, USER_CLASSES.ANALYST],
    },
    {
      title: "Compliance",
      href: "/app/compliance",
      icon: "/icons/compliance_icon.svg",
      access: [USER_CLASSES.ADMIN],
    },
    {
      title: "Organizations",
      href: "/app/organizations",
      icon: "/icons/organizations_icon.svg",
      access: [USER_CLASSES.ADMIN],
    },
  ],
  footer: [
    {
      title: "Settings",
      href: "/app/settings",
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
      href: "/app/help",
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
