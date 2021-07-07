import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';
import { render } from '@testing-library/react';

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '김찬형',
    'birthday': '961222',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '코기',
    'birthday': '777777',
    'gender': '남자',
    'job': '하하하하'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '코카',
    'birthday': '888888',
    'gender': '여자',
    'job': '강아지'
  }
]

function App() {

  return (
    <div>
     {
       customers.map(c => {
         return (
         <Customer
         key={c.id}
         id={c.id}
         image={c.image}
         name={c.name}
         birthday={c.birthday}
         gender={c.gender}
         job={c.job}
         />
         );
       })
     }
    </div>
  );
}


export default App;
