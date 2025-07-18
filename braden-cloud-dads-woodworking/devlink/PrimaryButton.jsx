"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./PrimaryButton.module.css";

export function PrimaryButton({
  as: _Component = _Builtin.Link,
  text = "CTA",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "button", "on-accent-primary")}
      button={true}
      block=""
      options={{
        href: "#",
      }}
    >
      {text}
    </_Component>
  );
}
