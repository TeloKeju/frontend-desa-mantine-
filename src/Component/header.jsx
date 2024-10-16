import { useState, useEffect } from "react";
import {
  Container,
  Anchor,
  Group,
  Burger,
  Box,
  Image,
  useMantineTheme,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import logo from "/logo.png";
import classes from "./header.module.css";
import { useNavigate, useLocation } from "react-router-dom";

const mainLinks = [
  { link: "/", label: "Home" },
  { link: "/profil", label: "Profil Desa" },
  { link: "/infografis/penduduk", label: "Infografis" },
  { link: "/listing", label: "Listing" },
  { link: "/infografis/idm", label: "IDM" },
  { link: "/berita", label: "Berita" },
  { link: "/belanja", label: "Belanja" },
  { link: "/ppid", label: "PPID" },
];

export default function Header() {
  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: "auto", // Pastikan tidak ada animasi
  //   });
  // });
  useEffect(() => {
    mainLinks.map((item, index) => {
      if (location.pathname === item.link) {
        setActive(index);
      }
    });
  }, []);
  const navigate = useNavigate();
  const location = useLocation();

  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(null);
  const theme = useMantineTheme();

  const mainItems = mainLinks.map((item, index) => (
    <Anchor
      href={item.link}
      key={item.label}
      className={classes.mainLink}
      data-active={index === active || undefined}
      onClick={(event) => {
        event.preventDefault();
        navigate(item.link);
      }}
    >
      {item.label}
    </Anchor>
  ));

  return (
    <header className={classes.header}>
      <Container
        fluid
        h={90}
        className={classes.inner}
        style={{ backgroundColor: "#4F75FF" }}
      >
        <Group>
          <Image radius={"sm"} src={logo} h={80} w={"auto"} />
          <Text>
            <Text c={"white"} size="lg" fw={"700"}>
              Desa Karangrejo
            </Text>
            <Text c={"white"} size="md" fw={"450"}>
              Kabupaten Kediri
            </Text>
          </Text>
        </Group>

        <Box fz={"lg"} className={classes.links} visibleFrom="sm">
          <Group gap={0} justify="flex-end" className={classes.mainLinks}>
            {mainItems}
          </Group>
        </Box>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
          hiddenFrom="sm"
        />
      </Container>
    </header>
  );
}
