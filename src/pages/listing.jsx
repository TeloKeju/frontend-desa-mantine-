import Header from "../Component/header";
import Footer from "../Component/footer";

import { Container, Stack, Title, Text, Box } from "@mantine/core";

export default function Listing() {
  return (
    <>
      <Header></Header>
      <main>
        <Container className="responsiveContainer" mt={"90px"}>
          <Stack gap={"100px"}>
            <Stack p={"md"}>
              <Box>
                <Title order={1} fw={700} size={"44px"}>
                  PETA DESA
                </Title>
                <Text size="xl">Menampilkan Peta Desa</Text>
              </Box>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15816.36155361856!2d112.00446919466805!3d-7.673431611818698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e784fa65f41c897%3A0x53e619cb11c9e7de!2sSono%20Ageng%2C%20Kec.%20Prambon%2C%20Kabupaten%20Nganjuk%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1725293385383!5m2!1sid!2sid"
                width={"100%"}
                height={450}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Stack>
          </Stack>
        </Container>
      </main>
      <Footer></Footer>
    </>
  );
}
