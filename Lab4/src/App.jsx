import { useEffect, useState } from 'react';

import Item from '../components/Item';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Filter from '../components/Filter';
import '../src/App.css'


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

  if (loading) return <div className="text-center mt-10">Đang tải...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Main content */}
      <div className="flex flex-col md:flex-row mt-16 max-w-screen-2xl mx-auto px-4">
        {/* Filter Section */}
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <Filter />
        </div>

        {/* Items Section */}
        <div className="w-full md:w-2/3 md:pl-8">
          <ul className="list-none p-0">
            {array.map((item, index) => (
              <li key={index} className="mb-4">
                <Item text={item.name} image={item.image} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;