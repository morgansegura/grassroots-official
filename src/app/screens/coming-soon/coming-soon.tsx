"use client";
import { Fragment, useState } from "react";

import { cn } from "@/lib/utils/cn";
import { Container } from "@/components/structure/container/container";
import { Stack } from "@/components/ui/stack/stack";
import { Logo } from "@/components/structure/logo/logo";
import { Typography } from "@/components/ui/typography/typography";
import { Button } from "@/components/ui/button/button";
import { DonateWidget } from "@/components/widget/donation-widget/donation-widget";
import { ModalProvider } from "@/context/modal-context";
import { Modal } from "@/components/ui/modal/modal";
import { COMING_SOON_SCREEN_MOCK } from "@/data/mocks/coming-soon-screen/coming-soon-screen.mock";

import "./coming-soon.css";
import { When } from "@/components/helpers/when/when";

export function ComingSoonScreen() {
  const [open, setOpen] = useState(false);

  function toggleModal() {
    setOpen(!open);
  }

  const { content } = COMING_SOON_SCREEN_MOCK;

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

              {content?.map((item, index: number) => (
                <Fragment key={index}>
                  <When condition={item?.__typename === "typography"}>
                    <Typography
                      as={item.as}
                      variant={item.variant}
                      size={item.size}
                      className={item?.additionalClass}
                    >
                      <span
                        dangerouslySetInnerHTML={{ __html: item.text ?? "" }}
                      />
                    </Typography>
                  </When>
                  <When condition={item?.__typename === "button"}>
                    <Button onClick={toggleModal}>{item.label}</Button>
                  </When>
                  <When condition={item?.__typename === "hr"}>
                    <div className={item?.additionalClass} />
                  </When>
                </Fragment>
              ))}
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
