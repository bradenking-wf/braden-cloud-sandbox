import * as React from "react";
import * as Types from "./types";

declare function Card(props: {
  as?: React.ElementType;
  cardTitle?: React.ReactNode;
  cardBody?: React.ReactNode;
  cardCta?: React.ReactNode;
  icon?: Types.Basic.TagType;
  cardCtaVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
