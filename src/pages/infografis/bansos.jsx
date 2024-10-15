import Header from "../../Component/header";
import Footer from "../../Component/footer";
import Link from "./link";

import {
  Container,
  Stack,
  Title,
  Paper,
  Text,
  Grid,
  Input,
} from "@mantine/core";

import { IconSearch } from "@tabler/icons-react";

export default function Bansos() {
  return (
    <>
      <Header></Header>
      <main>
        <Container className="responsiveContainer" mt={"90px"}>
          <Link></Link>
          <Stack mt={"100px"} gap={"100px"}>
            <Stack>
              <Title order={1}>Jumlah Penerima Bansos</Title>
              <Grid gutter={"lg"}>
                <Grid.Col span={6}>
                  <Paper shadow="sm" p={"lg"}>
                    <Grid>
                      <Grid.Col span={4}>
                        <Stack justify="center" align="center" gap={0}>
                          <Text size="44px" fw={700}>
                            479
                          </Text>
                          <Text size="xl" fw={500}>
                            Penduduk
                          </Text>
                        </Stack>
                      </Grid.Col>
                      <Grid.Col span={8}>
                        <Text size="xl" fw={500}>
                          Mendapatkan Bantuan
                          <br />
                          <Text component="span" fw={700}>
                            VAKSIN 1
                          </Text>
                        </Text>
                      </Grid.Col>
                    </Grid>
                  </Paper>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Paper shadow="sm" p={"lg"}>
                    <Grid>
                      <Grid.Col span={4}>
                        <Stack justify="center" align="center" gap={0}>
                          <Text size="44px" fw={700}>
                            336
                          </Text>
                          <Text size="xl" fw={500}>
                            Penduduk
                          </Text>
                        </Stack>
                      </Grid.Col>
                      <Grid.Col span={8}>
                        <Text size="xl" fw={500}>
                          Mendapatkan Bantuan
                          <br />
                          <Text component="span" fw={700}>
                            VAKSIN 2
                          </Text>
                        </Text>
                      </Grid.Col>
                    </Grid>
                  </Paper>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Paper shadow="sm" p={"lg"}>
                    <Grid>
                      <Grid.Col span={4}>
                        <Stack justify="center" align="center" gap={0}>
                          <Text size="44px" fw={700}>
                            299
                          </Text>
                          <Text size="xl" fw={500}>
                            Penduduk
                          </Text>
                        </Stack>
                      </Grid.Col>
                      <Grid.Col span={8}>
                        <Text size="xl" fw={500}>
                          Mendapatkan Bantuan
                          <br />
                          <Text component="span" fw={700}>
                            BPNT
                          </Text>
                        </Text>
                      </Grid.Col>
                    </Grid>
                  </Paper>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Paper shadow="sm" p={"lg"}>
                    <Grid>
                      <Grid.Col span={4}>
                        <Stack justify="center" align="center" gap={0}>
                          <Text size="44px" fw={700}>
                            173
                          </Text>
                          <Text size="xl" fw={500}>
                            Penduduk
                          </Text>
                        </Stack>
                      </Grid.Col>
                      <Grid.Col span={8}>
                        <Text size="xl" fw={500}>
                          Mendapatkan Bantuan
                          <br />
                          <Text component="span" fw={700}>
                            BLT
                          </Text>
                        </Text>
                      </Grid.Col>
                    </Grid>
                  </Paper>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Paper shadow="sm" p={"lg"}>
                    <Grid>
                      <Grid.Col span={4}>
                        <Stack justify="center" align="center" gap={0}>
                          <Text size="44px" fw={700}>
                            124
                          </Text>
                          <Text size="xl" fw={500}>
                            Penduduk
                          </Text>
                        </Stack>
                      </Grid.Col>
                      <Grid.Col span={8}>
                        <Text size="xl" fw={500}>
                          Mendapatkan Bantuan
                          <br />
                          <Text component="span" fw={700}>
                            PKH
                          </Text>
                        </Text>
                      </Grid.Col>
                    </Grid>
                  </Paper>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Paper shadow="sm" p={"lg"}>
                    <Grid>
                      <Grid.Col span={4}>
                        <Stack justify="center" align="center" gap={0}>
                          <Text size="44px" fw={700}>
                            1
                          </Text>
                          <Text size="xl" fw={500}>
                            Penduduk
                          </Text>
                        </Stack>
                      </Grid.Col>
                      <Grid.Col span={8}>
                        <Text size="xl" fw={500}>
                          Mendapatkan Bantuan
                          <br />
                          <Text component="span" fw={700}>
                            BST
                          </Text>
                        </Text>
                      </Grid.Col>
                    </Grid>
                  </Paper>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Paper shadow="sm" p={"lg"}>
                    <Grid>
                      <Grid.Col span={4}>
                        <Stack justify="center" align="center" gap={0}>
                          <Text size="44px" fw={700}>
                            1
                          </Text>
                          <Text size="xl" fw={500}>
                            Penduduk
                          </Text>
                        </Stack>
                      </Grid.Col>
                      <Grid.Col span={8}>
                        <Text size="xl" fw={500}>
                          Mendapatkan Bantuan
                          <br />
                          <Text component="span" fw={700}>
                            Bantuan Caleg
                          </Text>
                        </Text>
                      </Grid.Col>
                    </Grid>
                  </Paper>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Paper shadow="sm" p={"lg"}>
                    <Grid>
                      <Grid.Col span={4}>
                        <Stack justify="center" align="center" gap={0}>
                          <Text size="44px" fw={700}>
                            0
                          </Text>
                          <Text size="xl" fw={500}>
                            Penduduk
                          </Text>
                        </Stack>
                      </Grid.Col>
                      <Grid.Col span={8}>
                        <Text size="xl" fw={500}>
                          Mendapatkan Bantuan
                          <br />
                          <Text component="span" fw={700}>
                            BAZNAS
                          </Text>
                        </Text>
                      </Grid.Col>
                    </Grid>
                  </Paper>
                </Grid.Col>
              </Grid>
            </Stack>
            <Stack>
              <Title order={1}>Cek Penerima Bansos</Title>
              <Input
                size="md"
                placeholder="Masukkan NIK penerima bansos"
                leftSection={<IconSearch />}
              />
            </Stack>
          </Stack>
        </Container>
      </main>
      <Footer></Footer>
    </>
  );
}
