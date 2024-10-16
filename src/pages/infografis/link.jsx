import {
  Grid,
  Title,
  Flex,
  UnstyledButton,
  Button,
  Box,
  Text,
} from "@mantine/core";
import {
  IconUsers,
  IconCash,
  IconChartBar,
  IconPackage,
  IconCrown,
  IconNumbers,
} from "@tabler/icons-react";

import { useNavigate } from "react-router-dom";

export default function Link() {
  const Navigate = useNavigate();

  return (
    <>
      <Grid justify="center" align="center">
        <Grid.Col span={5}>
          <Title tt={"uppercase"} order={1} size={"44px"}>
            Infografis
            <br />
            Desa Karangrejo
          </Title>
        </Grid.Col>
        <Grid.Col span={7}>
          <Grid>
            <Grid.Col span={2} w={50}>
              <UnstyledButton
                p={"10px 16px"}
                component="a"
                onClick={() => Navigate("/infografis/penduduk")}
              >
                <Box className="" align="center" fw={"bold"}>
                  <IconUsers></IconUsers>
                  <Text className="info-mainLinks">Penduduk</Text>
                </Box>
              </UnstyledButton>
            </Grid.Col>
            <Grid.Col span={2}>
              <UnstyledButton
                p={"10px 16px"}
                component="a"
                onClick={() => Navigate("/infografis/apbdes")}
              >
                <Box className="" align="center" fw={"bold"}>
                  <IconCash></IconCash>
                  <Text className="info-mainLinks">APBDes</Text>
                </Box>
              </UnstyledButton>
            </Grid.Col>
            <Grid.Col span={2}>
              <UnstyledButton
                p={"10px 16px"}
                component="a"
                onClick={() => Navigate("/infografis/stunting")}
              >
                <Box className="" align="center" fw={"bold"}>
                  <IconChartBar></IconChartBar>
                  <Text className="info-mainLinks">Stunting</Text>
                </Box>
              </UnstyledButton>
            </Grid.Col>
            <Grid.Col span={2}>
              <UnstyledButton
                p={"10px 16px"}
                component="a"
                onClick={() => Navigate("/infografis/bansos")}
              >
                <Box className="" align="center" fw={"bold"}>
                  <IconPackage></IconPackage>
                  <Text className="info-mainLinks">Bansos</Text>
                </Box>
              </UnstyledButton>
            </Grid.Col>
            <Grid.Col span={2}>
              <UnstyledButton
                p={"10px 16px"}
                component="a"
                onClick={() => Navigate("/infografis/idm")}
              >
                <Box className="" align="center" fw={"bold"}>
                  <IconCrown></IconCrown>
                  <Text className="info-mainLinks">IDM</Text>
                </Box>
              </UnstyledButton>
            </Grid.Col>
            <Grid.Col span={2}>
              <UnstyledButton
                p={"10px 16px"}
                component="a"
                onClick={() => Navigate("/infografis/sdgs")}
              >
                <Box className="" align="center" fw={"bold"}>
                  <IconNumbers></IconNumbers>
                  <Text className="info-mainLinks">SDGs</Text>
                </Box>
              </UnstyledButton>
            </Grid.Col>
          </Grid>
          {/* <Flex direction={"row"} w={"100%"}> */}

          {/* </Flex> */}
        </Grid.Col>
      </Grid>
    </>
  );
}
