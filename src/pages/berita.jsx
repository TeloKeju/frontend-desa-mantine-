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
  Group,
  Pagination,
  Center,
  useMantineTheme,
} from "@mantine/core";

import { IconUser, IconEye } from "@tabler/icons-react";

export default function Berita() {
  const theme = useMantineTheme();
  return (
    <>
      <Header></Header>
      <main>
        <Container className="responsiveContainer" mt={"90px"}>
          <Stack gap={"100px"}>
            <Stack p={"md"}>
              <Box>
                <Title order={1} size={"44px"} fw={700}>
                  Berita Desa
                </Title>
                <Text size="xl">
                  Menyajikan informasi terbaru tentang peristiwa, berita
                  terkini, dan artikel-artikel jurnalistik dari Desa Sonoageng
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
                      Pelantikan Anggota BPD Desa Sonoageng Periode 2021-2027
                    </Title>
                    <Text mt={"xs"} fw={400}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ratione cumque possimus quam voluptatem, nemo in provident
                      excepturi dolor quo hic explicabo, labore voluptate enim
                      placeat, sit nesciunt distinctio iusto commodi.
                    </Text>
                    <Card.Section>
                      <Group mt={"lg"} justify="space-between">
                        <Box>
                          <Group ml={"md"}>
                            <IconUser></IconUser>
                            Penulis
                          </Group>
                          <Group ml={"md"}>
                            <IconEye></IconEye>
                            Dilihat
                          </Group>
                        </Box>

                        <Box
                          p={"md"}
                          style={{ backgroundColor: theme.colors.dark[3] }}
                        >
                          <Text fw={"bold"} size="20px" c={"white"}>
                            06 Jul <br /> 2022
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
        </Container>
      </main>
      <Footer></Footer>
    </>
  );
}
