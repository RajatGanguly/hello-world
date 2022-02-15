import React from 'react'
import { Box, Button, FormControl, Heading, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    function up(){
      window.scrollTo({top: 0, behavior: 'smooth'})
    }
  return (
    <>
        <Box boxSize='sm' className='navBox' onClick={up}>
            <Link to='/'>
              <Image src='/images/logo.png' alt='code' boxSize='100px' />
              <Heading marginTop='-10vh' marginLeft='-72vw'>Hello World</Heading>
            </Link>
            <Box marginTop='-6vh' className='navSearch' onClick={onOpen}>
                <Search2Icon onClick={onOpen} />
            </Box>
        </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Search Language</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Input placeholder='Type Language' />
            </FormControl>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Search
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Navbar