import React, { memo } from "react";
import { useCurrentChat } from "../../../context/current-chat.context";
import { useProfile } from "../../../context/profile.context";

const Top = () => {
  const members = useCurrentChat((v) => v.members);
  const { profile } = useProfile();

  const recipint = members.filter((m) => m !== profile.email)[0];

  return <div>{recipint}</div>;
};

export default memo(Top);
