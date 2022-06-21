import React from 'react';
import './contact.css';

export default function Contact() {
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
          <form>
            <label className="nama">Nama</label>
            <input
              className="tem-nama"
              type="text"
              placeholder="ketikkan nama..."
            />
            <label className="email">Email</label>
            <input
              className="tem-email"
              type="email"
              placeholder="ketikkan email..."
            />
            <label className="subject">Subject/topik</label>
            <input
              className="tem-subject"
              type="text"
              placeholder="ketikkan subject..."
            />
            <label className="pesan">Pesan</label>
            <textarea className="tem-pesan" placeholder="ketikkan pesan..." />
            <button className="kirim" type="submit">
              Kirim
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
