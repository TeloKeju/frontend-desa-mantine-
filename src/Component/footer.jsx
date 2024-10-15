import {
  Text,
  Container,
  ActionIcon,
  Group,
  rem,
  Image,
  useMantineTheme,
  Grid,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import logo from "/logo.png";
import classes from "./footer.module.css";

const data = [
  {
    title: "Kontak Desa",
    links: [
      { label: "Features", link: "#" },
      { label: "Pricing", link: "#" },
      { label: "Support", link: "#" },
      { label: "Forums", link: "#" },
    ],
  },
  {
    title: "Nomor Telephone Penting",
    links: [
      { label: "Contribute", link: "#" },
      { label: "Media assets", link: "#" },
      { label: "Changelog", link: "#" },
      { label: "Releases", link: "#" },
    ],
  },
  {
    title: "Jelajahi",
    links: [
      { label: "Join Discord", link: "#" },
      { label: "Follow on Twitter", link: "#" },
      { label: "Email newsletter", link: "#" },
      { label: "GitHub discussions", link: "#" },
    ],
  },
];

export default function Footer() {
  const theme = useMantineTheme();
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer
      className={classes.footer}
      style={{ backgroundColor: theme.colors.dark[3] }}
    >
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Image radius={"sm"} src={logo} h={80} w={"auto"} />
          <Text size="xs" c="dimmed" className={classes.description}>
            <Text>Desa Sonoageng</Text>
            <Text>Kecamatan Prambon</Text>
            <Text>Kabupaten Nganjuk</Text>
            <Text>Provinsi Jawa Timur</Text>
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2020 mantine.dev. All rights reserved.
        </Text>

        <Group
          gap={0}
          className={classes.social}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
    // <footer style={{ backgroundColor: theme.colors.dark[3] }}>
    //   <Container>
    //     <Grid>
    //       <Grid.Col span={3}>
    //         {/* <Group> */}
    //         <Grid>
    //           <Grid.Col span={6}>
    //             <Image radius={"sm"} src={logo} h={80} w={"auto"} />
    //           </Grid.Col>
    //           <Grid.Col span={6}>
    //             <Text size="xs" c="dimmed" className={classes.description}>
    //               <Text>Desa Sonoageng</Text>
    //               <Text>Kecamatan Prambon</Text>
    //               <Text>Kabupaten Nganjuk</Text>
    //               <Text>Provinsi Jawa Timur</Text>
    //             </Text>
    //           </Grid.Col>
    //         </Grid>

    //         {/* </Group> */}
    //         <ActionIcon size="lg" color="gray" variant="subtle">
    //           <IconBrandTwitter
    //             style={{ width: rem(18), height: rem(18) }}
    //             stroke={1.5}
    //           />
    //         </ActionIcon>
    //         <ActionIcon size="lg" color="gray" variant="subtle">
    //           <IconBrandYoutube
    //             style={{ width: rem(18), height: rem(18) }}
    //             stroke={1.5}
    //           />
    //         </ActionIcon>
    //         <ActionIcon size="lg" color="gray" variant="subtle">
    //           <IconBrandInstagram
    //             style={{ width: rem(18), height: rem(18) }}
    //             stroke={1.5}
    //           />
    //         </ActionIcon>
    //       </Grid.Col>
    //       <Grid.Col span={3}>2</Grid.Col>
    //       <Grid.Col span={3}>3</Grid.Col>
    //       <Grid.Col span={3}>4</Grid.Col>
    //     </Grid>
    //   </Container>
    // </footer>
  );
}
