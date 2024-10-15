import Header from "../../Component/header";
import Footer from "../../Component/footer";
import Link from "./link";

import {
  Container,
  Stack,
  Title,
  Grid,
  Image,
  Flex,
  Paper,
  Text,
  Group,
} from "@mantine/core";

export default function Sdgs() {
  return (
    <>
      <Header></Header>
      <main>
        <Container className="responsiveContainer" mt={"90px"}>
          <Link></Link>
          <Stack gap={"100px"}>
            <Stack>
              <Grid justify="center" align="center">
                <Grid.Col span={6}>
                  <Stack>
                    <Title order={1} size={"44px"}>
                      SDGs Desa
                    </Title>
                    <Text size="xl">
                      SDGs Desa mengacu pada upaya yang dilakukan di tingkat
                      desa untuk mencapai Tujuan Pembangunan Berkelanjutan
                      (Sustainable Development Goals/SDGs). SDGs merupakan
                      agenda global yang ditetapkan oleh Perserikatan
                      Bangsa-Bangsa (PBB) untuk mengatasi berbagai tantangan
                      sosial, ekonomi, dan lingkungan di seluruh dunia
                    </Text>
                    <Paper shadow="sm" p={"md"}>
                      <Grid>
                        <Grid.Col span={6}>
                          <Text size="xl" fw={700}>
                            Skor SDGs Desa Sonoageng
                          </Text>
                        </Grid.Col>
                        <Grid.Col span={6}>
                          <Text size="60px" fw={700}>
                            54.38
                          </Text>
                        </Grid.Col>
                      </Grid>
                    </Paper>
                  </Stack>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Group justify="flex-end">
                    <Image
                      w={"100%"}
                      src={
                        "https://cdn.digitaldesa.com/statics/profil-v2/assets/other-2-BspOaiST.png"
                      }
                    />
                  </Group>
                </Grid.Col>
              </Grid>
            </Stack>

            <Stack>
              <Grid>
                <Grid.Col span={3}>
                  <Paper shadow="md" radius={"md"}>
                    <Stack p={"md"}>
                      <Title order={2} size={"20px"} fw={700}>
                        Desa Tanpa Kemiskinan
                      </Title>
                      <Group justify="space-between">
                        <Image
                          w={80}
                          src={
                            "https://cdn.digitaldesa.com/statics/profil-v2/assets/1-D1ogSllN.webp"
                          }
                        />
                        <Stack gap={0} ta={"end"}>
                          <Text size="md">Nilai</Text>
                          <Text size="50px" fw={700}>
                            53.75
                          </Text>
                        </Stack>
                      </Group>
                    </Stack>
                  </Paper>
                </Grid.Col>
                <Grid.Col span={3}>
                  <Paper shadow="md" radius={"md"}>
                    <Stack p={"md"}>
                      <Title order={2} size={"20px"} fw={700}>
                        Desa Tanpa Kelaparan
                      </Title>
                      <Group justify="space-between">
                        <Image
                          w={80}
                          src={
                            "https://cdn.digitaldesa.com/statics/profil-v2/assets/2-DHeN7cNq.webp"
                          }
                        />
                        <Stack gap={0} ta={"end"}>
                          <Text size="md">Nilai</Text>
                          <Text size="50px" fw={700}>
                            53.75
                          </Text>
                        </Stack>
                      </Group>
                    </Stack>
                  </Paper>
                </Grid.Col>
                <Grid.Col span={3}>
                  <Paper shadow="md" radius={"md"}>
                    <Stack p={"md"}>
                      <Title order={2} size={"20px"} fw={700}>
                        Desa Sehat dan Sejahtera
                      </Title>
                      <Group justify="space-between">
                        <Image
                          w={80}
                          src={
                            "https://cdn.digitaldesa.com/statics/profil-v2/assets/3-8DPdWVsr.webp"
                          }
                        />
                        <Stack gap={0} ta={"end"}>
                          <Text size="md">Nilai</Text>
                          <Text size="50px" fw={700}>
                            53.75
                          </Text>
                        </Stack>
                      </Group>
                    </Stack>
                  </Paper>
                </Grid.Col>
                <Grid.Col span={3}>
                  <Paper shadow="md" radius={"md"}>
                    <Stack p={"md"}>
                      <Title order={2} size={"20px"} fw={700}>
                        Pendidikan Desa Berkualitas
                      </Title>
                      <Group justify="space-between">
                        <Image
                          w={80}
                          src={
                            "https://cdn.digitaldesa.com/statics/profil-v2/assets/4-Dp0bLKhX.webp"
                          }
                        />
                        <Stack gap={0} ta={"end"}>
                          <Text size="md">Nilai</Text>
                          <Text size="50px" fw={700}>
                            53.75
                          </Text>
                        </Stack>
                      </Group>
                    </Stack>
                  </Paper>
                </Grid.Col>
                <Grid.Col span={3}>
                  <Paper shadow="md" radius={"md"}>
                    <Stack p={"md"}>
                      <Title order={2} size={"20px"} fw={700}>
                        Keterlibatan Perempuan Desa
                      </Title>
                      <Group justify="space-between">
                        <Image
                          w={80}
                          src={
                            "https://cdn.digitaldesa.com/statics/profil-v2/assets/5-Dg-rxKrN.webp"
                          }
                        />
                        <Stack gap={0} ta={"end"}>
                          <Text size="md">Nilai</Text>
                          <Text size="50px" fw={700}>
                            53.75
                          </Text>
                        </Stack>
                      </Group>
                    </Stack>
                  </Paper>
                </Grid.Col>
                <Grid.Col span={3}>
                  <Paper shadow="md" radius={"md"}>
                    <Stack p={"md"}>
                      <Title order={2} size={"20px"} fw={700}>
                        Desa Layak Air Bersih dan Sanitasi
                      </Title>
                      <Group justify="space-between">
                        <Image
                          w={80}
                          src={
                            "https://cdn.digitaldesa.com/statics/profil-v2/assets/6-CBjqaXey.webp"
                          }
                        />
                        <Stack gap={0} ta={"end"}>
                          <Text size="md">Nilai</Text>
                          <Text size="50px" fw={700}>
                            53.75
                          </Text>
                        </Stack>
                      </Group>
                    </Stack>
                  </Paper>
                </Grid.Col>
                <Grid.Col span={3}>
                  <Paper shadow="md" radius={"md"}>
                    <Stack p={"md"}>
                      <Title order={2} size={"20px"} fw={700}>
                        Desa Berenergi Bersih dan Terbarukan
                      </Title>
                      <Group justify="space-between">
                        <Image
                          w={80}
                          src={
                            "https://cdn.digitaldesa.com/statics/profil-v2/assets/7-BztRCfpv.webp"
                          }
                        />
                        <Stack gap={0} ta={"end"}>
                          <Text size="md">Nilai</Text>
                          <Text size="50px" fw={700}>
                            53.75
                          </Text>
                        </Stack>
                      </Group>
                    </Stack>
                  </Paper>
                </Grid.Col>
                <Grid.Col span={3}>
                  <Paper shadow="md" radius={"md"}>
                    <Stack p={"md"}>
                      <Title order={2} size={"20px"} fw={700}>
                        Pertumbuhan Ekonomi Desa Merata
                      </Title>
                      <Group justify="space-between">
                        <Image
                          w={80}
                          src={
                            "https://cdn.digitaldesa.com/statics/profil-v2/assets/8-BkVFrGRX.webp"
                          }
                        />
                        <Stack gap={0} ta={"end"}>
                          <Text size="md">Nilai</Text>
                          <Text size="50px" fw={700}>
                            53.75
                          </Text>
                        </Stack>
                      </Group>
                    </Stack>
                  </Paper>
                </Grid.Col>
                <Grid.Col span={3}>
                  <Paper shadow="md" radius={"md"}>
                    <Stack p={"md"}>
                      <Title order={2} size={"20px"} fw={700}>
                        Infrastruktur dan Inovasi Desa Sesuai Kebutuhan
                      </Title>
                      <Group justify="space-between">
                        <Image
                          w={80}
                          src={
                            "https://cdn.digitaldesa.com/statics/profil-v2/assets/9-C5H-2m6b.webp"
                          }
                        />
                        <Stack gap={0} ta={"end"}>
                          <Text size="md">Nilai</Text>
                          <Text size="50px" fw={700}>
                            53.75
                          </Text>
                        </Stack>
                      </Group>
                    </Stack>
                  </Paper>
                </Grid.Col>
                <Grid.Col span={3}>
                  <Paper shadow="md" radius={"md"}>
                    <Stack p={"md"}>
                      <Title order={2} size={"20px"} fw={700}>
                        Desa Tanpa Kesenjangan
                      </Title>
                      <Group justify="space-between">
                        <Image
                          w={80}
                          src={
                            "https://cdn.digitaldesa.com/statics/profil-v2/assets/10-ZoKpU38q.webp"
                          }
                        />
                        <Stack gap={0} ta={"end"}>
                          <Text size="md">Nilai</Text>
                          <Text size="50px" fw={700}>
                            53.75
                          </Text>
                        </Stack>
                      </Group>
                    </Stack>
                  </Paper>
                </Grid.Col>
                <Grid.Col span={3}>
                  <Paper shadow="md" radius={"md"}>
                    <Stack p={"md"}>
                      <Title order={2} size={"20px"} fw={700}>
                        Kawasan Pemukiman Desa Aman dan Nyaman
                      </Title>
                      <Group justify="space-between">
                        <Image
                          w={80}
                          src={
                            "https://cdn.digitaldesa.com/statics/profil-v2/assets/11-CbkZL1Cc.webp"
                          }
                        />
                        <Stack gap={0} ta={"end"}>
                          <Text size="md">Nilai</Text>
                          <Text size="50px" fw={700}>
                            53.75
                          </Text>
                        </Stack>
                      </Group>
                    </Stack>
                  </Paper>
                </Grid.Col>
                <Grid.Col span={3}>
                  <Paper shadow="md" radius={"md"}>
                    <Stack p={"md"}>
                      <Title order={2} size={"20px"} fw={700}>
                        Konsumsi dan Produksi Desa Sadar Lingkungan
                      </Title>
                      <Group justify="space-between">
                        <Image
                          w={80}
                          src={
                            "https://cdn.digitaldesa.com/statics/profil-v2/assets/12-Dg_I54-p.webp"
                          }
                        />
                        <Stack gap={0} ta={"end"}>
                          <Text size="md">Nilai</Text>
                          <Text size="50px" fw={700}>
                            53.75
                          </Text>
                        </Stack>
                      </Group>
                    </Stack>
                  </Paper>
                </Grid.Col>
                <Grid.Col span={3}>
                  <Paper shadow="md" radius={"md"}>
                    <Stack p={"md"}>
                      <Title order={2} size={"20px"} fw={700}>
                        Desa Tanggap Perubahan Iklim
                      </Title>
                      <Group justify="space-between">
                        <Image
                          w={80}
                          src={
                            "https://cdn.digitaldesa.com/statics/profil-v2/assets/13-Dz9ljOYY.webp"
                          }
                        />
                        <Stack gap={0} ta={"end"}>
                          <Text size="md">Nilai</Text>
                          <Text size="50px" fw={700}>
                            53.75
                          </Text>
                        </Stack>
                      </Group>
                    </Stack>
                  </Paper>
                </Grid.Col>
                <Grid.Col span={3}>
                  <Paper shadow="md" radius={"md"}>
                    <Stack p={"md"}>
                      <Title order={2} size={"20px"} fw={700}>
                        Desa Peduli Lingkungan Laut
                      </Title>
                      <Group justify="space-between">
                        <Image
                          w={80}
                          src={
                            "https://cdn.digitaldesa.com/statics/profil-v2/assets/14-CMaWoc7g.webp"
                          }
                        />
                        <Stack gap={0} ta={"end"}>
                          <Text size="md">Nilai</Text>
                          <Text size="50px" fw={700}>
                            53.75
                          </Text>
                        </Stack>
                      </Group>
                    </Stack>
                  </Paper>
                </Grid.Col>
                <Grid.Col span={3}>
                  <Paper shadow="md" radius={"md"}>
                    <Stack p={"md"}>
                      <Title order={2} size={"20px"} fw={700}>
                        Desa Peduli Lingkungan Darat
                      </Title>
                      <Group justify="space-between">
                        <Image
                          w={80}
                          src={
                            "https://cdn.digitaldesa.com/statics/profil-v2/assets/15-BthY7CHy.webp"
                          }
                        />
                        <Stack gap={0} ta={"end"}>
                          <Text size="md">Nilai</Text>
                          <Text size="50px" fw={700}>
                            53.75
                          </Text>
                        </Stack>
                      </Group>
                    </Stack>
                  </Paper>
                </Grid.Col>
                <Grid.Col span={3}>
                  <Paper shadow="md" radius={"md"}>
                    <Stack p={"md"}>
                      <Title order={2} size={"20px"} fw={700}>
                        Desa Damai Berkeadilan
                      </Title>
                      <Group justify="space-between">
                        <Image
                          w={80}
                          src={
                            "https://cdn.digitaldesa.com/statics/profil-v2/assets/16-DPCSOso-.webp"
                          }
                        />
                        <Stack gap={0} ta={"end"}>
                          <Text size="md">Nilai</Text>
                          <Text size="50px" fw={700}>
                            53.75
                          </Text>
                        </Stack>
                      </Group>
                    </Stack>
                  </Paper>
                </Grid.Col>
                <Grid.Col span={3} offset={3}>
                  <Paper shadow="md" radius={"md"}>
                    <Stack p={"md"}>
                      <Title order={2} size={"20px"} fw={700}>
                        Kemitraan Untuk Pembangunan Desa
                      </Title>
                      <Group justify="space-between">
                        <Image
                          w={80}
                          src={
                            "https://cdn.digitaldesa.com/statics/profil-v2/assets/17-BGkekl5X.webp"
                          }
                        />
                        <Stack gap={0} ta={"end"}>
                          <Text size="md">Nilai</Text>
                          <Text size="50px" fw={700}>
                            53.75
                          </Text>
                        </Stack>
                      </Group>
                    </Stack>
                  </Paper>
                </Grid.Col>
                <Grid.Col span={3}>
                  <Paper shadow="md" radius={"md"}>
                    <Stack p={"md"}>
                      <Title order={2} size={"20px"} fw={700}>
                        Kelembagaan Desa Dinamis dan Budaya Desa Adaptif
                      </Title>
                      <Group justify="space-between">
                        <Image
                          w={80}
                          src={
                            "https://cdn.digitaldesa.com/statics/profil-v2/assets/18-Cngf8K_G.webp"
                          }
                        />
                        <Stack gap={0} ta={"end"}>
                          <Text size="md">Nilai</Text>
                          <Text size="50px" fw={700}>
                            53.75
                          </Text>
                        </Stack>
                      </Group>
                    </Stack>
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
