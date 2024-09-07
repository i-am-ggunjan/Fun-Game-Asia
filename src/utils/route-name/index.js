import { FaHome } from "react-icons/fa";
import { BiUser, BiUserPlus, BiSolidPaperPlane, BiGame, BiHistory, BiMoneyWithdraw } from "react-icons/bi";
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PeopleIcon from '@mui/icons-material/People';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import HomeIcon from '@mui/icons-material/Home';

export const RouteName = [
    {
        path: "/",
        name: "Dashboard",
        icon: <HomeIcon />,
    },
    {
        name: "Games",
        icon: <SportsEsportsIcon />,
        subRoutes: [
            {
                path: "/game/fun-target-timmer",
                name: "Fun Target Timer",
                icon: <BiGame />,
            },
            {
                path: "/game/fun-sorat-game",
                name: "Fun game Sorat",
                icon: <BiGame />,
            },
            {
                path: "/game/Teen-patti",
                name: "Teen Patti",
                icon: <BiGame />,
            },
            {
                path: "/game/Rummy",
                name: "Rummy",
                icon: <BiGame />,
            },
            {
                path: "/game/Aviator",
                name: "Aviator",
                icon: <BiGame />,
            },
            {
                path: "/game/Roulette",
                name: "Roulette",
                icon: <BiGame />,
            },
            {
                path: "/game/Prologic777",
                name: "Prologic 777",
                icon: <BiGame />,
            },
        ],
    },
    {
        name: "Customers",
        icon: <PeopleIcon />,
        subRoutes: [
            {
                path: "/customer/Our-Customer",
                name: "All Customer",
                icon: <BiMoneyWithdraw />,
            }
        ],
    },
    {
        name: "Team",
        icon: <PeopleIcon />,
        subRoutes: [
            {
                path: "/userTeam/user-team",
                name: "User Team",
                icon: <BiMoneyWithdraw />,
            }
        ],
    },
    {
        name: "Current Game",
        icon: <PeopleIcon />,
        subRoutes: [
            {
                path: "/current-game/current-game",
                name: "Current Game",
                icon: <BiMoneyWithdraw />,
            }
        ],
    },
    {
        name: "Withdraw",
        icon: <PeopleIcon />,
        subRoutes: [
            {
                path: "/withdraw-history/withdraw-history",
                name: "Withdraw history",
                icon: <BiMoneyWithdraw />,
            }
        ],
    },
    {
        name: "Deposit",
        icon: <PeopleIcon />,
        subRoutes: [
            {
                path: "/deposit-history/deposit-history",
                name: "Deposit history",
                icon: <BiMoneyWithdraw />,
            }
        ],
    },
    {
        name: "Transaction",
        icon: <AccountBalanceIcon />,
        subRoutes: [
            {
                path: "/company/all-company",
                name: "Pending",
                icon: <BiMoneyWithdraw />,
            },
            {
                path: "/company/add-company",
                name: "Complete",
                icon: <BiMoneyWithdraw />,
            }
        ],
    },
    {
        name: "User Teams",
        icon: <AccountBalanceIcon />,
        subRoutes: [
            {
                path: "/items/all-items",
                name: "User Teams",
                icon: <BiMoneyWithdraw />,
            }
        ],
    },
    // {
    //     name: "Items",
    //     icon: <BiUser />,
    //     subRoutes: [
    //         {
    //             path: "/items/all-items",
    //             name: "All Items",
    //             icon: <BiUserPlus />,
    //         },
    //         {
    //             path: "/items/add-items",
    //             name: "Add Items",
    //             icon: <BiUserPlus />,
    //         }
    //     ],
    // },
    // {
    //     name: "Stock",
    //     icon: <BiUser />,
    //     subRoutes: [
    //         {
    //             path: "/stock/stock",
    //             name: "Stock",
    //             icon: <BiUserPlus />,
    //         },
    //         {
    //             path: "/stock/add-stock",
    //             name: "Add Stock",
    //             icon: <BiUserPlus />,
    //         }
    //     ],
    // },
    // {
    //     name: "Purchase",
    //     icon: <BiUser />,
    //     subRoutes: [
    //         {
    //             path: "/purchase/purchase-entry",
    //             name: "Purchase Entry",
    //             icon: <BiUser />,
    //         },
    //         {
    //             path: "/purchase/purchase-return",
    //             name: "Purchase Return",
    //             icon: <BiUser />,
    //         },
    //     ]
    // },
    // {
    //     name: "Sale",
    //     icon: <BiUser />,
    //     subRoutes: [
    //         {
    //             path: "/sale/sale-entry",
    //             name: "Sale Entry",
    //             icon: <BiUser />,
    //         },
    //         {
    //             path: "/sale/sale-return",
    //             name: "Sale Return",
    //             icon: <BiUser />,
    //         }
    //     ]
    // },
    // {
    //     name: "Master",
    //     icon: <BiUser />,
    //     subRoutes: [
    //         {
    //             path: "/master/hsn-code",
    //             name: "Hsn Code",
    //             icon: <BiUser />,
    //         },
    //         {
    //             path: "/master/sale-area",
    //             name: "Sale Area",
    //             icon: <BiUser />,
    //         },
    //         {
    //             path: "/master/sale-person",
    //             name: "Sale Person",
    //             icon: <BiUser />,
    //         },
    //         {
    //             path: "/master/item-category",
    //             name: "Item Category",
    //             icon: <BiUser />,
    //         },
    //         {
    //             path: "/master/item-packing",
    //             name: "Item Packing",
    //             icon: <BiUser />,
    //         }
    //     ],
    // },
    {
        name: "Setting",
        icon: <SettingsIcon />,
        subRoutes: [
            {
                path: "/setting/blogs",
                name: "Blogs",
                icon: <BiUser />,
            },
            {
                path: "/setting/about-us",
                name: "About Us",
                icon: <BiUser />,
            },
            {
                path: "/setting/terms-and-conditions",
                name: "Terms & Conditions",
                icon: <BiUser />,
            },
            {
                path: "/setting/privacy-policy",
                name: "Privacy Policy",
                icon: <BiUser />,
            },
            {
                path: "/setting/support/category",
                name: "Support",
                icon: <BiUser />,
            },
            {
                path: "/setting/support-query",
                name: "Support Query",
                icon: <BiUser />,
            },
            {
                path: "/setting/sub-admin",
                name: "Sub Admin",
                icon: <BiUser />,
            },
            {
                path: "/setting/change-password",
                name: "Change Password",
                icon: <BiUser />,
            },
        ]
    },
];