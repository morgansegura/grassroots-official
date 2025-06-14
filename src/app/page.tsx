import { Container } from "@/components/structure/container/container";
import { Stack } from "@/components/ui/stack/stack";
import { Typography } from "@/components/ui/typography/typography";

export default function Home() {
  return (
    <Container variant="prose">
      <Stack type="grid" cols="2">
        {/* Image Grid */}
        <Stack type="grid">
          <div>
            <Typography>Amazing Heading</Typography>
          </div>
        </Stack>
        <Stack>
          <Typography>Amazing Heading</Typography>
        </Stack>
      </Stack>
    </Container>
  );
}
