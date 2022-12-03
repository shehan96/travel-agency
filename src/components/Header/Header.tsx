import { Flex, Box, Image, List, ListItem, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';

const Header = () => {
  return (
    <Flex
      justifyContent='space-between'
      alignItems='center'
      backgroundColor={'blackAlpha.50'}
      px={['0px', '0px', '30px', '30px']}
      position='absolute'
      width={'100%'}
    >
      {/** test */}
      <Box>
        {/** mobile view toogle button */}
        {/** large screen logo */}
        <Image src='https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/hotel-1.png' alt='site logo' />
      </Box>
      <Box>
        {/** large screen menu */}
        <List display='flex' alignItems='center' justifyContent='space-between'>
          <ListItem padding={'35px 24px 35px 10px'}>Home</ListItem>
          <ListItem padding={'35px 24px 35px 10px'}>About Us</ListItem>
          <ListItem padding={'35px 24px 35px 10px'}>FAQ</ListItem>
          <ListItem padding={'35px 24px 35px 10px'}>Contact Us</ListItem>
          <Menu>
            <MenuButton as={Button}>Actions</MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </List>
      </Box>
      <Box>dd</Box>
    </Flex>
  );
};

export { Header };
