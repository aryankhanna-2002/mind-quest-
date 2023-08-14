import {MailOutline, Room} from '@mui/icons-material';
import styled from 'styled-components'

const Container = styled.div`
display: flex;
background-color:#EEEEEE;
`;
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
margin-left:6%;
`;
const Logo = styled.h1``;
const Description = styled.p`
margin: 20px 0px;
`;
// const SocialContainer = styled.div`
// display: flex;
// `;
// const SocialIcon = styled.div`
// width: 40px;
// height: 40px;
// border-radius: 50%;
// color: white;
// background-color: #${(props) => props.color};
// display: flex;
// align-items: center;
// justify-content: center;
// margin-right: 20px;
// `;
const Center = styled.div`
flex: 1;
padding: 20px;
`;
const Title = styled.h3`
margin-bottom: 30px;
`;
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`;
const Right = styled.div`    
    flex:1;
    padding: 20px;
`;
const ContactItem = styled.div`
margin-bottom:20px;
display: flex;
align-items:center;
`;
// const Payment = styled.img`
// width: 50%;
// `;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>MindQuest</Logo>
                <Description>
                MindQuest is an online quiz website designed to test and improve your knowledge across a wide range of topics. With a user-friendly interface, users can choose from various categories and difficulty levels, and compete with others to achieve the highest scores. Whether you're looking to challenge yourself or learn something new, MindQuest offers a fun and engaging way to do so.                </Description>

            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Register</ListItem>
                    <ListItem>Login</ListItem>
                    <ListItem>Features</ListItem>
                    <ListItem>Help</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{ marginRight: "10px" }} />
                    India
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: "10px" }} />
                    MindQuest@gmail.com
                </ContactItem>
            </Right>
        </Container>
    )
}

export default Footer