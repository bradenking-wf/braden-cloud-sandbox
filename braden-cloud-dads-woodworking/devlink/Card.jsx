"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Card.module.css";

export function Card({
  as: _Component = _Builtin.Link,
  cardTitle = "Card Title",
  cardBody = "Card Body",
  cardCta = "Begin",
  icon = "path",
  cardCtaVisibility = true,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "card-link", "on-secondary")}
      id={_utils.cx(
        _styles,
        "w-node-c1b3662b-1892-43d9-6f9b-b0459e0a2592-9e0a2592"
      )}
      button={false}
      block="inline"
      options={{
        href: "#",
      }}
    >
      <_Builtin.Block className={_utils.cx(_styles, "card_body")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "icon", "margin-bottom_xsmall")}
          tag="div"
        >
          <_Builtin.DOM
            tag="svg"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
          >
            <_Builtin.DOM
              tag={icon}
              d="M12.5 18.25C16.2279 18.25 19.25 15.2279 19.25 11.5C19.25 7.77208 16.2279 4.75 12.5 4.75C8.77208 4.75 5.75 7.77208 5.75 11.5C5.75 12.6007 6.01345 13.6398 6.48072 14.5578L5 19L9.71819 17.6519C10.5664 18.0361 11.5082 18.25 12.5 18.25Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
          </_Builtin.DOM>
        </_Builtin.Block>
        <_Builtin.Heading
          className={_utils.cx(
            _styles,
            "heading_h4",
            "w-node-c1b3662b-1892-43d9-6f9b-b0459e0a2597-9e0a2592"
          )}
          id={_utils.cx(
            _styles,
            "w-node-a69e8bd2-725b-02bf-e223-d24b8d6c9513-f6446cec"
          )}
          tag="h3"
        >
          {cardTitle}
        </_Builtin.Heading>
        <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph_small")}>
          {cardBody}
        </_Builtin.Paragraph>
        <br />
        {cardCtaVisibility ? (
          <_Builtin.Block
            className={_utils.cx(_styles, "margin_top-auto")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-button", "is-secondary")}
              tag="div"
            >
              <_Builtin.Block tag="div">{cardCta}</_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "button_icon")}
                tag="div"
              >
                <_Builtin.DOM
                  tag="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <_Builtin.DOM
                    tag="path"
                    d="M2 8H14.5M14.5 8L8.5 2M14.5 8L8.5 14"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                </_Builtin.DOM>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        ) : null}
      </_Builtin.Block>
    </_Component>
  );
}
