
import {
    
    Image,
    Link,
    Box ,HStack,Text, Divider } from "@chakra-ui/react"

export default function Show({name}){
 return(
    <>  
    <Box mb='10px'p='20px' borderRadius={'25px'} backgroundColor='none'>
    <HStack><Image  h='25px'src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AAAClpaWpqamhoaGtra3Jyclra2tAQEDV1dWdnZ0+Pj7y8vK5ubnFxcU5OTlZWVkhISFUVFR7e3vQ0NARERFMTEzf399lZWUYGBg1NTX5+fmWlpYrKyvl5eXu7u5/f38Hsv9BAAADtUlEQVR4nO2daVfiQBBFgWBYwo6KCKP+/185KJMGshGnX1V3inc/Qs5LXbsPvWSx1yOEEEIIceymq348rKY7sF+ahXYqMU6Bfoe30DqVjGCCs31olxrWB5DgS2iTWkCK76E9GhgjBI+hLRoZ+AvOQjvcwb+fxt2EiEa8/MxsJt5hKCYbV9Uf36wPF7VFlAZj6+r69EyauyRIYThcXb5Tm0Ee9AWoColrxCfPIGcI+FmGMkQVFq0hrDAaBoOG+kFoaKgfhIaGiKDJcFDDUGGOrmHoZhVlhp5n9SsMFjSotlPq0jREBNFQFhoigmgoi6rhKDkP9MnIqmGSf5JYNRy0OBgODRFBNJSFhoigBzK0P1rYH/HL0BAADRFBNJSFhogg+4b2d4Tt7+qHhYb6QWhoqB+Ehob6QWhoqB+Ehob6QWhoqB+ERsNw2q9l6nlWv8JgQfZXwDSUhYaIIBrKQkNE0AMZuiePnqwa2r/KTUMRaIgIoqEsNEQEPdB4WIaGAGiICKKhLDREBNFQFu556wehoaF+EBoa6gehoaF+EBoa6gehoaF+EBoa6geh0TC0f6++/ect7K+AaSgLDRFBNJSFhogg95X95/Htv1PB/lVuGopAQ0QQDWXhaIEIeqARvwwNAdAQEURDWWiICLJvaH9H2P6uflhoqB+Ehob6QWhoqB+Ehob6QWhoqB+Ehoa/D/L9Z5hoYE8CNiwCI4GGNKRheGhIQxqGh3OaezzQvJSG2tBQPwgNDfWD0NAQEdTwxoEy8HcQBL7KXQbeBWiICKIhDcUKgwXRkIZihcGC2iz/5d4zGOZOdsE65JJpSMP4Dd0jFNv/Ooec4TZPTu4f28giD+qXvgpr6OpaeAZ9uKRSIwY1dE3Y//SN2ruoTeG+2DZjndCW+WTjqlp7hx37d2ljKIb/5sEscsODt2GL7ZiQhpB75t8jNswQgr3ZS7SG6xnEsDfbN58nmCFKsNc7vEVpOEL5fbNYRmc4TpGCJ3bHTd25bgwXN7MoKcPVdAf2q6JqTpOe2np59ceN9jaAVpTnnOn4/MGlA0V7YacVxerT7NKLsrT6mG5xW33efjnndrRjWPTLHY0YJs9Z2e+nrz5rvmUBjzNsmNW5r7pt2AYaRkm14eurbcPv+UxaNYc1YpjPZSrGDhOG2dV8NC2OHwYMi4uZQjt23rBqsXbj2HHDrGYxetVXO23YtNh27dhhw+WdzYR/Y0dnDdtslvy0Y0cN77VfzqkdO2k4/8WVu8Vcrg5CCCHi/AUNmDb+yduW8wAAAABJRU5ErkJggg=='></Image>
   <Link href={ name.clone_url}> <Text> {name.full_name}</Text></Link>
    <Image h='35px' borderRadius={'50%'} src={name.owner.avatar_url} />

    </HStack>
    <HStack>
      <Text>  Date :{ name.created_at}</Text>
    <Text> </Text>
    <Text> language : { name.language}</Text>
    
    <Text > Author :{name.owner.login}</Text>
    </HStack>
    
    
    </Box>
    </>

 
 )
}