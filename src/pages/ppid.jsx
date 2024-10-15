import Header from "../Component/header";
import Footer from "../Component/footer";

import {
  Container,
  Stack,
  Title,
  Text,
  Box,
  Grid,
  Button,
  Group,
  Image,
  Paper,
  Center,
} from "@mantine/core";

import {
  IconNotes,
  IconClock,
  IconFileTypePdf,
  IconDownload,
} from "@tabler/icons-react";

export default function Ppid() {
  return (
    <>
      <Header></Header>
      <main>
        <Container className="responsiveContainer" mt={"90px"}>
          <Stack gap={"100px"}>
            <Stack>
              <Grid>
                <Grid.Col span={6}>
                  <Stack>
                    <Title order={1} fw={700} size={"44px"}>
                      PPID
                    </Title>
                    <Text size="xl">
                      Pejabat Pengelola Informasi dan Dokumentasi (PPID) adalah
                      pejabat yang bertanggung jawab di bidang penyimpanan,
                      pendokumentasian, penyediaan, dan/atau pelayanan informasi
                      di badan publik.
                    </Text>
                    <Group>
                      <Button variant="default" color="red" size="lg">
                        Dasar Hukum PPID
                      </Button>
                    </Group>
                  </Stack>
                </Grid.Col>
                <Grid.Col span={6} p={"35px"}>
                  <Grid>
                    <Grid.Col span={4}>
                      <Stack p={"lg"}>
                        <Image
                          src={
                            "https://cdn.digitaldesa.com/statics/profil-v2/assets/informasi-secara-berkala-BWto8-jg.png"
                          }
                        />
                        <Text fw={700} size="lg" c={"dimmed"} align="center">
                          INFORMASI SECARA BERKALA
                        </Text>
                      </Stack>
                    </Grid.Col>
                    <Grid.Col span={4}>
                      <Stack p={"lg"}>
                        <Image
                          src={
                            "https://cdn.digitaldesa.com/statics/profil-v2/assets/informasi-serta-merta-1SoPj5Fg.png"
                          }
                        />
                        <Text fw={700} size="lg" c={"dimmed"} align="center">
                          INFORMASI SERTA MERTA
                        </Text>
                      </Stack>
                    </Grid.Col>
                    <Grid.Col span={4}>
                      <Stack p={"lg"}>
                        <Image
                          src={
                            "https://cdn.digitaldesa.com/statics/profil-v2/assets/informasi-setiap-saat-cAArEY6x.png"
                          }
                        />
                        <Text fw={700} size="lg" c={"dimmed"} align="center">
                          INFORMASI SETIAP SAAT
                        </Text>
                      </Stack>
                    </Grid.Col>
                  </Grid>
                </Grid.Col>
              </Grid>
            </Stack>
            <Stack>
              <Box>
                <Title size={"40px"} fw={700} order={1}>
                  INFORMASI PUBLIK TERBARU
                </Title>
                <Text size="lg" fw={700}>
                  Update terakhir 8 bulan yang lalu
                </Text>
              </Box>
              <Paper shadow="sm" p={"md"}>
                <Grid>
                  <Grid.Col span={8}>
                    <Stack>
                      <Title order={1} fw={700} size={"lg"}>
                        APB Desa Sonoageng TAHUN 2023
                      </Title>
                      <Box>
                        <Text>
                          <IconNotes /> Anggaran Pendapatan dan Belanja Desa
                        </Text>
                        <Text>
                          <IconClock /> Rabu, 17 Januari 2024
                        </Text>
                      </Box>
                    </Stack>
                  </Grid.Col>
                  <Grid.Col span={4}>
                    <Stack>
                      <Button variant="default" color="red" size="lg">
                        <IconFileTypePdf />
                        &nbsp;Lihat Berkas
                      </Button>
                      <Button variant="default" color="red" size="lg">
                        <IconDownload />
                        &nbsp;Unduh (72x)
                      </Button>
                    </Stack>
                  </Grid.Col>
                </Grid>
              </Paper>
            </Stack>
            <Stack>
              <Center>
                <Paper p={"md"} w={"60%"}>
                  <Center>
                    <Stack>
                      <Title align="center" order={1} fw={700} size={"26px"}>
                        Ingin mengajukan permohonan informasi?
                      </Title>
                      <Button variant="default" color="red" size="lg">
                        Ajukan permohonan informasi
                      </Button>
                    </Stack>
                  </Center>
                </Paper>
              </Center>
            </Stack>
          </Stack>
        </Container>
      </main>
      <Footer></Footer>
    </>
  );
}
