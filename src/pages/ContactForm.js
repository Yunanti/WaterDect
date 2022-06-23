import React, { useState, useRef } from 'react';
import './contact.css';

export default function ContactForm() {
  const formRef = useRef(null);
  const scriptUrl =
    'https://script.google.com/macros/s/AKfycbxt-jbSFNXznaJ-_Pkf2ug2BDI4esngIE5vGjmkhUXgFcxsQNRhOUvGkKrH_w9B2xKo/exec';
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch(scriptUrl, {
      method: 'POST',
      body: new FormData(formRef.current),
    })
      .then((res) => {
        console.log('SUCCESSFULLY SUBMITTED');
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <header>
        <img src={require('./../image/ava.jpg')} alt="avatar" />
        <h1>WaterDect</h1>
        <h3>Front-End Disaster Management 3 Group</h3>
        <p>
          Sebuah website gallery yang menampilkan beberapa berita terkini dan
          gambar yang memberikan informasi mengenai daerah-daerah di Indonesia
          yang akan dan mengalami kekeringan, sehingga masyarakat Indonesia
          dapat melakukan pencegahan dini terhadap kekeringan yang akan datang.
        </p>
      </header>
      <main className="profil">
        <h1>Profil Kelompok</h1>
        <div className="grid">
          <div className="card-name ganjil">
            <img src={require('./../image/ava.jpg')} alt="avatar" />
            <h3>Jannatin Ockta A.</h3>
            <p>Front-End Engineer</p>
          </div>
          <div className="card-name genap">
            <img src={require('./../image/ava.jpg')} alt="avatar" />
            <h3>Yunanti Moga H.</h3>
            <p>Front-End Engineer</p>
          </div>
          <div className="card-name ganjil">
            <img src={require('./../image/ava.jpg')} alt="avatar" />
            <h3>Faqih Afivan B.</h3>
            <p>Front-End Engineer</p>
          </div>
          <div className="card-name genap">
            <img src={require('./../image/ava.jpg')} alt="avatar" />
            <h3>Nuzha Musyafira</h3>
            <p>Mentor</p>
          </div>
        </div>
        <h3>Generasi GIGIH 2.0 by YABB-GoTo</h3>
      </main>
      <div className="form">
        <h1>Kritik dan Saran</h1>
        {/* <p>
          Jika Anda memiliki suatu keluhan, kritik, atau saran seputar website
          ini, silakan masukkan keluhan Anda pada form isian di bawah ini.
          Kritik dan saran Anda akan sangat membantu dalam mengembangkan website
          ini. Terima Kasih.
        </p> */}
        <div className="form-item">
          <form
            method="post"
            ref={formRef}
            onSubmit={handleSubmit}
            name="google-sheet"
          >
            <label htmlFor="name">Nama</label>
            <input type="text" name="nama" />
            <label htmlFor="name">Email</label>
            <input type="email" name="email" />
            <label htmlFor="name">Subject/topik</label>
            <input type="text" name="topik" />
            <label className="pesan" htmlFor="name">
              Pesan
            </label>
            <textarea name="pesan" />
            <button
              className="kirim"
              type="submit"
              value={loading ? 'Loading...' : 'SEND MESSAGE'}
            >
              Kirim
            </button>
          </form>
        </div>
      </div>
      <footer>
        <img src={require('./../image/sosmed/ig.png')} alt="Instagram" />
        <img src={require('./../image/sosmed/wa.png')} alt="WhatsApp" />
        <img src={require('./../image/sosmed/fb.png')} alt="Facebook" />
        <img src={require('./../image/sosmed/twt.png')} alt="Twitter" />
      </footer>
    </>
  );
}
