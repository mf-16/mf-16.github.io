import { IconButton, Link } from "@mui/material";
import { ReactElement } from "react";

export type IconLinkProps = {
  href: string;
  label: string;
  icon: ReactElement;
};

export const IconLink = ({ href, label, icon }: IconLinkProps) => (
  <Link className="icon" href={href} target="_blank" rel="noopener noreferrer">
    <IconButton aria-label={label}>{icon}</IconButton>
  </Link>
);
