"use client";

import { cn } from "@/lib/utils/cn";
import { Container } from "@/components/structure/container/container";
import { Stack } from "@/components/ui/stack/stack";
import { Logo } from "@/components/structure/logo/logo";
import { Typography } from "@/components/ui/typography/typography";
import { Button } from "@/components/ui/button/button";
import { DonateWidget } from "@/components/widget/donation-widget/donation-widget";
import { Modal } from "@/components/ui/modal/modal";

import "./coming-soon.css";
import { ModalProvider } from "@/context/modal-context";
import { useState } from "react";

export function ComingSoonScreen() {
  const [open, setOpen] = useState(false);

  function toggleModal() {
    setOpen(!open);
  }

  return (
    <ModalProvider>
      <Modal open={open} onClose={toggleModal}>
        <DonateWidget />
      </Modal>
      <Container className={cn("coming-soon-screen")}>
        <Container variant="narrow">
          <Stack direction="column">
            <Stack justify="center" direction="column" gap="base">
              <div className="flex flex-col gap-y-3 items-center">
                <Logo variant="icon" size="lg" />
                <Logo variant="text" size="base" />
              </div>
              <Typography
                as="p"
                variant="body"
                size="base"
                className="border px-1"
              >
                Our website is currently being built — July 2025.
              </Typography>
              <Button onClick={toggleModal}>Give Now</Button>
              <div className="w-full h-px bg-(--color-secondary)/25"></div>
              <Typography as="h1" variant="heading" size="lg">
                Together, we are building futures from the grassroots up.
              </Typography>
              <Typography as="h2" variant="body" size="xl">
                We believe{" "}
                <strong>every child has the potential for greatness</strong> —
                but for many, resources are not always readily available. At
                Grassroots Foundation,{" "}
                <strong>
                  we&apos;re working to ensure every child has the opportunity
                  and guidance to realize their full potential.
                </strong>
              </Typography>
              <Typography as="p" variant="body" size="base">
                By{" "}
                <strong>
                  utilizing the power of soccer as a catalyst for positive
                  change
                </strong>
                , we aim to empower girls and boys from diverse backgrounds,
                creating a true sense of belonging and community through the
                sport. Our mission is to break down financial barriers by
                building a network of passionate volunteers, community
                supporters, and corporate partners.
              </Typography>
              <Typography as="p" variant="body" size="base">
                Through dedicated fundraising efforts, sponsorships, grants, and
                community engagement, we provide scholarships and subsidized
                tuition to ensure that every young athlete — regardless of their
                circumstances — has access to the game, the gear, and the
                coaching they need to play at their best.
              </Typography>
              <Typography as="p" variant="body" size="base">
                We are working in our community first, San Diego, California,
                however as we grow our goal is to help all children in the
                United States to have opportunities regardless of their
                circumstances. Through our programs, we are aiding the youth in
                our community to aspire to be great. Grass Roots Foundation
                focuses on health through actitivity, educational awareness and
                building opportunities in the community, which we believe will
                inspire and help enrich the lives of young people in our
                community.
              </Typography>
              <Typography as="p" variant="body" size="base">
                We are not just creating equal opportunities; we are fostering
                equity by ensuring that every player has what they need to
                succeed — cleats that fit, fields to play on, and coaches who
                can guide them toward their full potential.
              </Typography>

              <div className="w-full h-px bg-(--color-secondary)/25"></div>
            </Stack>
          </Stack>
          <div className="flex justify-end py-4 text-right">
            Grass Roots Foundation &copy; 2025 |
            <Button
              variant="link"
              underline
              target="_blank"
              href="https://www.guidestar.org/profile/35-2822183"
            >
              Guide Star
            </Button>
          </div>
        </Container>
      </Container>
    </ModalProvider>
  );
}
