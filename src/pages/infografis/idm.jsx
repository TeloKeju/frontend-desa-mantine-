import Header from "../../Component/header";
import Footer from "../../Component/footer";
import Link from "./link";

import { Container, Stack, Title, Paper, Text, Grid } from "@mantine/core";

import { AreaChart } from "@mantine/charts";

import { dataIdm } from "./data/dataInfografis";

export default function Idm() {
  return (
    <>
      <Header></Header>
      <main>
        <Container className="responsiveContainer" mt={"90px"}>
          <Link></Link>
          <Stack gap={"100px"}>
            <Stack>
              <Grid justify="center" align="center">
                <Grid.Col p={75} span={6}>
                  <Title size={38} order={1}>
                    IDM
                  </Title>
                  <Text size="xl">
                    Indeks Desa Membangun (IDM) merupakan indeks komposit yang
                    dibentuk dari tiga indeks, yaitu Indeks Ketahanan Sosial,
                    Indeks Ketahanan Ekonomi, dan Indeks Ketahanan
                    Ekologi/Lingkungan.
                  </Text>
                </Grid.Col>
                <Grid.Col p={75} span={6}>
                  <Stack>
                    <Paper shadow="sm" p={"12 38px"}>
                      <Text size="lg" fw={500} tt={"uppercase"}>
                        Skor idm 2023
                      </Text>
                      <Text size="44px" fw={700} ta={"end"}>
                        0.8619
                      </Text>
                    </Paper>
                    <Paper shadow="sm" p={"12 38px"}>
                      <Text size="lg" fw={500} tt={"uppercase"}>
                        Status idm 2023
                      </Text>
                      <Text size="44px" fw={700} ta={"end"} tt={"uppercase"}>
                        Mandiri
                      </Text>
                    </Paper>
                  </Stack>
                </Grid.Col>
              </Grid>
              <Grid>
                <Grid.Col span={4}>
                  <Paper shadow="sm" p={"12 38px"}>
                    <Text size="lg" fw={500}>
                      Target Status
                    </Text>
                    <Text size="32px" fw={700} ta={"end"} tt={"uppercase"}>
                      Mandiri
                    </Text>
                  </Paper>
                </Grid.Col>
                <Grid.Col span={4}>
                  <Paper shadow="sm" p={"12 38px"}>
                    <Text size="lg" fw={500} tt={"uppercase"}>
                      Skor Minimal
                    </Text>
                    <Text size="32px" fw={700} ta={"end"} tt={"uppercase"}>
                      0.8156
                    </Text>
                  </Paper>
                </Grid.Col>
                <Grid.Col span={4}>
                  <Paper shadow="sm" p={"12 38px"}>
                    <Text size="lg" fw={500}>
                      Penambahan
                    </Text>
                    <Text size="32px" fw={700} ta={"end"} tt={"uppercase"}>
                      -0.0463
                    </Text>
                  </Paper>
                </Grid.Col>
                <Grid.Col span={4}>
                  <Paper shadow="sm" p={"12 38px"}>
                    <Text size="lg" fw={500}>
                      Skor IKS
                    </Text>
                    <Text size="32px" fw={700} ta={"end"} tt={"uppercase"}>
                      0.8857
                    </Text>
                  </Paper>
                </Grid.Col>
                <Grid.Col span={4}>
                  <Paper shadow="sm" p={"12 38px"}>
                    <Text size="lg" fw={500}>
                      Skor IKE
                    </Text>
                    <Text size="32px" fw={700} ta={"end"} tt={"uppercase"}>
                      0.9000
                    </Text>
                  </Paper>
                </Grid.Col>
                <Grid.Col span={4}>
                  <Paper shadow="sm" p={"12 38px"}>
                    <Text size="lg" fw={500}>
                      Skor IKL
                    </Text>
                    <Text size="32px" fw={700} ta={"end"} tt={"uppercase"}>
                      0.8000
                    </Text>
                  </Paper>
                </Grid.Col>
              </Grid>
            </Stack>

            <Stack>
              <Title order={1}>Skor IDM tahun ke tahun</Title>
              <AreaChart
                h={300}
                data={dataIdm}
                dataKey="tahun"
                series={[{ name: "skor", color: "indigo.6" }]}
                curveType="linear"
              />
            </Stack>
          </Stack>
        </Container>
      </main>
      <Footer></Footer>
    </>
  );
}
