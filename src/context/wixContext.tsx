import { createClient, OAuthStrategy } from "@wix/sdk";
import { availabilityCalendar, services } from "@wix/bookings";
import { products,collections } from "@wix/stores";
import Cookies from "js-cookie"
const refreshToken=JSON.parse(Cookies.get("refreshToken")||"{}")
const myWixClient = createClient({
    modules: {
      products,
    //  currentCart,
    },
    auth: OAuthStrategy({
      clientId: process.env.NEXT_OAUTH_SECRET_KEY!,
      tokens: {
          refreshToken,
          accessToken: {
          value: "",
          expiresAt: 0,
        },  
      },
    }),
  });
  