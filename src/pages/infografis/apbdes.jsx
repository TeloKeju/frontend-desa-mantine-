import Header from "../../Component/header";
import Footer from "../../Component/footer";
import Link from "./link";

import {
  pendapatanBelanja,
  pendapatanDesa,
  belanjaDesa,
  pembiayaanDesa,
} from "./data/dataInfografis";

import { dataPendapatan, dataBelanja, dataBiaya } from "./data/dataApbd";

import {
  Stack,
  Container,
  Box,
  Grid,
  Text,
  Title,
  SimpleGrid,
  Select,
  Flex,
  Paper,
  Group,
  Accordion,
  Table,
} from "@mantine/core";

import { BarChart } from "@mantine/charts";

import { IconArrowBadgeUpFilled, IconPointFilled } from "@tabler/icons-react";

export default function Apbdes() {
  const itemDapat = dataPendapatan.map((item) => {
    return (
      <Accordion.Item key={item.value} value={item.value}>
        <Accordion.Control>
          <SimpleGrid cols={2}>
            <Box>{item.value}</Box>
            <Box align="end">{item.pendapatan}</Box>
          </SimpleGrid>
        </Accordion.Control>
        <Accordion.Panel>
          <Table withRowBorders>
            <Table.Thead>
              <Table.Th>Uraian</Table.Th>
              <Table.Th>Anggaran</Table.Th>
            </Table.Thead>
            <Table.Tbody>
              <Table.Tr>
                <Table.Td>{item.uraian}</Table.Td>
                <Table.Td>{item.anggaran}</Table.Td>
              </Table.Tr>
            </Table.Tbody>
          </Table>
        </Accordion.Panel>
      </Accordion.Item>
    );
  });

  const itemBeli = dataBelanja.map((item) => {
    return (
      <Accordion.Item key={item.values} value={item.values}>
        <Accordion.Control>
          <SimpleGrid cols={2}>
            <Box>{item.values}</Box>
            <Box align="end">{item.pendapatans}</Box>
          </SimpleGrid>
        </Accordion.Control>
        <Accordion.Panel>
          <Table withRowBorders>
            <Table.Thead>
              <Table.Th>Uraian</Table.Th>
              <Table.Th>Anggaran</Table.Th>
            </Table.Thead>
            <Table.Tbody>
              <Table.Tr>
                <Table.Td>{item.uraians}</Table.Td>
                <Table.Td>{item.anggarans}</Table.Td>
              </Table.Tr>
            </Table.Tbody>
          </Table>
        </Accordion.Panel>
      </Accordion.Item>
    );
  });

  const itemBiaya = dataBiaya.map((item) => {
    return (
      <Accordion.Item key={item.valuex} value={item.valuex}>
        <Accordion.Control>
          <SimpleGrid cols={2}>
            <Box>{item.valuex}</Box>
            <Box align="end">{item.pendapatanx}</Box>
          </SimpleGrid>
        </Accordion.Control>
        <Accordion.Panel>
          <Table withRowBorders>
            <Table.Thead>
              <Table.Th>Uraian</Table.Th>
              <Table.Th>Anggaran</Table.Th>
            </Table.Thead>
            <Table.Tbody>
              <Table.Tr>
                <Table.Td>{item.uraianx}</Table.Td>
                <Table.Td>{item.anggaranx}</Table.Td>
              </Table.Tr>
            </Table.Tbody>
          </Table>
        </Accordion.Panel>
      </Accordion.Item>
    );
  });

  return (
    <>
      <Header></Header>
      <main>
        <Container className="responsiveContainer" mt={"90px"}>
          <Link></Link>
          <Stack gap={"100px"}>
            <Grid justify="center" align="center">
              <Grid.Col span={5}>
                <Title>APB Desa Sonoageng Tahun 2024</Title>
                <Text>
                  Desa Sonoageng, Kecamatan Prambon, Kabupaten Nganjuk, Provinsi
                  Jawa Timur
                </Text>
              </Grid.Col>
              <Grid.Col span={7}>
                <Stack>
                  <Flex justify={"flex-end"}>
                    <Select
                      mt="md"
                      defaultValue="2024"
                      data={["2024", "2023", "2022"]}
                    />
                  </Flex>
                  <SimpleGrid cols={2}>
                    <Paper shadow="sm" p={"md"} withBorder>
                      <Group>
                        <IconArrowBadgeUpFilled color="green"></IconArrowBadgeUpFilled>
                        <Text size="lg" fw={500}>
                          Pendapatan
                        </Text>
                      </Group>
                      <Text c={"green"} size="24px" fw={700}>
                        Rp2.211.273.600,00
                      </Text>
                    </Paper>
                    <Paper shadow="sm" p={"md"} withBorder>
                      <Group>
                        <IconPointFilled></IconPointFilled>
                        <Text size="lg" fw={500}>
                          Belanja
                        </Text>
                      </Group>
                      <Text c={"green"} size="24px" fw={700}>
                        Rp0,00
                      </Text>
                    </Paper>
                  </SimpleGrid>
                  <Paper shadow="sm">
                    <Paper withBorder radius={0} size="lg" fw={500} p={"sm"}>
                      Pembiayaan
                    </Paper>
                    <SimpleGrid cols={2} spacing={0}>
                      <Paper radius={0} p={"sm"} withBorder>
                        <Group>
                          <IconPointFilled></IconPointFilled>
                          <Text size="lg" fw={500}>
                            Penerimaan
                          </Text>
                        </Group>
                        <Text size="24px" fw={700}>
                          Rp0,00
                        </Text>
                      </Paper>
                      <Paper p={"sm"} radius={0} withBorder>
                        <Group>
                          <IconPointFilled></IconPointFilled>
                          <Text size="lg" fw={500}>
                            Pengeluaran
                          </Text>
                        </Group>
                        <Text size="24px" fw={700}>
                          Rp0,00
                        </Text>
                      </Paper>
                    </SimpleGrid>
                  </Paper>
                  <Paper shadow="sm" p={"md"} withBorder>
                    <Group justify="center">
                      <Text size="lg" fw={500}>
                        Surplus/Defisit
                      </Text>
                      <Text c={"green"} size="24px" fw={700}>
                        Rp2.211.273.600,00
                      </Text>
                    </Group>
                  </Paper>
                </Stack>
              </Grid.Col>
            </Grid>

            <Stack>
              <Title order={1}>
                Pendapatan dan Belanja Desa dari Tahun ke Tahun
              </Title>
              <BarChart
                p={"md"}
                h={300}
                data={pendapatanBelanja}
                dataKey="tahun"
                series={[
                  { name: "Pendapatan", color: "violet.6" },
                  { name: "Belanja", color: "blue.6" },
                ]}
                tickLine="y"
                gridAxis="xy"
              />
            </Stack>

            <Stack>
              <Title order={1}>Pendapatan Desa 2024</Title>
              <BarChart
                p={"md"}
                h={300}
                data={pendapatanDesa}
                dataKey="judul"
                series={[{ name: "jumlah", color: "violet.6" }]}
                tickLine="y"
                gridAxis="xy"
              />
              <Accordion variant="separated" radius={"xs"}>
                {itemDapat}
              </Accordion>
            </Stack>

            <Stack>
              <Title order={1}>Belanja Desa 2024</Title>
              <BarChart
                h={300}
                data={belanjaDesa}
                dataKey="judul"
                series={[{ name: "jumlah", color: "violet.6" }]}
                tickLine="y"
                gridAxis="xy"
              />
              <Accordion variant="separated" radius={"xs"}>
                {itemBeli}
              </Accordion>
            </Stack>

            <Stack>
              <Title order={1}>Pembiayaan Desa 2024</Title>
              <BarChart
                h={300}
                data={pembiayaanDesa}
                dataKey="judul"
                series={[{ name: "jumlah", color: "violet.6" }]}
                tickLine="y"
                gridAxis="xy"
              />
              <Accordion variant="separated" radius={"xs"}>
                {itemBiaya}
              </Accordion>
            </Stack>
          </Stack>
        </Container>
      </main>
      <Footer></Footer>
    </>
  );
}
