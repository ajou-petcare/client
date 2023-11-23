import APP_ROUTE from "../../app/config/route";

interface NavRoute {
	icon: string;
    name: string;
	to: string;
}

const NAV_ROUTE: NavRoute[] = [
    {
        icon: '🏠',
        name: '홈',
        to: APP_ROUTE.MAIN,
    },
    {
        icon: '🏥',
        name: '병원찾기',
        to: APP_ROUTE.HOSP,
    },
    {
        icon: '🩺',
        name: '건강진단',
        to: APP_ROUTE.HLTHCHCK,
    },
    {
        icon: '📊',
        name: '통계',
        to: APP_ROUTE.STAT,
    },
    {
        icon: '🐾',
        name: '정보',
        to: APP_ROUTE.INFO,
    },
];

export { NAV_ROUTE };
