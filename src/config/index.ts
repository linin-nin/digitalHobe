export const PRODUCT_CATEGORIES = [
    {
        label: "UI Kits",
        value: "ui_kits" as const,
        feature : [
            {
                name: "Editor picks",
                href: "#",
                imageSrc: "/nav/ui-kits/mixed.jpg"
            },
            {
                name: "New Arrivals",
                href: "#",
                imageSrc: "/nav/ui-kits/blue.jpg"
            },
            {
                name: "Bestseller",
                href: "#",
                imageSrc: "/nav/ui-kits/purple.jpg"
            },
        ]
    },
    {
        label: "Icon",
        value: "icons" as const,
        feature : [
            {
                name: "FavoriteIcon Picks",
                href: "#",
                imageSrc: "/nav/icons/picks.jpg"
            },
            {
                name: "New Arrivals",
                href: "#",
                imageSrc: "/nav/icons/new.jpg"
            },
            {
                name: "Bestselling icons",
                href: "#",
                imageSrc: "/nav/icons/bestsellers.jpg"
            },
        ]
    },
]