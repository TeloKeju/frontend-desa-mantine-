import Header from "../Component/header";
import Footer from "../Component/footer";

import {
  Title,
  rem,
  Image,
  Text,
  Container,
  Button,
  Overlay,
  Grid,
  Stack,
  Group,
  Avatar,
  Card,
  useMantineTheme,
  Box,
  BackgroundImage,
  Paper,
  Rating,
  Anchor,
} from "@mantine/core";
import classes from "./heroImage.module.css";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import {
  IconArrowRight,
  IconArrowLeft,
  IconUser,
  IconEye,
  IconNotes,
  IconFishOff,
} from "@tabler/icons-react";
import "@mantine/carousel/styles.css";

import { useNavigate } from "react-router-dom";

export default function Home() {
  const Navigate = useNavigate();
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const theme = useMantineTheme();
  return (
    <>
      <Header></Header>
      <Carousel
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        loop
        height={"100%"}
        nextControlIcon={
          <IconArrowRight style={{ width: rem(16), height: rem(16) }} />
        }
        previousControlIcon={
          <IconArrowLeft style={{ width: rem(16), height: rem(16) }} />
        }
        mt={"90px"}
      >
        <Carousel.Slide>
          <div className={classes.hero}>
            <Overlay
              gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
              opacity={1}
              zIndex={0}
            />
            <Container className={classes.container} size="md">
              <Title className={classes.title}>
                A fully featured React components library
              </Title>
              <Text className={classes.description} size="xl" mt="xl">
                Build fully functional accessible web applications faster than
                ever – Mantine includes more than 120 customizable components
                and hooks to cover you in any situation
              </Text>

              <Button
                variant="gradient"
                size="xl"
                radius="xl"
                className={classes.control}
              >
                Get started
              </Button>
            </Container>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className={classes.hero}>
            <Overlay
              gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
              opacity={1}
              zIndex={0}
            />
            <Container className={classes.container} size="md">
              <Title className={classes.title}>
                A fully featured React components library
              </Title>
              <Text className={classes.description} size="xl" mt="xl">
                Build fully functional accessible web applications faster than
                ever – Mantine includes more than 120 customizable components
                and hooks to cover you in any situation
              </Text>

              <Button
                variant="gradient"
                size="xl"
                radius="xl"
                className={classes.control}
              >
                Get started
              </Button>
            </Container>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className={classes.hero}>
            <Overlay
              gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
              opacity={1}
              zIndex={0}
            />
            <Container className={classes.container} size="md">
              <Title className={classes.title}>
                A fully featured React components library
              </Title>
              <Text className={classes.description} size="xl" mt="xl">
                Build fully functional accessible web applications faster than
                ever – Mantine includes more than 120 customizable components
                and hooks to cover you in any situation
              </Text>

              <Button
                variant="gradient"
                size="xl"
                radius="xl"
                className={classes.control}
              >
                Get started
              </Button>
            </Container>
          </div>
        </Carousel.Slide>
      </Carousel>

      <main>
        <Container className="responsiveContainer">
          <Stack gap={"100px"}>
            <Grid align="center" justify="center">
              <Grid.Col span={6}>
                <Title order={1} fw={700} size={"44px"}>
                  JELAJAHI DESA
                </Title>
                <Text fw={500} size="xl">
                  Melalui website ini Anda dapat menjelajahi segala hal yang
                  terkait dengan Desa . Aspek pemerintahan, penduduk, demografi,
                  potensi Desa, dan juga berita tentang Desa
                </Text>
              </Grid.Col>
              <Grid.Col span={6}>
                <Stack>
                  <Group>
                    <Stack component={Anchor} href="/belanja" underline="never">
                      <Image
                        w={"100%"}
                        src={
                          "https://cdn.digitaldesa.com/statics/profil-v2/assets/explore-menu-3-DFdUkXec.png"
                        }
                      />
                      <Text align="center" c={"dark"} fw={700} size={"m"}>
                        PASAR DESA
                      </Text>
                    </Stack>
                    <Stack
                      component={Anchor}
                      href="https://cekdptonline.kpu.go.id/"
                      target="_blank"
                      underline="never"
                    >
                      <Image
                        w={"100%"}
                        src={
                          "https://cdn.digitaldesa.com/statics/profil-v2/assets/explore-menu-2-SbK3LIat.png"
                        }
                      />
                      <Text align="center" c={"dark"} fw={700} size={"m"}>
                        CEK DPT ONLINE
                      </Text>
                    </Stack>
                  </Group>
                  <Group justify="flex-end">
                    <Stack component={Anchor} href="/berita" underline="never">
                      <Image
                        w={"100%"}
                        src={
                          "https://cdn.digitaldesa.com/statics/profil-v2/assets/explore-menu-1-Dm8QiT59.png"
                        }
                      />
                      <Text align="center" c={"dark"} fw={700} size={"m"}>
                        BERITA DESA
                      </Text>
                    </Stack>
                    <Stack component={Anchor} href="/ppid" underline="never">
                      <Image
                        w={"100%"}
                        src={
                          "https://cdn.digitaldesa.com/statics/profil-v2/assets/explore-menu-4-DRJ4tzz0.png"
                        }
                      />
                      <Text align="center" c={"dark"} fw={700} size={"m"}>
                        INFORMASI PUBLIK
                      </Text>
                    </Stack>
                  </Group>
                </Stack>
              </Grid.Col>
            </Grid>
            <Grid style={{ marginTop: "50px" }}>
              <Grid.Col span={4}>
                <Avatar
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
                  size={300}
                  radius={300}
                  mx="auto"
                />
              </Grid.Col>
              <Grid.Col span={8}>
                <Title order={1} size={"44px"} fw={700}>
                  Sambutan Kepala Desa
                </Title>
                <Title order={3} size={"24px"} fw={700}>
                  DANI ARDIANSYACH, S.D., S.M.P
                </Title>
                <Text fw={500} size="m">
                  Kepala Desa Sonoageng
                </Text>
                <Text mt={"md"} mb={"md"} size="lg">
                  Assalamu &apos;Alaikum Warahmatullahi Wabarakatuh
                </Text>
                <Text size="lg">
                  Alhamdulillah, puji Syukur kita panjatkan kehadirat Allah SWT,
                  karena atas limpahan Rahmat dan Hidayah-Nya, sehingga
                  Pemerintah Desa Pao-Pao dapat mempersembahkan pelayanan
                  masyarakat berbasis digital kepada seluruh masyarakat Desa
                  Pao-Pao. Kami bangga bahwa Pelayanan yang kami persembahkan
                  adalah merupakan Visi Desa Pao-Pao Tahun 2017-2023 yaitu&nbsp;
                </Text>
              </Grid.Col>
            </Grid>

            <Stack>
              <Box>
                <Title order={1} fw={700} size={"44px"}>
                  PETA DESA
                </Title>
                <Text size="xl">Menampilkan Peta Desa Sonoageng</Text>
              </Box>
              <Box>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22798.064389814204!2d112.00208463765554!3d-7.675428569324803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e784fa65f41c897%3A0x53e619cb11c9e7de!2sSono%20Ageng%2C%20Kec.%20Prambon%2C%20Kabupaten%20Nganjuk%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1723908032611!5m2!1sid!2sid"
                  width={"100%"}
                  height={450}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Box>
            </Stack>

            <Stack>
              <Box>
                <Title order={1} size={"44px"} fw={700}>
                  SOTK
                </Title>
                <Text size="xl">
                  Struktur Organisasi dan Tata Kerja Desa Sonoageng
                </Text>
              </Box>
              <Grid>
                <Grid.Col span={3}>
                  <Card shadow="sm">
                    <Card.Section>
                      <Image
                        src="https://placehold.co/100x100"
                        h={300}
                        w={"100%"}
                        alt="No way!"
                      />
                    </Card.Section>

                    <Box>
                      <Text align="center" fw={700} size="xl" mt="md">
                        Nama Gelar
                      </Text>
                      <Text align="center" mt="xs" c="dimmed" size="sm">
                        Jabatan
                      </Text>
                    </Box>
                  </Card>
                </Grid.Col>
                <Grid.Col span={3}>
                  <Card shadow="sm">
                    <Card.Section>
                      <Image
                        src="https://placehold.co/100x100"
                        h={300}
                        w={"100%"}
                        alt="No way!"
                      />
                    </Card.Section>

                    <Box>
                      <Text align="center" fw={700} size="xl" mt="md">
                        Nama Gelar
                      </Text>
                      <Text align="center" mt="xs" c="dimmed" size="sm">
                        Jabatan
                      </Text>
                    </Box>
                  </Card>
                </Grid.Col>
                <Grid.Col span={3}>
                  <Card shadow="sm">
                    <Card.Section>
                      <Image
                        src="https://placehold.co/100x100"
                        h={300}
                        w={"100%"}
                        alt="No way!"
                      />
                    </Card.Section>

                    <Box>
                      <Text align="center" fw={700} size="xl" mt="md">
                        Nama Gelar
                      </Text>
                      <Text align="center" mt="xs" c="dimmed" size="sm">
                        Jabatan
                      </Text>
                    </Box>
                  </Card>
                </Grid.Col>
                <Grid.Col span={3}>
                  <Card shadow="sm">
                    <Card.Section>
                      <Image
                        src="https://placehold.co/100x100"
                        h={300}
                        w={"100%"}
                        alt="No way!"
                      />
                    </Card.Section>

                    <Box>
                      <Text align="center" fw={700} size="xl" mt="md">
                        Nama Gelar
                      </Text>
                      <Text align="center" mt="xs" c="dimmed" size="sm">
                        Jabatan
                      </Text>
                    </Box>
                  </Card>
                </Grid.Col>
              </Grid>
              <Group justify="flex-end">
                <Button
                  fw={700}
                  size={"md"}
                  variant="transparent"
                  c={"dark"}
                  onClick={() => Navigate("/pemerintah")}
                >
                  <IconNotes></IconNotes>&nbsp; LIHAT STRUKTUR LEBIH LENGKAP
                </Button>
              </Group>
            </Stack>
            <Stack>
              <Box>
                <Title order={1}>Administrasi Penduduk</Title>
                <Text>
                  Sistem digital yang berfungsi mempermudah pengelolaan data dan
                  informasi terkait dengan kependudukan dan pendayagunaannya
                  untuk pelayanan publik yang efektif dan efisien
                </Text>
              </Box>
              <Box>
                <Grid>
                  <Grid.Col span={6}>
                    <Card shadow="sm" padding="0" radius={"0"}>
                      <Grid p={"xs"} align="center" justify="center">
                        <Grid.Col
                          span={5}
                          style={{ backgroundColor: theme.colors.dark[3] }}
                        >
                          <Text
                            align="center"
                            fw={700}
                            style={{ fontSize: "30px" }}
                          >
                            4.490
                          </Text>
                        </Grid.Col>
                        <Grid.Col span={7}>
                          <Text
                            align="center"
                            fw={700}
                            style={{ fontSize: "24px" }}
                          >
                            Penduduk
                          </Text>
                        </Grid.Col>
                      </Grid>
                    </Card>
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <Card shadow="sm" padding="0" radius={"0"}>
                      <Grid p={"xs"} align="center" justify="center">
                        <Grid.Col
                          span={5}
                          style={{ backgroundColor: theme.colors.dark[3] }}
                        >
                          <Text
                            align="center"
                            fw={700}
                            style={{ fontSize: "30px" }}
                          >
                            2.188
                          </Text>
                        </Grid.Col>
                        <Grid.Col span={7}>
                          <Text
                            align="center"
                            fw={700}
                            style={{ fontSize: "24px" }}
                          >
                            Laki Laki
                          </Text>
                        </Grid.Col>
                      </Grid>
                    </Card>
                  </Grid.Col>
                </Grid>
                <Grid>
                  <Grid.Col span={6}>
                    <Card shadow="sm" padding="0" radius={"0"}>
                      <Grid p={"xs"} align="center" justify="center">
                        <Grid.Col
                          span={5}
                          style={{ backgroundColor: theme.colors.dark[3] }}
                        >
                          <Text
                            align="center"
                            fw={700}
                            style={{ fontSize: "30px" }}
                          >
                            1.383
                          </Text>
                        </Grid.Col>
                        <Grid.Col span={7}>
                          <Text
                            align="center"
                            fw={700}
                            style={{ fontSize: "24px" }}
                          >
                            Kepala Keluarga
                          </Text>
                        </Grid.Col>
                      </Grid>
                    </Card>
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <Card shadow="sm" padding="0" radius={"0"}>
                      <Grid p={"xs"} align="center" justify="center">
                        <Grid.Col
                          span={5}
                          style={{ backgroundColor: theme.colors.dark[3] }}
                        >
                          <Text
                            align="center"
                            fw={700}
                            style={{ fontSize: "30px" }}
                          >
                            2.302
                          </Text>
                        </Grid.Col>
                        <Grid.Col span={7}>
                          <Text
                            align="center"
                            fw={700}
                            style={{ fontSize: "24px" }}
                          >
                            Perempuan
                          </Text>
                        </Grid.Col>
                      </Grid>
                    </Card>
                  </Grid.Col>
                </Grid>
                <Grid>
                  <Grid.Col span={6}>
                    <Card shadow="sm" padding="0" radius={"0"}>
                      <Grid p={"xs"} align="center" justify="center">
                        <Grid.Col
                          span={5}
                          style={{ backgroundColor: theme.colors.dark[3] }}
                        >
                          <Text
                            align="center"
                            fw={700}
                            style={{ fontSize: "30px" }}
                          >
                            121
                          </Text>
                        </Grid.Col>
                        <Grid.Col span={7}>
                          <Text
                            align="center"
                            fw={700}
                            style={{ fontSize: "24px" }}
                          >
                            Penduduk Sementara
                          </Text>
                        </Grid.Col>
                      </Grid>
                    </Card>
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <Card shadow="sm" padding="0" radius={"0"}>
                      <Grid p={"xs"} align="center" justify="center">
                        <Grid.Col
                          span={5}
                          style={{ backgroundColor: theme.colors.dark[3] }}
                        >
                          <Text
                            align="center"
                            fw={700}
                            style={{ fontSize: "30px" }}
                          >
                            1.685
                          </Text>
                        </Grid.Col>
                        <Grid.Col span={7}>
                          <Text
                            align="center"
                            fw={700}
                            style={{ fontSize: "24px" }}
                          >
                            Mutasi Penduduk
                          </Text>
                        </Grid.Col>
                      </Grid>
                    </Card>
                  </Grid.Col>
                </Grid>
              </Box>
            </Stack>
            <Grid align="center" justify="center">
              <Grid.Col span={6}>
                <Image
                  src={
                    "https://cdn.digitaldesa.com/statics/profil-v2/assets/other-D5R53cMR.png"
                  }
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Stack>
                  <Box>
                    <Title order={1} fw={700} style={{ fontSize: "45px" }}>
                      APB DESA 2024
                    </Title>
                    <Text fw={500}>
                      Akses cepat dan transparan terhadap APB Desa serta proyek
                      pembangunan
                    </Text>
                  </Box>
                  <Box>
                    <Stack>
                      <Box>
                        <Card shadow="sm">
                          <Text fw={700} size="xl">
                            Pendapatan Desa
                          </Text>
                          <Text
                            ta={"right"}
                            fw={700}
                            style={{ fontSize: "45px" }}
                          >
                            Rp2.211.273.600,00
                          </Text>
                        </Card>
                      </Box>
                      <Box>
                        <Card shadow="sm">
                          <Text fw={700} size="xl">
                            Belanja Desa
                          </Text>
                          <Text
                            ta={"right"}
                            fw={700}
                            style={{ fontSize: "45px" }}
                          >
                            Rp0,00
                          </Text>
                        </Card>
                      </Box>
                    </Stack>
                  </Box>
                  <Group justify="flex-end">
                    <Button
                      fw={700}
                      size={"md"}
                      variant="transparent"
                      c={"dark"}
                      onClick={() => Navigate("/infografis/apbdes")}
                    >
                      <IconNotes></IconNotes>&nbsp; LIHAT DATA LEBIH LENGKAP
                    </Button>
                  </Group>
                </Stack>
              </Grid.Col>
            </Grid>
            <Stack>
              <Box>
                <Title order={1}>Berita Desa</Title>
                <Text>
                  Menyajikan informasi terbaru tentang peristiwa, berita
                  terkini, dan artikel-artikel jurnalistik dari Desa Sonoageng
                </Text>
              </Box>
              <Box>
                <Grid gutter={"xl"}>
                  <Grid.Col
                    span={4}
                    component={Anchor}
                    href="/berita/detailberita"
                    underline="never"
                  >
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
                        Ratione cumque possimus quam voluptatem, nemo in
                        provident excepturi dolor quo hic explicabo, labore
                        voluptate enim placeat, sit nesciunt distinctio iusto
                        commodi.
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
                  <Grid.Col
                    span={4}
                    component={Anchor}
                    href="/berita/detailberita"
                    underline="never"
                  >
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
                        Ratione cumque possimus quam voluptatem, nemo in
                        provident excepturi dolor quo hic explicabo, labore
                        voluptate enim placeat, sit nesciunt distinctio iusto
                        commodi.
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
                  <Grid.Col
                    span={4}
                    component={Anchor}
                    href="/berita/detailberita"
                    underline="never"
                  >
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
                        Ratione cumque possimus quam voluptatem, nemo in
                        provident excepturi dolor quo hic explicabo, labore
                        voluptate enim placeat, sit nesciunt distinctio iusto
                        commodi.
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
                  <Grid.Col
                    span={4}
                    component={Anchor}
                    href="/berita/detailberita"
                    underline="never"
                  >
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
                        Ratione cumque possimus quam voluptatem, nemo in
                        provident excepturi dolor quo hic explicabo, labore
                        voluptate enim placeat, sit nesciunt distinctio iusto
                        commodi.
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
                  <Grid.Col
                    span={4}
                    component={Anchor}
                    href="/berita/detailberita"
                    underline="never"
                  >
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
                        Ratione cumque possimus quam voluptatem, nemo in
                        provident excepturi dolor quo hic explicabo, labore
                        voluptate enim placeat, sit nesciunt distinctio iusto
                        commodi.
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
                  <Grid.Col
                    span={4}
                    component={Anchor}
                    href="/berita/detailberita"
                    underline="never"
                  >
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
                        Ratione cumque possimus quam voluptatem, nemo in
                        provident excepturi dolor quo hic explicabo, labore
                        voluptate enim placeat, sit nesciunt distinctio iusto
                        commodi.
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
              </Box>
              <Group justify="flex-end">
                <Button
                  fw={700}
                  size={"md"}
                  variant="transparent"
                  c={"dark"}
                  onClick={() => Navigate("/berita")}
                >
                  <IconNotes></IconNotes>&nbsp; LIHAT BERITA LEBIH BANYAK
                </Button>
              </Group>
            </Stack>
            <Stack>
              <Box>
                <Group justify="">
                  <Box>
                    <Title order={1}>POTENSI DESA</Title>
                    <Text>
                      Informasi tentang potensi dan kemajuan desa di berbagai
                      bidang seperti ekonomi, pariwisata, pertanian, industri
                      kreatif, dan kelestarian lingkungan
                    </Text>
                  </Box>
                  {/* <Box></Box> */}
                </Group>
              </Box>
              <Box>
                <Container>
                  <Paper h={70} shadow="xs" p={"md"}>
                    <Group justify="center" align="center">
                      <IconFishOff></IconFishOff>
                      Belum ada potensi Desa yang terdaftar
                    </Group>
                  </Paper>
                </Container>
              </Box>
            </Stack>

            <Box>
              <BackgroundImage src="https://cdn.digitaldesa.com/statics/profil-v2/assets/background_wisata-DbjOCYPf.png">
                <Stack p={"lg"}>
                  <Box>
                    <Title order={1}>WISATA DESA</Title>
                    <Text>
                      Layanan yang mempermudah promosi wisata sehingga dapat
                      menarik pengunjung desa
                    </Text>
                  </Box>
                  <Box p={"lg"}>
                    <Stack>
                      <Carousel
                        slideSize="100%"
                        height={400}
                        slideGap="lg"
                        controlsOffset="xl"
                        loop
                      >
                        <Carousel.Slide>
                          <Image
                            w="auto"
                            radius="md"
                            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
                          />
                        </Carousel.Slide>
                        <Carousel.Slide>2</Carousel.Slide>
                        <Carousel.Slide>3</Carousel.Slide>
                      </Carousel>
                    </Stack>
                  </Box>
                </Stack>
              </BackgroundImage>
              <Group justify="flex-end">
                <Button
                  fw={700}
                  size={"md"}
                  variant="transparent"
                  c={"dark"}
                  onClick={() => Navigate("/wisata")}
                >
                  <IconNotes></IconNotes>&nbsp; LIHAT WISATA LEBIH BANYAK
                </Button>
              </Group>
            </Box>

            <Stack>
              <Box>
                <Title order={1}>BELI DARI DESA</Title>
                <Text>
                  Layanan yang disediakan promosi produk UMKM desa sehingga
                  mampu meningkatkan perekonomian masyarakat desa
                </Text>
              </Box>
              <Grid gutter={"lg"}>
                <Grid.Col span={4}>
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
                </Grid.Col>
                <Grid.Col span={4}>
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
                </Grid.Col>
                <Grid.Col span={4}>
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
                </Grid.Col>
                <Grid.Col span={4}>
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
                </Grid.Col>
                <Grid.Col span={4}>
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
                </Grid.Col>
                <Grid.Col span={4}>
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
                </Grid.Col>
              </Grid>
              <Group justify="flex-end">
                <Button
                  fw={700}
                  size={"md"}
                  variant="transparent"
                  c={"dark"}
                  onClick={() => Navigate("/belanja")}
                >
                  <IconNotes></IconNotes>&nbsp; LIHAT PRODUK LEBIH BANYAK
                </Button>
              </Group>
            </Stack>

            <Stack>
              <Box>
                <Title order={1}>GALERI DESA</Title>
                <Text>
                  Menampilkan kegiatan-kegiatan yang berlangsung di desa
                </Text>
              </Box>
              <Grid gutter={"md"}>
                <Grid.Col span={4}>
                  <Image
                    h={350}
                    src={
                      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
                    }
                  />
                </Grid.Col>
                <Grid.Col span={4}>
                  <Image
                    h={350}
                    src={
                      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
                    }
                  />
                </Grid.Col>
                <Grid.Col span={4}>
                  <Image
                    h={350}
                    src={
                      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
                    }
                  />
                </Grid.Col>
                <Grid.Col span={4}>
                  <Image
                    h={350}
                    src={
                      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
                    }
                  />
                </Grid.Col>
                <Grid.Col span={4}>
                  <Image
                    h={350}
                    src={
                      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
                    }
                  />
                </Grid.Col>
                <Grid.Col span={4}>
                  <Image
                    h={350}
                    src={
                      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
                    }
                  />
                </Grid.Col>
              </Grid>
              <Group justify="flex-end">
                <Button
                  fw={700}
                  size={"md"}
                  variant="transparent"
                  c={"dark"}
                  onClick={() => Navigate("/galeri")}
                >
                  <IconNotes></IconNotes>&nbsp; LIHAT FOTO LEBIH BANYAK
                </Button>
              </Group>
            </Stack>
          </Stack>
        </Container>
      </main>

      <Footer></Footer>
    </>
  );
}

// const Home = () => {
//   return (
//     <>
//       <Header></Header>
//       <Footer></Footer>
//     </>
//   );
// };
