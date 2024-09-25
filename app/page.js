"use client";
import Navbar from "@/components/Navbar";
import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import CreditCardIcon from "@mui/icons-material/CreditCard";
export default function Home() {
  const [state, setState] = useState("card");
  const [state2, setState2] = useState("card");
  const [country, setCountry] = useState("United States");
  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo (Congo-Brazzaville)",
    "Congo (Democratic Republic of the)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czechia",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini (Swaziland)",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea (North)",
    "Korea (South)",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar (Burma)",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

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
            <div>
              <Typography>Card Number</Typography>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  border: "1px solid gray",
                  borderRadius: "5px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    marginBottom: "5px",
                  }}
                >
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
                </Box>
                <Stack
                  direction="row"
                  justifyContent="start"
                  alignItems="center"
                >
                  <Image src="/visa.png" width={30} height={20} />
                  <Image src="/card.png" width={30} height={20} />
                  <Image src="/card.png" width={30} height={20} />
                  <Image src="/card.png" width={30} height={20} />
                </Stack>
              </Stack>
            </div>
            <Stack direction="row" justifyContent="space-between">
              <div style={{ marginTop: "10px", width: "49%" }}>
                <Typography>Expire Date</Typography>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{
                    border: "1px solid gray",
                    borderRadius: "5px",
                    height: "49.66px",
                  }}
                >
                  <input
                    placeholder="MM/YY"
                    style={{
                      borderRadius: "5px",
                      height: "100%",
                      width: "100%",
                      padding: "5px",
                    }}
                  />
                </Stack>
              </div>
              <div style={{ marginTop: "10px", width: "49%" }}>
                <Typography>Security Code</Typography>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{
                    border: "1px solid gray",
                    borderRadius: "5px",
                    height: "49.66px",
                  }}
                >
                  <input
                    placeholder="CVC"
                    style={{
                      borderRadius: "5px",
                      height: "100%",
                      width: "100%",
                      padding: "5px",
                    }}
                  />
                </Stack>
              </div>
            </Stack>
            <div style={{ marginTop: "10px" }}>
              <Typography>Full Name</Typography>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  border: "1px solid gray",
                  borderRadius: "5px",
                  height: "49.66px",
                }}
              >
                <input
                  placeholder="First and Last Name"
                  style={{
                    borderRadius: "5px",
                    height: "100%",
                    width: "100%",
                    padding: "5px",
                  }}
                />
              </Stack>
            </div>
            <div style={{ marginTop: "10px" }}>
              <Typography>Country or Region</Typography>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  border: "1px solid gray",
                  borderRadius: "5px",
                  height: "49.66px",
                }}
              >
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  style={{
                    background: "white",
                    width: "100%",
                    height: "100%",
                    borderRadius: "inherit",
                  }}
                >
                  {countries.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </Stack>
            </div>
            <div style={{ marginTop: "10px" }}>
              <Typography>Address</Typography>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  border: "1px solid gray",
                  borderRadius: "5px",
                  height: "49.66px",
                }}
              >
                <input
                  placeholder="Street Address"
                  style={{
                    borderRadius: "5px",
                    height: "100%",
                    width: "100%",
                    padding: "5px",
                  }}
                />
              </Stack>
            </div>
            <Typography
              sx={{
                marginTop: "30px",
                fontSize: "0.9em",
                textAlign: "center",
                color: "gray",
              }}
            >
              Cancel your subscription anytime
            </Typography>
            <Typography
              sx={{
                marginTop: "30px",
                fontSize: "0.9em",
                textAlign: "center",
                color: "gray",
              }}
            >
              By Joining you agree to DCRYPT's and Whops terms and condition and
              allow them to charge your card for this payments. You can also
              cancel your membership{" "}
            </Typography>

            <button>subscribe</button>
            <Typography
              sx={{
                marginTop: "30px",
                fontSize: "0.9em",
                textAlign: "center",
                color: "gray",
              }}
            >
              <Image
                src="/security.png"
                alt="security"
                width={20}
                height={20}
                style={{ display: "inline", color: "gray" }}
              />{" "}
              Secured By <span style={{ fontWeight: "800" }}>Whop</span>
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
