// "use client"
// import { createClient, OAuthStrategy} from "@wix/sdk";
// import { availabilityCalendar, services } from "@wix/bookings";
// import { products, collections } from "@wix/stores";
// import Cookies from "js-cookie";
// import { useContext, ReactNode, createContext } from "react";
// const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}");
// const myWixClient = createClient({
//   modules: {
//     products,
//     collections,
//     //  currentCart,
//   },
//   auth: OAuthStrategy({
//     clientId: process.env.NEXT_PUBLIC_OAUTH_SECRET_KEY!,
//     tokens: {
//       refreshToken,
//       accessToken: {
//         value: "",
//         expiresAt: 0,
//       },
//     },
//   }),
// });

// export type wixClient = typeof myWixClient;
// export const WixClient = createContext<wixClient>(myWixClient);

// export const WixClientContextProvider = ({
//   children,
// }: {
//   children: ReactNode;
// }) => {
//   return (
//     <WixClient.Provider value={myWixClient}>{children}</WixClient.Provider>
//   );
// };
