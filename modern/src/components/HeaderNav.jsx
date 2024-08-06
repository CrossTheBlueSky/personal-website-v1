import { Container, Group, Burger } from '@mantine/core';
import * as classes from '../styles/HeaderNav.modules.css';
import { useDisclosure } from '@mantine/hooks';

const links = [
  { link: '/modern', label: 'Home' },
  { link: '/modern/about', label: 'About' },
  {link: '/modern/projects', label: 'Projects'},
  { link: '/modern/blog', label: 'Blog' },
  { link: '/modern/contact', label: 'Contact' },

];

function HeaderNav() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <a style={{color: '#BBCEA8'}}
      key={link.label}
      href={link.link}
      className={classes.link}
    >
      {link.label}
    </a>
  ));

  return (
      <Container fluid>
        <Group gap={50} visibleFrom="xs" justify="center">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
  );
}

export default HeaderNav