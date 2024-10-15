import Header from "../Component/header";
import Footer from "../Component/footer";

import {
  Container,
  Stack,
  Title,
  Text,
  Box,
  Image,
  Grid,
  Card,
} from "@mantine/core";

export default function Pemerintah() {
  return (
    <>
      <Header></Header>
      <main>
        <Container className="responsiveContainer" mt={"90px"}>
          <Stack gap={"100px"}>
            <Stack p={"md"}>
              <Box>
                <Title order={1} fw={700} size={"44px"}>
                  SOTK
                </Title>
                <Text size="xl">
                  Struktur Organisasi dan Tata Kerja Desa Sonoageng
                </Text>
              </Box>
              <Image
                src={
                  "https://cdn.digitaldesa.com/uploads/profil/73.11.02.2006/common/400cda6fa33346ce30adf360a1bec880.jpg"
                }
              />
            </Stack>
            <Stack>
              <Title order={1} size={"34px"} fw={700}>
                APARAT PEMERINTAH DESA
              </Title>
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
              </Grid>
            </Stack>
          </Stack>
        </Container>
      </main>
      <Footer></Footer>
    </>
  );
}
