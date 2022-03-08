import Layout from '../src/components/layout';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SSRProvider } from 'react-bootstrap';
import { useEffect, useState } from 'react';

export default function MyApp({ Component, pageProps }) {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const toggleIndonesiaLanguage = document.getElementById('toggleIndonesiaLanguage');
    const toggleEnglishLanguage = document.getElementById('toggleEnglishLanguage');
    const indonesiaTranslate = document.querySelectorAll('.indonesia-translate');
    const englishTranslate = document.querySelectorAll('.english-translate');

    fetch('http://ip-api.com/json/')
      .then((response) => response.json())
      .then((data) => {
        setCountry(data.countryCode);
        // console.log(data);
      })
      .then(() => {
        if (country === 'ID') {
          toggleIndonesiaLanguage.classList.add('active', 'border');
          toggleEnglishLanguage.classList.remove('active', 'border');
        } else {
          toggleIndonesiaLanguage.classList.remove('active', 'border');
          toggleEnglishLanguage.classList.add('active', 'border');
        }

        if (toggleIndonesiaLanguage.classList.contains('active')) { 
          // console.log({ indonesia: 'active' });
          indonesiaTranslate.forEach((_indonesiaTranslate) => _indonesiaTranslate.classList.remove('d-none'));
          englishTranslate.forEach((_englishTranslate) => _englishTranslate.classList.add('d-none'));
        } else {
          // console.log({ english: 'active' })
          indonesiaTranslate.forEach((_indonesiaTranslate) => _indonesiaTranslate.classList.add('d-none'));
          englishTranslate.forEach((_englishTranslate) => _englishTranslate.classList.remove('d-none'));
        }
      });

      toggleEnglishLanguage.onclick = () => {
        toggleEnglishLanguage.classList.add('active', 'border');
        toggleIndonesiaLanguage.classList.remove('active', 'border');
        indonesiaTranslate.forEach((_indonesiaTranslate) => _indonesiaTranslate.classList.add('d-none'));
        englishTranslate.forEach((_englishTranslate) => _englishTranslate.classList.remove('d-none'));
      };

      toggleIndonesiaLanguage.onclick = () => {
        toggleIndonesiaLanguage.classList.add('active', 'border');
        toggleEnglishLanguage.classList.remove('active', 'border');
        indonesiaTranslate.forEach((_indonesiaTranslate) => _indonesiaTranslate.classList.remove('d-none'));
        englishTranslate.forEach((_englishTranslate) => _englishTranslate.classList.add('d-none'));
      }
  });

  return (
    <SSRProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  );
}
