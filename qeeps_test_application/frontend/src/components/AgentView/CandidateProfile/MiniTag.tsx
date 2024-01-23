import {
  ComponentWithAs,
  IconProps,
  Tag,
  TagLabel,
  TagLeftIcon,
} from "@chakra-ui/react";
import React from "react";

export interface MiniCardProps {
  text?: string;
  icon: ComponentWithAs<"svg", IconProps>;
  green?: boolean;
  yellow?: boolean;
  style?: React.CSSProperties;
}

export function MiniTag({ text, icon, green, yellow }: MiniCardProps) {
  return (
    <Tag
      size="md"
      border={"1px solid"}
      borderColor={"gray.10"}
      borderRadius={"0.5rem"}
      maxH="1.5rem"
      margin={"0.2rem"}
    >
      <TagLeftIcon
        as={icon}
        color={
          green
            ? "actions.successAccent"
            : yellow
            ? "actions.warningAccent"
            : "qeeps.main"
        }
      />
      <TagLabel
        color={
          green
            ? "actions.successAccent"
            : yellow
            ? "actions.warningAccent"
            : "qeeps.main"
        }
        fontWeight="500"
        fontSize={"0.75rem"}
      >
        {text}
      </TagLabel>
    </Tag>
  );
}
