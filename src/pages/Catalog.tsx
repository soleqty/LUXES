
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { useLocale } from '../context/LocaleContext';

const products = [
  { id: 1, name: 'LIMITED GAZETTE', price: 4990, image: './images/futbolka.jpg' },
  { id: 2, name: 'MAMONT', price: 2990, image: './images/MM.jpg' },
  { id: 3, name: 'BMW?', price: 2990, image: './images/BMW.jpg' },
  { id: 4, name: 'ВВЕРХ', price: 4990, image: './images/KRILUA.jpg' },
  { id: 5, name: 'KPE$T', price: 10990, image: './images/fff.jpg' },
  { id: 6, name: 'МОЛИСЬ', price: 15990, image: './images/krest.jpg' },
  { id: 7, name: 'REDBOY', price: 10990, image: './images/5fb608fcc52d7773d000b452-1.jpg' },
  { id: 8, name: 'LOVE', price: 8990, image: './images/girl.jpg' },
];

const Catalog = () => {
  const { t } = useLocale();
  
  useEffect(() => {
    document.title = 'LUXE$ | Catalog';
  }, []);

  return (
    <div className="min-h-screen bg-[#2C2C2C] font-['Rubik'] flex flex-col">
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-70" 
        style={{ backgroundImage: 'url("./images/bg1.png")' }}
      ></div>
      
      <Header />
      
      <div className="pt-28 pb-16 relative z-10 flex-grow">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <div className="bg-brand-pink text-white px-8 py-3 rounded-full text-xl font-semibold">
              {t('catalog.title')}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard 
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Catalog;
