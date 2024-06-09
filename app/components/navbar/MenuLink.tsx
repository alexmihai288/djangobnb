"use client";
import React from "react";

interface MenuLinkProps {
  label: string;
  onClick:()=>void
}

export const MenuLink = ({ label,onClick }: MenuLinkProps) => {
  return <div onClick={onClick}  className="cursor-pointer px-5 py-4 hover:bg-gray-100 transition">{label}</div>;
};
