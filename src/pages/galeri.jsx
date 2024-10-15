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
  Pagination,
  Center,
} from "@mantine/core";

export default function Galeri() {
  return (
    <>
      <Header></Header>
      <main>
        <Container className="responsiveContainer" mt={"90px"}>
          <Stack gap={"100px"}>
            <Stack p={"md"}>
              <Box>
                <Title order={1} size={"44px"} fw={700}>
                  GALERI DESA
                </Title>
                <Text size="xl">
                  Menampilkan kegiatan-kegiatan yang berlangsung di desa
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
