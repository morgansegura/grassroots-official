import React from "react";
import { cn } from "@/lib/utils/cn";

import { Typography } from "@/components/ui/typography/typography";
import { Stack } from "@/components/ui/stack/stack";
import { Container } from "@/components/structure/container/container";

import "./footer-mobile.css";

import type { FooterMobileProps } from "./footer-mobile.types";

export function FooterMobile({ className }: FooterMobileProps) {
  return (
    <footer className={cn("footer-mobile", className)}>
      <Container>
        <Stack direction="column" className="slogan-block">
          <div className="slogan-block-logo">Logo</div>
          <Typography variant="heading" size="sm" transform="uppercase">
            A classy Slogan
          </Typography>
        </Stack>
        <Stack direction="column" className="slogan-block">
          <div className="slogan-block-logo">Logo</div>
          <Typography variant="heading" size="sm" transform="uppercase">
            A classy Slogan
          </Typography>
        </Stack>
      </Container>
    </footer>
  );
}
