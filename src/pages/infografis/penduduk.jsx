import Header from "../../Component/header";
import Footer from "../../Component/footer";
import Link from "./link";
import data from "./data/pekerjaan";

import {
  dusun,
  kelompokUmur,
  pendidikan,
  wajibPilih,
} from "./data/dataInfografis";

import cx from "clsx";
import { useState } from "react";
import classes from "./TableScrollArea.module.css";

import {
  Container,
  Stack,
  Grid,
  Paper,
  Title,
  Text,
  Box,
  Image,
  Group,
  Table,
  ScrollArea,
  useMantineTheme,
} from "@mantine/core";

import { BarChart, PieChart } from "@mantine/charts";

export default function Penduduk() {
  const [scrolled, setScrolled] = useState(false);

  const rows = data.map((row) => (
    <Table.Tr key={row.jenisPekerjaan}>
      <Table.Td>{row.jenisPekerjaan}</Table.Td>
      <Table.Td>{row.jumlah}</Table.Td>
    </Table.Tr>
  ));

  const theme = useMantineTheme();

  return (
    <>
      <Header></Header>

      <main>
        <Container className="responsiveContainer" mt={"90px"}>
          <Link></Link>
          <Stack gap={"100px"}>
            <Grid justify="center" align="center">
              <Grid.Col span={6}>
                <Box>
                  <Title order={1} tt={"uppercase"} size={"44px"}>
                    Demografi Penduduk
                  </Title>
                  <Text size="20px" lineClamp={4}>
                    Memberikan informasi lengkap mengenai karakteristik
                    demografi penduduk suatu wilayah. Mulai dari jumlah
                    penduduk, usia, jenis kelamin, tingkat pendidikan,
                    pekerjaan, agama, dan aspek penting lainnya yang
                    menggambarkan komposisi populasi secara rinci.
                  </Text>
                </Box>
              </Grid.Col>
              <Grid.Col span={6}>
                <Group justify="flex-end">
                  <Image
                    src={
                      "https://cdn.digitaldesa.com/statics/profil-v2/assets/other-1-DEP2VegA.png"
                    }
                  />
                </Group>
              </Grid.Col>
            </Grid>

            <Stack>
              <Title order={1} size={"38px"}>
                Jumlah Penduduk dan Kepala Keluarga
              </Title>
              <Grid gutter={"sm"}>
                <Grid.Col span={6}>
                  <Paper h={160} shadow="sm" p={"md"}>
                    <Grid justify="center" align="center">
                      <Grid.Col span={4}>
                        <Image
                          ms={"45"}
                          h={100}
                          w={"auto"}
                          src={
                            "https://cdn.digitaldesa.com/statics/profil-v2/assets/icon-total-penduduk-Du2cCbAO.svg"
                          }
                        />
                      </Grid.Col>
                      <Grid.Col span={8}>
                        <Stack>
                          <Text tt={"uppercase"} size="24px" fw={700}>
                            Total Penduduk
                          </Text>
                          <Text size="32px" fw={500}>
                            <Text component="span" c={"gray"} fw={700}>
                              4.486
                            </Text>
                            &nbsp;Jiwa
                          </Text>
                        </Stack>
                      </Grid.Col>
                    </Grid>
                  </Paper>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Paper h={160} shadow="sm" p={"md"}>
                    <Grid justify="center" align="center">
                      <Grid.Col span={4}>
                        <Image
                          ms={"45"}
                          h={100}
                          w={"auto"}
                          src={
                            "https://cdn.digitaldesa.com/statics/profil-v2/assets/icon-kepala-keluarga-D4UfE36x.svg"
                          }
                        />
                      </Grid.Col>
                      <Grid.Col span={8}>
                        <Stack>
                          <Text tt={"uppercase"} size="24px" fw={700}>
                            Kepala Keluarga
                          </Text>
                          <Text size="32px" fw={500}>
                            <Text component="span" c={"gray"} fw={700}>
                              1.382
                            </Text>
                            &nbsp;Jiwa
                          </Text>
                        </Stack>
                      </Grid.Col>
                    </Grid>
                  </Paper>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Paper h={160} shadow="sm" p={"md"}>
                    <Grid justify="center" align="center">
                      <Grid.Col span={4}>
                        <Image
                          ms={"45"}
                          h={100}
                          w={"auto"}
                          src={
                            "https://cdn.digitaldesa.com/statics/profil-v2/assets/icon-perempuan-BCmUG8mA.svg"
                          }
                        />
                      </Grid.Col>
                      <Grid.Col span={8}>
                        <Stack>
                          <Text tt={"uppercase"} size="24px" fw={700}>
                            Perempuan
                          </Text>
                          <Text size="32px" fw={500}>
                            <Text component="span" c={"gray"} fw={700}>
                              2.299
                            </Text>
                            &nbsp;Jiwa
                          </Text>
                        </Stack>
                      </Grid.Col>
                    </Grid>
                  </Paper>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Paper h={160} shadow="sm" p={"md"}>
                    <Grid justify="center" align="center">
                      <Grid.Col span={4}>
                        <Image
                          ms={"45"}
                          h={100}
                          w={"auto"}
                          src={
                            "https://cdn.digitaldesa.com/statics/profil-v2/assets/icon-laki-CmERQRaD.svg"
                          }
                        />
                      </Grid.Col>
                      <Grid.Col span={8}>
                        <Stack>
                          <Text tt={"uppercase"} size="24px" fw={700}>
                            Laki Laki
                          </Text>
                          <Text size="32px" fw={500}>
                            <Text component="span" c={"gray"} fw={700}>
                              2.187
                            </Text>
                            &nbsp;Jiwa
                          </Text>
                        </Stack>
                      </Grid.Col>
                    </Grid>
                  </Paper>
                </Grid.Col>
              </Grid>
            </Stack>

            <Stack>
              <Title order={1} size={"44px"}>
                Berdasarkan Kelompok Umur
              </Title>
              <Paper p={"lg"}>
                <Text align="center" mb={"md"}>
                  Chart Umur
                </Text>
                <BarChart
                  h={300}
                  data={kelompokUmur}
                  dataKey="umur"
                  orientation="horizontal"
                  xAxisLabel="Umur"
                  // withLegend
                  // withXAxis={false}
                  gridAxis="xy"
                  barChartProps={{ syncId: "umur" }}
                  yAxisProps={{ width: 60 }}
                  barProps={{ radius: 5 }}
                  series={[{ name: "Perempuan", color: "blue.6" }]}
                />
                {/* <Text align="center" mt={"lg"} mb={"md"}>
                  
                </Text>
                <BarChart
                  h={300}
                  data={kelompokUmur}
                  dataKey="umur"
                  orientation="horizontal"
                  xAxisLabel="Umur"
                  // withLegend
                  gridAxis="xy"
                  barChartProps={{ syncId: "umur" }}
                  yAxisProps={{ width: 60 }}
                  barProps={{ radius: 5 }}
                  series={[{ name: "Perempuan", color: "pink.6" }]}
                /> */}
              </Paper>
              {/* <Paper shadow="sm" p={"lg"}>
                <Text fw={500}>
                  Untuk jenis kelamin laki-laki, kelompok umur <b>10-14</b>{" "}
                  adalah kelompok umur tertinggi dengan jumlah orang{" "}
                  <b>215 orang</b> atau <b>9.89%.</b> Sedangkan, kelompok umur{" "}
                  <b>85+ dan 80-84 tahun</b> adalah yang terendah dengan
                  masing-masing berjumlah <b>11 orang</b> atau <b>0.50%</b>
                </Text>
              </Paper>
              <Paper shadow="sm" p={"lg"}>
                <Text fw={500}>
                  Untuk jenis kelamin Perempuan, kelompok umur <b>10-14</b>{" "}
                  adalah kelompok umur tertinggi dengan jumlah orang{" "}
                  <b>215 orang</b> atau <b>9.89%.</b> Sedangkan, kelompok umur{" "}
                  <b>85+ dan 80-84 tahun</b> adalah yang terendah dengan
                  masing-masing berjumlah <b>11 orang</b> atau <b>0.50%</b>
                </Text>
              </Paper> */}
            </Stack>

            {/* <Stack>
              <Title order={1} size={"44px"}>
                Berdasarkan Dusun
              </Title>
              <Paper>
                <Grid justify="center" align="center">
                  <Grid.Col span={6}>
                    <PieChart
                      size={400}
                      withLabelsLine
                      // withTooltip
                      labelsPosition="outside"
                      labelsType="percent"
                      withLabels
                      data={dusun}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <Group justify="center">
                      <Box>
                        <Title order={1} ms={"-20px"}>
                          Keterangan
                        </Title>
                        <Text>Merah: </Text>
                        <Text>Biru: </Text>
                        <Text>Kuning: </Text>
                      </Box>
                    </Group>
                  </Grid.Col>
                </Grid>
              </Paper>
            </Stack> */}

            <Stack>
              <Title order={1} size={"34px"}>
                Berdasarkan Pendidikan
              </Title>
              <BarChart
                h={300}
                data={pendidikan}
                dataKey="judul"
                series={[{ name: "jumlah", color: "violet.6" }]}
                tickLine="x"
              />
            </Stack>

            <Stack>
              <Title order={1} size={"34px"}>
                Berdasarkan Pekerjaan
              </Title>
              <Grid>
                <Grid.Col span={4}>
                  <Paper shadow="sm">
                    <ScrollArea
                      h={376}
                      onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
                    >
                      <Table>
                        <Table.Thead
                          className={cx(classes.header, {
                            [classes.scrolled]: scrolled,
                          })}
                        >
                          <Table.Tr
                            style={{
                              backgroundColor: theme.colors.blue[1],
                            }}
                          >
                            <Table.Th>Jenis Pekerjaan</Table.Th>
                            <Table.Th>Jumlah</Table.Th>
                          </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>{rows}</Table.Tbody>
                      </Table>
                    </ScrollArea>
                  </Paper>
                </Grid.Col>
                <Grid.Col span={8}>
                  <Grid gutter={"md"}>
                    <Grid.Col span={4}>
                      <Paper p={"md"} shadow="sm">
                        <Stack>
                          <Text h={100} fw={700} size="lg">
                            Pelajar/Mahasiswa
                          </Text>
                          <Text fw={700} size="32px" ta={"right"}>
                            1.034
                          </Text>
                        </Stack>
                      </Paper>
                    </Grid.Col>
                    <Grid.Col span={4}>
                      <Paper p={"md"} shadow="sm">
                        <Stack>
                          <Text h={100} fw={700} size="lg">
                            Mengurus Rumah Tangga
                          </Text>
                          <Text fw={700} size="32px" ta={"right"}>
                            947
                          </Text>
                        </Stack>
                      </Paper>
                    </Grid.Col>
                    <Grid.Col span={4}>
                      <Paper p={"md"} shadow="sm">
                        <Stack>
                          <Text h={100} fw={700} size="lg">
                            Belum/Tidak Bekerja
                          </Text>
                          <Text fw={700} size="32px" ta={"right"}>
                            1.124
                          </Text>
                        </Stack>
                      </Paper>
                    </Grid.Col>
                    <Grid.Col span={4}>
                      <Paper p={"md"} shadow="sm">
                        <Stack>
                          <Text h={100} fw={700} size="lg">
                            Wiraswasta
                          </Text>
                          <Text fw={700} size="32px" ta={"right"}>
                            1.332
                          </Text>
                        </Stack>
                      </Paper>
                    </Grid.Col>
                    {/* <Grid.Col span={4}>
                      <Paper p={"md"} shadow="sm">
                        <Stack>
                          <Text h={100} fw={700} size="lg">
                            Pegawai Negeri Sipil (PNS)
                          </Text>
                          <Text fw={700} size="32px" ta={"right"}>
                            1.158
                          </Text>
                        </Stack>
                      </Paper>
                    </Grid.Col>
                    <Grid.Col span={4}>
                      <Paper p={"md"} shadow="sm">
                        <Stack>
                          <Text h={100} fw={700} size="lg">
                            Petani/Pekebun
                          </Text>
                          <Text fw={700} size="32px" ta={"right"}>
                            1.158
                          </Text>
                        </Stack>
                      </Paper>
                    </Grid.Col> */}
                  </Grid>
                </Grid.Col>
              </Grid>
            </Stack>

            <Stack>
              <Title>Berdasarkan Wajib Pilih</Title>
              <BarChart
                h={300}
                data={wajibPilih}
                dataKey="tahun"
                series={[{ name: "jumlah", color: "violet.6" }]}
                tickLine="x"
              />
            </Stack>

            <Stack>
              <Title order={1} size={"38px"}>
                Berdasarkan Perkawinan
              </Title>
              <Grid gutter={"sm"}>
                <Grid.Col span={4}>
                  <Paper h={160} shadow="sm" p={"md"}>
                    <Grid justify="center" align="center">
                      <Grid.Col span={4}>
                        <Image
                          h={100}
                          w={"auto"}
                          src={
                            "https://cdn.digitaldesa.com/statics/profil-v2/assets/icon-belum-kawin-B6LGf_QT.svg"
                          }
                        />
                      </Grid.Col>
                      <Grid.Col span={8}>
                        <Stack>
                          <Text size="24px" fw={700}>
                            Belum Kawin
                          </Text>
                          <Text
                            component="span"
                            c={"gray"}
                            size="32px"
                            x
                            fw={700}
                          >
                            2.426
                          </Text>
                        </Stack>
                      </Grid.Col>
                    </Grid>
                  </Paper>
                </Grid.Col>
                <Grid.Col span={4}>
                  <Paper h={160} shadow="sm" p={"md"}>
                    <Grid justify="center" align="center">
                      <Grid.Col span={4}>
                        <Image
                          h={100}
                          w={"auto"}
                          src={
                            "https://cdn.digitaldesa.com/statics/profil-v2/assets/icon-kawin-DDA193Z5.svg"
                          }
                        />
                      </Grid.Col>
                      <Grid.Col span={8}>
                        <Stack>
                          <Text size="24px" fw={700}>
                            Kawin
                          </Text>
                          <Text
                            component="span"
                            c={"gray"}
                            size="32px"
                            fw={700}
                          >
                            3.009
                          </Text>
                        </Stack>
                      </Grid.Col>
                    </Grid>
                  </Paper>
                </Grid.Col>
                <Grid.Col span={4}>
                  <Paper h={160} shadow="sm" p={"md"}>
                    <Grid justify="center" align="center">
                      <Grid.Col span={4}>
                        <Image
                          h={100}
                          w={"auto"}
                          src={
                            "https://cdn.digitaldesa.com/statics/profil-v2/assets/icon-cerai-mati-VdEzxQgX.svg"
                          }
                        />
                      </Grid.Col>
                      <Grid.Col span={8}>
                        <Stack>
                          <Text size="24px" fw={700}>
                            Cerai Mati
                          </Text>
                          <Text
                            component="span"
                            c={"gray"}
                            size="32px"
                            fw={700}
                          >
                            409
                          </Text>
                        </Stack>
                      </Grid.Col>
                    </Grid>
                  </Paper>
                </Grid.Col>
                <Grid.Col span={4}>
                  <Paper h={160} shadow="sm" p={"md"}>
                    <Grid justify="center" align="center">
                      <Grid.Col span={4}>
                        <Image
                          h={100}
                          w={"auto"}
                          src={
                            "https://cdn.digitaldesa.com/statics/profil-v2/assets/icon-cerai-hidup-c75sVKpW.svg"
                          }
                        />
                      </Grid.Col>
                      <Grid.Col span={8}>
                        <Stack>
                          <Text size="24px" fw={700}>
                            Cerai Hidup
                          </Text>
                          <Text
                            component="span"
                            c={"gray"}
                            size="32px"
                            fw={700}
                          >
                            224
                          </Text>
                        </Stack>
                      </Grid.Col>
                    </Grid>
                  </Paper>
                </Grid.Col>
                {/* <Grid.Col span={4}>
                  <Paper h={160} shadow="sm" p={"md"}>
                    <Grid justify="center" align="center">
                      <Grid.Col span={4}>
                        <Image
                          h={100}
                          w={"auto"}
                          src={
                            "https://cdn.digitaldesa.com/statics/profil-v2/assets/icon-kawin-tercatat-Cr_1J14L.svg"
                          }
                        />
                      </Grid.Col>
                      <Grid.Col span={8}>
                        <Stack>
                          <Text size="24px" fw={700}>
                            Kawin Tercatat
                          </Text>
                          <Text
                            component="span"
                            c={"gray"}
                            size="32px"
                            fw={700}
                          >
                            2.187
                          </Text>
                        </Stack>
                      </Grid.Col>
                    </Grid>
                  </Paper>
                </Grid.Col>
                <Grid.Col span={4}>
                  <Paper h={160} shadow="sm" p={"md"}>
                    <Grid justify="center" align="center">
                      <Grid.Col span={4}>
                        <Image
                          h={100}
                          w={"auto"}
                          src={
                            "https://cdn.digitaldesa.com/statics/profil-v2/assets/icon-kawin-tak-tercatat-Ba6jJHqw.svg"
                          }
                        />
                      </Grid.Col>
                      <Grid.Col span={8}>
                        <Stack>
                          <Text size="24px" fw={700}>
                            Kawin Tak Tercatat
                          </Text>
                          <Text
                            component="span"
                            c={"gray"}
                            size="32px"
                            fw={700}
                          >
                            2.187
                          </Text>
                        </Stack>
                      </Grid.Col>
                    </Grid>
                  </Paper>
                </Grid.Col> */}
              </Grid>
            </Stack>

            <Stack>
              <Title order={1} size={"38px"}>
                Berdasarkan Agama
              </Title>
              <Grid gutter={"sm"}>
                <Grid.Col span={4}>
                  <Paper h={160} shadow="sm" p={"md"}>
                    <Grid justify="center" align="center">
                      <Grid.Col span={4}>
                        <Image
                          h={100}
                          w={"auto"}
                          src={
                            "https://cdn.digitaldesa.com/statics/profil-v2/assets/icon-islam-B2-fwtBi.svg"
                          }
                        />
                      </Grid.Col>
                      <Grid.Col span={8}>
                        <Stack>
                          <Text size="24px" fw={700}>
                            Islam
                          </Text>
                          <Text
                            component="span"
                            c={"gray"}
                            size="32px"
                            fw={700}
                          >
                            5.979
                          </Text>
                        </Stack>
                      </Grid.Col>
                    </Grid>
                  </Paper>
                </Grid.Col>
                <Grid.Col span={4}>
                  <Paper h={160} shadow="sm" p={"md"}>
                    <Grid justify="center" align="center">
                      <Grid.Col span={4}>
                        <Image
                          h={100}
                          w={"auto"}
                          src={
                            "https://cdn.digitaldesa.com/statics/profil-v2/assets/icon-kristen-CvNUV1pq.svg"
                          }
                        />
                      </Grid.Col>
                      <Grid.Col span={8}>
                        <Stack>
                          <Text size="24px" fw={700}>
                            Kristen
                          </Text>
                          <Text
                            component="span"
                            c={"gray"}
                            size="32px"
                            fw={700}
                          >
                            89
                          </Text>
                        </Stack>
                      </Grid.Col>
                    </Grid>
                  </Paper>
                </Grid.Col>
                <Grid.Col span={4}>
                  <Paper h={160} shadow="sm" p={"md"}>
                    <Grid justify="center" align="center">
                      <Grid.Col span={4}>
                        <Image
                          h={100}
                          w={"auto"}
                          src={
                            "https://cdn.digitaldesa.com/statics/profil-v2/assets/icon-konghuchu-Bt_R-Ivr.svg"
                          }
                        />
                      </Grid.Col>
                      <Grid.Col span={8}>
                        <Stack>
                          <Text size="24px" fw={700}>
                            Konghucu
                          </Text>
                          <Text
                            component="span"
                            c={"gray"}
                            size="32px"
                            fw={700}
                          >
                            0
                          </Text>
                        </Stack>
                      </Grid.Col>
                    </Grid>
                  </Paper>
                </Grid.Col>
                <Grid.Col span={4}>
                  <Paper h={160} shadow="sm" p={"md"}>
                    <Grid justify="center" align="center">
                      <Grid.Col span={4}>
                        <Image
                          h={100}
                          w={"auto"}
                          src={
                            "https://cdn.digitaldesa.com/statics/profil-v2/assets/icon-katolik-DFXj5yZv.svg"
                          }
                        />
                      </Grid.Col>
                      <Grid.Col span={8}>
                        <Stack>
                          <Text size="24px" fw={700}>
                            Katolik
                          </Text>
                          <Text
                            component="span"
                            c={"gray"}
                            size="32px"
                            fw={700}
                          >
                            0
                          </Text>
                        </Stack>
                      </Grid.Col>
                    </Grid>
                  </Paper>
                </Grid.Col>
                <Grid.Col span={4}>
                  <Paper h={160} shadow="sm" p={"md"}>
                    <Grid justify="center" align="center">
                      <Grid.Col span={4}>
                        <Image
                          h={100}
                          w={"auto"}
                          src={
                            "https://cdn.digitaldesa.com/statics/profil-v2/assets/icon-hindu-D9LgBI6W.svg"
                          }
                        />
                      </Grid.Col>
                      <Grid.Col span={8}>
                        <Stack>
                          <Text size="24px" fw={700}>
                            Hindu
                          </Text>
                          <Text
                            component="span"
                            c={"gray"}
                            size="32px"
                            fw={700}
                          >
                            0
                          </Text>
                        </Stack>
                      </Grid.Col>
                    </Grid>
                  </Paper>
                </Grid.Col>
                <Grid.Col span={4}>
                  <Paper h={160} shadow="sm" p={"md"}>
                    <Grid justify="center" align="center">
                      <Grid.Col span={4}>
                        <Image
                          h={100}
                          w={"auto"}
                          src={
                            "https://cdn.digitaldesa.com/statics/profil-v2/assets/icon-buddha-Cfftt9vu.svg"
                          }
                        />
                      </Grid.Col>
                      <Grid.Col span={8}>
                        <Stack>
                          <Text size="24px" fw={700}>
                            Budha
                          </Text>
                          <Text
                            component="span"
                            c={"gray"}
                            size="32px"
                            fw={700}
                          >
                            0
                          </Text>
                        </Stack>
                      </Grid.Col>
                    </Grid>
                  </Paper>
                </Grid.Col>
                <Grid.Col span={4} offset={4}>
                  <Paper h={160} shadow="sm" p={"md"}>
                    <Grid justify="center" align="center">
                      <Grid.Col span={4}>
                        <Image
                          h={100}
                          w={"auto"}
                          src={
                            "https://cdn.digitaldesa.com/statics/profil-v2/assets/icon-kepercayaan-lainnya-DFa3yh4T.svg"
                          }
                        />
                      </Grid.Col>
                      <Grid.Col span={8}>
                        <Stack>
                          <Text size="24px" fw={700}>
                            Kepercayaan Lainya
                          </Text>
                          <Text
                            component="span"
                            c={"gray"}
                            size="32px"
                            fw={700}
                          >
                            0
                          </Text>
                        </Stack>
                      </Grid.Col>
                    </Grid>
                  </Paper>
                </Grid.Col>
              </Grid>
            </Stack>
          </Stack>
        </Container>
      </main>
      <Footer></Footer>
    </>
  );
}
