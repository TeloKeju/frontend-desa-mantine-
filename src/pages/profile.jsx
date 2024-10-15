import Header from "../Component/header";
import Footer from "../Component/footer";

import {
  Container,
  Stack,
  Grid,
  Text,
  Title,
  Box,
  Image,
  List,
  Spoiler,
  Divider,
  Paper,
} from "@mantine/core";
import logo from "/logo.png";

export default function Profile() {
  return (
    <>
      <Header></Header>
      <main>
        <Container className="responsiveContainer" mt={"90px"}>
          <Stack gap={"100px"}>
            <Grid mt={"xl"} justify="center" align="center">
              <Grid.Col span={6}>
                <Stack>
                  <Box align="center">
                    <Image h={300} w={"auto"} src={logo}></Image>
                  </Box>
                  <Box>
                    <Title align="center" order={1}>
                      DESA SONOAGENG
                    </Title>
                    <Text align="center" fw={700}>
                      Kecamatan Prambon, Kabupaten Nganjuk, Provinsi Jawa Timur
                    </Text>
                  </Box>
                </Stack>
              </Grid.Col>
              <Grid.Col span={6}>
                <Stack>
                  <Title align="center" size={"44px"} order={1}>
                    VISI
                  </Title>
                  <Text align="center" fw={700} size="md">
                    Desa Sonoageng yang Maju, Mandiri, dan Bernafaskan Keagamaan
                  </Text>
                  <Title align="center" size={"44px"} order={1}>
                    MISI
                  </Title>
                  <List type="ordered">
                    <List.Item>
                      <Text fw={500}>
                        Mewujudkan tata kelola pemerintahan desa yang baik,
                        bersih (good and clean governance) serta layanan publik
                        yang prima berbasis teknologi informasi.
                      </Text>
                    </List.Item>
                    <List.Item>
                      <Text fw={500}>
                        Meningkatkan keterpenuhan sarana dan prasarana
                        pengembangan wilayah, ekonomi, sosial dan lingkungan
                        hidup di desa serta keterpenuhan hak-hak dasar
                        masyarakat.
                      </Text>
                    </List.Item>
                    <List.Item>
                      <Text fw={500}>
                        Meningkatkan pemanfaatan potensi ekonomi untuk
                        kemandirian masyarakat.
                      </Text>
                    </List.Item>
                    <List.Item>
                      <Text fw={500}>
                        Mengembangkan kegiatan strategis desa untuk mendukung
                        kemajuan desa.
                      </Text>
                    </List.Item>
                    <List.Item>
                      <Text fw={500}>Meningkatkan kehidupan beragama.</Text>
                    </List.Item>
                  </List>
                </Stack>
              </Grid.Col>
            </Grid>

            <Stack gap={"xl"}>
              <Box>
                <Title order={1}>BAGAN DESA</Title>
                <Text>Bagan Struktur Desa Sonoageng</Text>
              </Box>
              <Stack>
                <Box>
                  <Title tt={"uppercase"} order={1}>
                    Struktur Organisasi Pemerintahan Desa
                  </Title>
                  <Image
                    src={
                      "https://cdn.digitaldesa.com/uploads/profil/73.11.02.2006/common/400cda6fa33346ce30adf360a1bec880.jpg"
                    }
                  />
                </Box>
              </Stack>
              <Stack>
                <Box>
                  <Title tt={"uppercase"} order={1}>
                    Struktur Organisasi Badan Permusyawaratan Desa
                  </Title>
                  <Image
                    src={
                      "https://cdn.digitaldesa.com/uploads/profil/73.11.02.2006/common/238db8ac9a20b8f91f444eb0cb8498fb.jpg"
                    }
                  />
                </Box>
              </Stack>
              <Stack>
                <Box>
                  <Title order={1}>SEJARAH DESA SONOAGENG</Title>
                </Box>
                <Spoiler
                  maxHeight={230}
                  showLabel="Selengkapnya"
                  hideLabel="Hide"
                >
                  <Text fw={500}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum animi ipsum rerum perspiciatis vitae ad minima
                    doloribus eveniet iste hic voluptatibus officia nisi commodi
                    quis, dolorem earum possimus, cupiditate maiores? Animi at
                    possimus facilis optio repudiandae minima praesentium velit
                    suscipit vel, minus, nulla sit dolorum officia
                    necessitatibus odio? Asperiores eaque fugiat eos ipsa id
                    fugit at nihil autem dolore pariatur. Quos sequi, magni vel
                    quo, dolores, non quis nihil ducimus dignissimos porro ipsam
                    voluptate et? Eaque provident rerum labore aut ea error
                    ullam laudantium beatae voluptas. Tenetur aperiam magni
                    laborum? Error cum nulla numquam commodi, consequuntur
                    maiores culpa eligendi omnis obcaecati, tenetur magni.
                    Reprehenderit repudiandae fugiat officiis fuga quos,
                    explicabo blanditiis doloremque deleniti dolorum assumenda
                    placeat delectus dicta quis facere. Assumenda, nemo magnam
                    illo placeat voluptate praesentium aut temporibus, nulla
                    officiis voluptatem quis ab modi odit. Laboriosam,
                    exercitationem unde sapiente, sed quod molestiae tempore
                    asperiores ipsam optio inventore fugiat quos? Sit expedita
                    id debitis aut voluptatum soluta ducimus est deserunt vel
                    magni. Suscipit rerum aut iure nostrum maiores placeat
                    doloribus quibusdam harum in modi voluptas, fugit vero
                    pariatur quos deleniti? Laborum deleniti, voluptates in
                    nostrum corporis pariatur dolores ducimus quisquam corrupti.
                    Perferendis animi eius iste recusandae voluptate nesciunt
                    totam impedit! Et minima suscipit numquam facere ipsam
                    dolore doloremque quis maxime? Odit cupiditate quo,
                    voluptatibus maxime accusantium facere mollitia magnam
                    recusandae, qui dolorem minima explicabo ullam repudiandae
                    delectus? Id corporis dolorem laboriosam doloremque ab dicta
                    est, consectetur, adipisci sunt, eveniet porro? Sapiente
                    dolor molestiae voluptatum laudantium ea voluptatibus quia
                    delectus voluptates commodi dolorum voluptate reprehenderit
                    atque quod consectetur a labore, cum dolores eligendi iste
                    ducimus itaque blanditiis corporis! Delectus, eos nobis? Est
                    repudiandae velit similique! Incidunt cum non accusamus
                    similique fugiat? Accusamus id fugit provident impedit minus
                    incidunt. Dolore non labore aspernatur iure. Cumque ab
                    itaque vitae fugiat officiis velit repellat. Impedit itaque
                    corrupti voluptatem hic maiores temporibus laborum ex animi,
                    incidunt excepturi soluta molestias expedita, quo
                    repellendus unde modi, voluptas officia assumenda possimus
                    dolorem. Architecto nulla similique sunt aut alias?
                    Voluptatibus aperiam velit deserunt rem numquam. Excepturi,
                    at blanditiis provident vero veniam aut modi, a accusantium
                    consectetur vitae ab officiis? Dolore odio enim impedit
                    delectus ducimus ullam, vitae fuga laboriosam! Repudiandae
                    eveniet nulla voluptatum laboriosam labore a eius autem sed
                    impedit aliquid quod beatae voluptatibus facilis, debitis
                    repellendus voluptas enim quibusdam corrupti! Accusamus
                    consequuntur possimus similique quasi? Asperiores, commodi
                    iusto. Alias corrupti illo odio, quis voluptates vero ipsam
                    illum non obcaecati nisi sed at impedit animi consectetur,
                    perspiciatis magnam accusamus culpa ratione! Ad dicta fuga
                    maxime neque beatae deleniti ut. Enim, et vitae! Pariatur
                    perferendis nostrum reiciendis facere dolorum voluptatum,
                    ducimus, quam explicabo, delectus tempore repellat. Impedit
                    voluptatem asperiores dolore, quidem tempore excepturi,
                    similique nulla voluptas quis, atque nostrum facilis.
                    Suscipit soluta dolorem, ea reiciendis quasi in asperiores
                    sit, aliquam necessitatibus commodi magnam. Exercitationem
                    maiores veniam perferendis, odio laboriosam modi dolores ad
                    delectus, doloremque natus sapiente corrupti. Unde,
                    reiciendis accusantium! Minima architecto ducimus debitis
                    nobis, animi accusamus suscipit magnam. Sint mollitia sed
                    velit corrupti magni. Ullam asperiores excepturi repudiandae
                    aperiam at tempore id, commodi, inventore officiis
                    necessitatibus ex eius? Doloremque! Maiores placeat,
                    inventore adipisci eos corporis ex, esse vel aut ea odit a
                    minima assumenda similique, quos blanditiis! Impedit aliquid
                    soluta fuga aspernatur eaque provident facere numquam,
                    recusandae aut repudiandae. Architecto inventore ea sed
                    debitis. Optio consequuntur amet tempora repellendus,
                    voluptatibus doloremque maxime voluptatum natus sunt, quo ut
                    temporibus suscipit aliquid. Veniam recusandae hic quaerat,
                    temporibus quibusdam reiciendis nemo odit. Dolorem dolore
                    voluptas atque, suscipit obcaecati aut, nam hic praesentium,
                    rerum magni iste eligendi. Laboriosam veritatis voluptatem,
                    dolorum sapiente iusto soluta sunt fugiat quibusdam unde
                    exercitationem, reprehenderit repellendus suscipit eveniet?
                  </Text>
                </Spoiler>
              </Stack>
            </Stack>
            <Stack gap={"lg"}>
              <Box>
                <Title order={1}>PETA LOKASI DESA</Title>
                <Text>Peta Lokasi Desa Sonoageng</Text>
              </Box>
              <Grid gutter={"md"}>
                <Grid.Col span={6}>
                  <Paper p={"md"} shadow="sm">
                    <Stack gap={"xs"} h={424} w={"100%"}>
                      <Title order={1} size="32px">
                        Desa Sonoageng
                      </Title>
                      <Divider size={"sm"} />
                      <Title order={2} fw={500} size="22px" c={"dimmed"}>
                        Batas Desa
                      </Title>
                      <Grid mt={"md"}>
                        <Grid.Col span={6}>
                          <Title order={3} size="24px">
                            Utara
                          </Title>
                          <Text fw={700} size="24px">
                            Desa Kampung Baru
                          </Text>
                        </Grid.Col>
                        <Grid.Col span={6}>
                          <Title order={3} size="24px">
                            Timur
                          </Title>
                          <Text fw={700} size="24px">
                            Desa Kampung Baru
                          </Text>
                        </Grid.Col>
                        <Grid.Col span={6}>
                          <Title order={3} size="24px">
                            Selatan
                          </Title>
                          <Text fw={700} size="24px">
                            Desa Kampung Baru
                          </Text>
                        </Grid.Col>
                        <Grid.Col span={6}>
                          <Title order={3} size="24px">
                            Barat
                          </Title>
                          <Text fw={700} size="24px">
                            Desa Kampung Baru
                          </Text>
                        </Grid.Col>
                      </Grid>
                      <Divider size={"sm"} />
                      <Grid>
                        <Grid.Col span={6}>
                          <Title size="22px" order={3} c={"dimmed"}>
                            Luas Desa
                          </Title>
                        </Grid.Col>
                        <Grid.Col span={6}>
                          <Text fw={700} size="24px">
                            9.300.000 ㎡
                          </Text>
                        </Grid.Col>
                      </Grid>
                      <Divider size={"sm"} />
                      <Grid>
                        <Grid.Col span={6}>
                          <Title size="22px" order={3} c={"dimmed"}>
                            Luas Desa
                          </Title>
                        </Grid.Col>
                        <Grid.Col span={6}>
                          <Text fw={700} size="24px">
                            9.300.000 ㎡
                          </Text>
                        </Grid.Col>
                      </Grid>
                    </Stack>
                  </Paper>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Paper shadow="sm" w={"100%"} h={"100%"}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15816.36155361856!2d112.00446919466805!3d-7.673431611818698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e784fa65f41c897%3A0x53e619cb11c9e7de!2sSono%20Ageng%2C%20Kec.%20Prambon%2C%20Kabupaten%20Nganjuk%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1723974222529!5m2!1sid!2sid"
                      width={"100%"}
                      height={"100%"}
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
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
