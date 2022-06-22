// import axios from 'axios';
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
      <div className="profil">
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
      </div>
      <div className="form">
        <h1>Kritik dan Saran</h1>
        <div className="form-item">
          <p>
            Jika Anda memiliki suatu keluhan, kritik, atau saran seputar website
            ini, silakan masukkan keluhan Anda pada form isian di bawah ini.
            Kritik dan saran Anda akan sangat membantu demi kebaikan sistem ini.
            Terima Kasih.
          </p>
          <form
            method="post"
            ref={formRef}
            onSubmit={handleSubmit}
            name="google-sheet"
          >
            <label className="nama" htmlFor="name">
              Nama
            </label>
            <input className="tem-nama" type="text" name="nama" />
            <label className="email" htmlFor="name">
              Email
            </label>
            <input className="tem-email" type="email" name="email" />
            <label className="subject" htmlFor="name">
              Subject/topik
            </label>
            <input className="tem-subject" type="text" name="topik" />
            <label className="pesan" htmlFor="name">
              Pesan
            </label>
            <textarea className="tem-pesan" name="pesan" />
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
    </>
  );
}
