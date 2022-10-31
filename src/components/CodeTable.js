import { Button, Code, Table, TableCaption, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function CodeTable() {
    const arr = Array.from(Array(26).keys())
    const [char, setChar] = useState("")
    const [data, setData] = useState(null)
    useEffect(()=>{
        console.log('Get Hello World from: ', char)
        axios.get(`http://localhost:3002/hello`).then((res)=>{
            setData(res)
            console.log("Res: ", res)
        })
    }, [char])
    
  return (
    <>
      {
          arr.map((i)=>{
              return <Button colorScheme='blue' margin='1.2vw' onClick={()=>{setChar(String.fromCharCode(i+97))}}>{String.fromCharCode(i+97)}</Button>
          })
      }
                    <Table variant='simple' width='60%' margin='auto'>
                        <TableCaption>Programs to write "Hello World"</TableCaption>
                        <Thead>
                            <Tr>
                            <Th>SERIAL NO</Th>
                            <Th>LANGUAGE</Th>
                            <Th>CODE</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
      {
          (data==null)?'Loading':
          data.data.map((item)=>{
              return (
                  char===""?
                  <>
                            <Tr>
                            <Td>{item.id}</Td>
                            <Td>{item.lang}</Td>
                            <Td>{item.code}</Td>
                            </Tr>
                  </>
                  :char===item.lang[0].toLowerCase()?
                  <>
                            <Tr>
                            <Td>{item.id}</Td>
                            <Td>{item.lang}</Td>
                            <Td>{item.code}</Td>
                            </Tr>
                  </>:""
              )
            })
        }
        </Tbody>
        <Tfoot>
            <Tr>
            <Th>SERIAL NO</Th>
            <Th>LANGUAGE</Th>
            <Th>CODE</Th>
            </Tr>
        </Tfoot>
    </Table>
      {/* <Code colorScheme='cyan' children="var chakra = 'awesome!'" /> */}
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </>
  )
}

export default CodeTable