"use client";
import Navbar from "@/components/Navbar";
import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import CreditCardIcon from "@mui/icons-material/CreditCard";
export default function Home() {
  const [state, setState] = useState("card");
  const [state2, setState2] = useState("card");
  return (
    <>
      <Navbar />
      <div style={{ background: "#f4f4f4", padding: "20px 0px" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ padding: "10px" }}
        >
          <Box sx={{ display: "flex" }}>
            <Avatar
              src="/dcrypt.jpg"
              alt="logo"
              sx={{ borderRadius: "5px", width: 60, height: 60 }}
            />

            <Box sx={{ marginLeft: "10px" }}>
              <Typography sx={{ fontWeight: "800" }}>DCRYPT</Typography>
              <Typography
                sx={{ fontSize: "0.7em", color: "gray", fontWeight: "500" }}
              >
                Subscribe to Premium
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: "800" }}>US$35.00</Typography>
            <Typography
              sx={{ fontSize: "0.7em", color: "gray", fontWeight: "500" }}
            >
              Per Week
            </Typography>
          </Box>
        </Stack>
        <Stack
          sx={{ margin: "10px" }}
          direction="row"
          justifyContent="space-between"
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <input
              style={{
                border: "1px solid gray",
                borderRadius: "5px",
                height: "100%",
                width: "300px",
                padding: "5px",
              }}
            />
          </Box>
          <button
            style={{
              border: "1px solid gray",
              padding: "4px 8px",
              borderRadius: "6px",
            }}
          >
            Apply
          </button>
        </Stack>
        <Stack
          sx={{ margin: "10px" }}
          direction="row"
          justifyContent="space-between"
        >
          <Typography>Total Due Today</Typography>
          <Typography>US$35.00</Typography>
        </Stack>
      </div>
      <Box sx={{ padding: "20px 0px" }}>
        <Stack direction="column" sx={{ margin: "10px" }}>
          <Typography>Email</Typography>

          <input
            placeholder="Email Address"
            style={{
              border: "1px solid gray",
              borderRadius: "5px",
              height: "100%",
              width: "100%",
              height: "33.33px",
              padding: "5px",
              marginTop: "10px",
            }}
          />
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            margin: "10px",
            borderRadius: "5px",
            background: "#f4f4f4",
            padding: "3px 5px",
          }}
        >
          <Typography
            onClick={() => setState("card")}
            sx={{
              width: "48%",
              borderRadius: "5px",
              background: `${state === "card" ? "white" : ""}`,
              boxShadow: `${state === "card" ? "0.5px 0.5px 2px gray" : ""}`,
              textAlign: "center",
              height: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Card
          </Typography>
          <Typography
            onClick={() => setState("paypal")}
            sx={{
              width: "48%",
              borderRadius: "5px",
              background: `${state === "paypal" ? "white" : ""}`,
              textAlign: "center",
              height: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: `${state === "paypal" ? "0.5px 0.5px 2px gray" : ""}`,
            }}
          >
            Paypal
          </Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            margin: "10px",
            padding: "3px 5px",
          }}
        >
          <Box
            onClick={() => setState2("card")}
            sx={{
              border: `${
                state2 === "card"
                  ? "1.5px solid #ff7205"
                  : "1.5px solid #d4d3d3"
              }`,
              width: "48%",
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <Box>
              <IconButton>
                <CreditCardIcon />
              </IconButton>
              <Typography>Card</Typography>
            </Box>
          </Box>
          <Box
            onClick={() => setState2("cash")}
            sx={{
              border: `${
                state2 === "cash"
                  ? "1.5px solid #ff7205"
                  : "1.5px solid #d4d3d3"
              }`,
              width: "48%",
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <Box>
              <Avatar src="/dollar.png" />
              <Typography>Cash App Pay</Typography>
            </Box>
          </Box>
        </Stack>
        <Stack
          direction="column"
          sx={{
            margin: "10px",
            padding: "3px 5px",
          }}
        >
          <Stack>
            <Typography>Card Number</Typography>
            <Stack direction="row" justifyContent="space-between">
              <input
                placeholder="1234 1234 1234 1234"
                style={{
                  borderRadius: "5px",
                  height: "100%",
                  // width: "100%",
                  height: "33.33px",
                  padding: "5px",
                  marginTop: "10px",
                }}
              />
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Image src="/visa.png" width={30} height={20} />
                <Image src="/card.png" width={30} height={20} />
                <Image src="/card.png" width={30} height={20} />
                <Image src="/card.png" width={30} height={20} />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
