import Header from "../../Component/header";
import Footer from "../../Component/footer";

import {
  Container,
  Stack,
  Title,
  Text,
  Box,
  Grid,
  Image,
  Paper,
  Breadcrumbs,
  Anchor,
  Group,
  Flex,
} from "@mantine/core";

import { IconHome, IconClock, IconUser, IconEye } from "@tabler/icons-react";

export default function DetailBerita() {
  const items = [
    { title: "Home", href: "/" },
    { title: "Berita Desa Sonoageng", href: "/berita" },
  ].map((item, index) => (
    <Anchor href={item.href} key={index} underline="never" c={"dark"} fw={500}>
      {item.title}
    </Anchor>
  ));
  return (
    <>
      <Header></Header>
      <main>
        <Container className="responsiveContainer" mt={"120px"}>
          <Stack gap={"100px"}>
            <Grid>
              <Grid.Col span={9}>
                <Paper shadow="sm" p={"32px"}>
                  <Stack>
                    <Breadcrumbs mb={"sm"}>{items}</Breadcrumbs>
                    <Title fw={700} size={"32px"}>
                      Judul Berita
                    </Title>
                    <Group justify="space-between" gap={"md"}>
                      <Flex direction={"row"} gap={"lg"}>
                        <Text c={"dimmed"}>
                          <IconClock />
                          &nbsp; 6 Juli 2023
                        </Text>
                        <Text c={"dimmed"}>
                          <IconUser />
                          &nbsp; Ditulis Oleh &nbsp;
                          <Text component="span" c={"dark"}>
                            Admin Desa Sonoageng
                          </Text>
                        </Text>
                      </Flex>
                      <Text>
                        <IconEye /> Dilihat 200 kali
                      </Text>
                    </Group>
                  </Stack>

                  <Image
                    mt={"md"}
                    w={"100%"}
                    h={550}
                    src={"https://placehold.co/100x100"}
                  />
                  <Stack mt={"md"}>
                    <Text>
                      <Text component="b" fw={700}>
                        KARANGREJO
                      </Text>{" "}
                      - Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam quibusdam unde, placeat dolorem voluptatibus
                      maiores numquam ipsa maxime modi laborum tempora suscipit
                      inventore vero expedita, praesentium deserunt
                      exercitationem, officiis in?
                    </Text>
                    <Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Earum illum enim ipsam quae commodi consequuntur eveniet
                      aperiam ut! Unde nemo aspernatur culpa in dignissimos
                      fugit tempore suscipit excepturi minima sunt.
                    </Text>
                    <Text>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Ducimus minima rerum illo, soluta et ad explicabo
                      excepturi inventore sint iure repellat dolore! Amet
                      doloribus in, est debitis animi eveniet cumque!
                    </Text>
                    <Text>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Autem maxime adipisci dolorem assumenda eveniet amet.
                      Beatae dolorum voluptas recusandae perspiciatis maxime.
                      Fugiat eos iusto laudantium et nulla ex minus odio. Minus
                      natus quaerat sint, dolore sit vel nesciunt perspiciatis
                      quae officia porro! Delectus, consequuntur adipisci nisi
                      inventore id blanditiis sed repellendus non odit similique
                      sequi fugit provident veritatis rem nemo.
                    </Text>
                  </Stack>
                </Paper>
              </Grid.Col>
              <Grid.Col span={3}>
                <Paper shadow="sm" p={"md"}>
                  <Stack>
                    <Title align="center" size={"20px"} order={1} fw={700}>
                      Berita Terbaru
                    </Title>
                    <Group>
                      <Image
                        w={"100%"}
                        h={70}
                        src={"https://placehold.co/100"}
                      />
                      <Box>
                        <Stack>
                          <Title order={1} size={"md"}>
                            Judul
                          </Title>
                          <Text>tes</Text>
                        </Stack>
                      </Box>
                    </Group>
                  </Stack>
                </Paper>
              </Grid.Col>
            </Grid>
          </Stack>
        </Container>
      </main>
      <Footer></Footer>
    </>
  );
}
