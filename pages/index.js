import styled from 'styled-components'
import db from '../db.json';

// Esse const faz por baixo dos panos
// o que esta sendo feito em function1

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.secondary};
// `

// function1
// function Title(props){
//   return (
//   <h1>
//     {props.children}</h1>
//   )
// }



const BackgroundImage = styled.div`
   background-image: url(${db.bg});
   flex: 1;
   background-size: cover;
   background-position: center;
 `;

const QuizContainer = styled.div`
width: 100%;
max-width: 350px;
padding-top: 45px;
margin: auto 10%;
@media screen and (max-width: 500px) {
  margin: auto;
  padding: 15px;
}
`;

const Widget = styled.div`
margin-top: 24px;
margin-bottom: 24px;
border: 1px solid #4CAF50;
background-color: #1C1814;
border-radius: 4px; 
overflow: hidden;

h1, h2, h3{
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 0;
}
p{
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
}
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child{
    margin-top: 0;
  }
  & > *:last-child{
    margin-bottom: 0;
  }
  ul{
    list-style: none;
    padding: 0;
  }
`;


export default function Home() {
  return (
    <BackgroundImage>      
      <QuizContainer>
        <Widget>
        <h1>
        <Widget.Content>
          <p>The legend of zelda</p>
          </Widget.Content>
        </h1>
        </Widget>
        <Widget>
        
        asdfasdfasdfasdf
        
        </Widget>
      </QuizContainer>
    </BackgroundImage>
  );
}
