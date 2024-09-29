"use client";
import { ContactRequestType } from "@/types/type";
import React, { FC } from "react";

const ContactEmailTemplate: FC<ContactRequestType> = ({
  full_name,
  email,
  description,
}) => {
  return (
    <div>
      <h1>{full_name}</h1>
      <h2>{email}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ContactEmailTemplate;
