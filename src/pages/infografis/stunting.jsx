import Header from "../../Component/header";
import Footer from "../../Component/footer";
import Link from "./link";

import {
  Container,
  Stack,
  Title,
  Flex,
  Paper,
  Text,
  Group,
} from "@mantine/core";
import { IconCircleX } from "@tabler/icons-react";

export default function Stunting() {
  return (
    <>
      <Header></Header>
      <main>
        <Container className="responsiveContainer" mt={"90px"}>
          <Link></Link>
          <Stack mt={"100px"} gap={"100px"}>
            <Stack>
              <Title order={1}>Data Stunting</Title>
              <Paper shadow="sm">
                <Flex h={480} gap="md" justify="center" align="center">
                  <Paper p={"lg"} shadow="0" bg={"#f1f3f5"}>
                    <Group c={"dimmed"}>
                      <IconCircleX></IconCircleX>
                      <Text c={"dimmed"} size="lg">
                        Belum Ada Data
                      </Text>
                    </Group>
                  </Paper>
                </Flex>
              </Paper>
            </Stack>
          </Stack>
        </Container>
      </main>
      <Footer></Footer>
    </>
  );
}
