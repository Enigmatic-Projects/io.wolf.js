"use strict";

import IOClient from "../lib/IOClient";
import SecurityRequests from "../lib/Packets/SecurityPackets";
import expect from "expect.js";

let genToken = (): string => {
  let d = new Date().getTime();
  return (
    "WolfJS" +
    "x".repeat(64).replace(/[x]/gi, (c) => {
      let r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
    })
  );
};

let token = genToken();

console.log(token);

let client = new IOClient(token);

describe("Security Packets", () => {
  it("Security Login & Logout", async () => {
    try {
      let sinResp = await SecurityRequests.SecurityLogin(client, {
        username: "christopher.koster@palringo.com",
        password: "#Dotcom2602#",
      });

      let soutResp = await SecurityRequests.SecurityLogout(client);

      console.log({ sinResp, soutResp });
    } catch (e) {
      console.log(e);
    }
  });
});
