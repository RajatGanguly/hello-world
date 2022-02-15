import { Box, Button, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios'

function Admin() {
    const [lang, setLang] = useState('')
    const [code, setCode] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        axios.post("http://localhost:3002/hello", {lang, code}).then((res)=>{
            setCode('')
            setLang('')
        }).catch((e)=>{
            console.log(e)
        })
    }
  return (
    <>
      <Box width='48%' margin='auto' marginTop='12vh' >
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
            <FormLabel htmlFor='LanguageName'>Language name</FormLabel>
            <Input className='langName' placeholder='Language name' value={lang} onChange={(e)=>{setLang(e.target.value)}} />
        </FormControl>
        <FormControl isRequired marginTop='8vh'>
            <FormLabel htmlFor='HelloWorldCode'>Hello World Code</FormLabel>
            <Textarea className='helloCode' placeholder='Code' value={code} onChange={(e)=>{setCode(e.target.value)}} />
        </FormControl>
        <Button colorScheme='blue' type='submit' marginTop='6vh'>Submit</Button>
      </form>
      </Box>
    </>
  )
}

export default Admin