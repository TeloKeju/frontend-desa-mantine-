import Header from "../Component/header";
import Footer from "../Component/footer";

import {
  Container,
  Stack,
  Title,
  Text,
  Box,
  Grid,
  Card,
  Image,
  Group,
  Rating,
  Paper,
} from "@mantine/core";

import { IconFishOff } from "@tabler/icons-react";

export default function Belanja() {
  return (
    <>
      <Header></Header>
      <main>
        <Container className="responsiveContainer" mt={"90px"}>
          <Stack gap={"100px"}>
            <Stack p={"md"}>
              <Box>
                <Title order={1} fw={700} size={"44px"}>
                  Beli Dari Desa
                </Title>
                <Text size="xl">
                  Layanan yang disediakan promosi produk UMKM desa sehingga
                  mampu meningkatkan perekonomian masyarakat desa
                </Text>
              </Box>
              <Grid gutter={"lg"}>
                {/* <Grid.Col span={4}>
                  <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Card.Section>
                      <Image
                        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                        height={250}
                        width={"auto"}
                        alt="Norway"
                      />
                    </Card.Section>
                    <Stack mt={"md"}>
                      <Title order={1} size={20}>
                        Judul
                      </Title>
                      <Group justify="space-between">
                        <Rating defaultValue={2} />
                        <Text fw={500} size="lg">
                          Rp250.000
                        </Text>
                      </Group>
                    </Stack>
                  </Card>
                </Grid.Col> */}
              </Grid>
              <Box>
                <Container>
                  <Paper h={70} shadow="xs" p={"md"}>
                    <Group justify="center" align="center">
                      <IconFishOff></IconFishOff>
                      Belum ada Galeri Desa yang terdaftar
                    </Group>
                  </Paper>
                </Container>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </main>
      <Footer></Footer>
    </>
  );
}
