import { useEffect, useState } from 'react';
import './App.css';

import Item from '../components/Item';
import Header from '../components/Header';


function App() {
  const [array, setArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://67c81a650acf98d07084d9b7.mockapi.io/todos')
      .then(res => res.json())
      .then(data => {
        setArray(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Không thể tải danh sách todos');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Đang tải...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div style={{maxWidth: '100%'}}>
      <Header />
     
      <ul style={{width: '100%'}}>
        {array.map((item, index) => (
          <li key={index}>
            <Item text={item.name} image={item.image}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;