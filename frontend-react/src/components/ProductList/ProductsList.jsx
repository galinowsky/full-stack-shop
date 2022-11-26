import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';


// import {getProducts} from './rest-api-calls/products.js'

export  function ProductList(){

    const products = [
        {
            "id": 1,
            "name": "mac book air",
            "price": 4500,
            "description": "super cool laptop",
            "createdAt": "2022-11-16T08:28:56.712Z",
            "updatedAt": "2022-11-16T08:28:56.712Z"
        },
        {
            "id": 2,
            "name": "mac book pro",
            "price": 8500,
            "description": "super cool laptop",
            "createdAt": "2022-11-16T08:28:56.713Z",
            "updatedAt": "2022-11-16T08:28:56.713Z"
        },
        {
            "id": 3,
            "name": "iphone 14 pro",
            "price": 8500,
            "description": "extra cool phone",
            "createdAt": "2022-11-16T08:28:56.714Z",
            "updatedAt": "2022-11-16T08:28:56.714Z"
        },
        {
            "id": 4,
            "name": "iphone 13",
            "price": 4500,
            "description": "super cool phone",
            "createdAt": "2022-11-16T08:28:56.715Z",
            "updatedAt": "2022-11-16T08:28:56.715Z"
        }
    ]
    return(
        <Container>
        {products && <List>
          {products.map(product => {
            console.log('hej');
            return (
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={product.title}>{product.name}</ListItemText>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>}
      </Container>

    )

}