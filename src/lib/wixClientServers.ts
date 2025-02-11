"use server";
import { OAuthStrategy, createClient } from "@wix/sdk";
import { collections, products } from "@wix/stores";
import { log } from "console";
// import { orders } from "@wix/ecom";
import { cookies } from "next/headers";
// import { members } from '@wix/members';

export const wixClientServer = async () => {
  let refreshToken;

  try {
    const cookieStore =  await cookies();
    refreshToken = JSON.parse(cookieStore.get("refreshToken")?.value || "{}");

} catch (e) {
    console.log(e);
  }

  const wixClient = createClient({
    modules: {
      products,
      collections,
      //   orders,
      //   members,
    },
    auth: OAuthStrategy({
      clientId: process.env.NEXT_PUBLIC_OAUTH_SECRET_KEY!,
      tokens: {
        refreshToken,
        accessToken: { value: "", expiresAt: 0 },
      },
    }),
  });

  return wixClient;
};
