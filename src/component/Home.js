
import { 
    Progress,
    Text,
    Button,
    Box, Image,Input  ,HStack, Center, ButtonGroup} from '@chakra-ui/react'
import axios from 'axios'
import { useState } from 'react'
import Show from './showrepo'
export default function Home(){
const [search,searchvalue]=useState('')
const[data,setdata]=useState('')
const [page,setpage]=useState(1)
const [tpage,setp]=useState(1)
const [load,setload]=useState(false)


const Next =()=>{
    if(page==tpage)
    return
    setpage(page+1)
    Dat()
}

const Pre=()=>{
    if(page==1)
    return
    setpage(page-1)
    Dat()
}

 async function Dat(){
     await axios.get(`https://api.github.com/search/repositories?q=${search}&per_page=10&page=${page}`)
     .then((x)=>{
        
        setdata(x.data.items)
        var t= x.data.total_count%10==0?x.data.total_count/10: Math.round(x.data.total_count/10+1)
        setp(t)
    data===''?setload(false):setload(true)
    })
    
     if(load){
        console.log(data)
     }
    }
    

 return(
<>
<Box bg='skyblue'>

 <HStack spacing={'50px'}

 p={'5px'}  w='99%' backgroundColor={'black'} border='5px'>
 
 <Image h='50px' src='data:image/png;base64,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'/>
 
 <Text  color={'white'}>Deen Shah Scion</Text>
 
 
 <Input  h='25px' w='295px' borderRadius={'5px'} placeholder='Search Repo'
 onChange={e=>{
    setpage(1)
    searchvalue(e.target.value)}}
 
 ></Input>
 <ButtonGroup>
<Button  w='80px' h='35px'   colorScheme='blackAlpha' onClick={Dat}> Search</Button>
</ButtonGroup>
 </HStack>









<Box backgroundColor={'black'} position={'fixed'}bottom={'0'} w={'100%'}>
    <Center>
        <Text color={'white'}>Made with S and D Shah blessings
        </Text>
    </Center>

</Box>
<Box m='50px' mt='100px'>
{
load?data.map((e ,i)=>< Show    key={i}name={e}/>):<Image src='https://us.123rf.com/450wm/lishchyshyn/lishchyshyn1904/lishchyshyn190403199/132862735-vector-loading-icon-futuristic-progress-design.jpg?ver=6'/>
}
</Box>
<Center mb={'80px'}>
<Button onClick={ Pre}> {'<<'} </Button>
<Text>{page}/{tpage}</Text>
<Button onClick={ Next}> {'>>'} </Button>

</Center>
</Box>
</>



 )



}