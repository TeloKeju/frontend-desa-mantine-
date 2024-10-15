import Header from "../Component/header";
import Footer from "../Component/footer";

import {
  Container,
  Stack,
  Title,
  Text,
  Box,
  Grid,
  Image,
  Card,
  Center,
  Pagination,
  Group,
  useMantineTheme,
} from "@mantine/core";

export default function Wisata() {
  const theme = useMantineTheme();
  return (
    <>
      <Header></Header>
      <main>
        <Container className="responsiveContainer" mt={"90px"}>
          <Stack gap={"100px"}>
            <Stack p={"md"}>
              <Box>
                <Title order={1} fw={700} size={"44px"}>
                  WISATA DESA
                </Title>
                <Text size="xl">Segala hal mengenai wisata Desa Sonoageng</Text>
              </Box>
            </Stack>
            <Stack>
              <Stack gap={"100px"}>
                <Stack p={"md"}>
                  <Box>
                    <Title order={1} size={"44px"} fw={700}>
                      Berita Desa
                    </Title>
                    <Text size="xl">
                      Menyajikan informasi terbaru tentang peristiwa, berita
                      terkini, dan artikel-artikel jurnalistik dari Desa
                      Sonoageng
                    </Text>
                  </Box>
                  <Grid gutter={"xl"}>
                    <Grid.Col span={4}>
                      <Image
                        radius={"md"}
                        w={"100%"}
                        h={300}
                        src={"https://placehold.co/100x100"}
                        style={{ marginBottom: "-18px" }}
                      />
                      <Card shadow="sm" radius={"lg"}>
                        <Title order={1} size={"20px"}>
                          Nama Wisata
                        </Title>
                        <Text mt={"xs"} fw={400}>
                          Deskripsi Wisata
                        </Text>
                        <Card.Section>
                          <Group mt={"lg"} justify="flex-end">
                            <Box
                              p={"md"}
                              style={{ backgroundColor: theme.colors.dark[3] }}
                            >
                              <Text fw={"bold"} size="20px" c={"white"}>
                                Selengkapnya
                              </Text>
                            </Box>
                          </Group>
                        </Card.Section>
                      </Card>
                    </Grid.Col>
                  </Grid>
                </Stack>
                <Center>
                  <Pagination total={2} />
                </Center>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </main>
      <Footer></Footer>
    </>
  );
}
