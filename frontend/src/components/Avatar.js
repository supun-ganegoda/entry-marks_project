import * as React from "react";
import Avatar from "@mui/material/Avatar";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  if (typeof name !== "string" || name.trim() === "") {
    // Return a default avatar if name is not a valid string
    return {
      sx: {
        bgcolor: "#000", // Replace with your desired default background color
      },
      children: "", // Replace with your desired default initials or content
    };
  }

  const nameParts = name.split(" ");

  const initials = nameParts
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: initials,
  };
}

export default function BLAvatars({ userName }) {
  console.log(userName);
  return <Avatar {...stringAvatar(userName.toString())} />;
}
