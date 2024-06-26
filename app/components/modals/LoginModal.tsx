"use client";

import React from "react";
import { Modal } from "./Modal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { CustomButton } from "../forms/CustomButton";

export const LoginModal = () => {
  const loginModal = useLoginModal();

  const content = (
    <>
      <form className="space-y-4">
        <input
          placeholder="Your email address"
          type="email"
          className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
        />
        <input
          placeholder="Your password"
          type="password"
          className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
        />

        <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
          This error message
        </div>

        <CustomButton label="Submit" onClick={() => console.log("Test")} />
      </form>
    </>
  );

  return (
    <Modal
      isOpen={loginModal.isOpen}
      close={loginModal.close}
      label="Log in"
      content={content}
    />
  );
};
