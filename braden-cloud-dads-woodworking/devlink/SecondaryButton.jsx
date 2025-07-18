"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SecondaryButton.module.css";

export function SecondaryButton({
  as: _Component = _Builtin.Link,
  text = "CTA",
}) {
  return (
    <_Component
      className={_utils.cx(
        _styles,
        "button",
        "is-secondary",
        "on-accent-primary"
      )}
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
