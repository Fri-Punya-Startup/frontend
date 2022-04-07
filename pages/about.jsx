import React from "react";
import Image from "next/image";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Styles from "../styles/about/about.module.css";
import { Container, Row, Col } from "reactstrap";

const activityItem = 188;

export default () => (
  <React.Fragment>
    <Navbar />
    <Container fluid>
      <div className={Styles.about}>
        <h2>
          <span>|</span> Our Story
        </h2>
        <p>Kami bermula dari kesadaran akan banyaknya minat mahasiswa/i Fakultas Rekayasa Industri dalam pengembangan bisnis digital dan startup. Pada awal terbentuknya, FPS bermula sebagai sebuah kompetisi startup di FRI untuk melombakan sekaligus mengembangkan startup mereka. Kompetisi tersebut sudah berlangsung selama dua kali dalam kurun waktu tahun 2020 hingga 2021. Pada kompetisi tersebut, kami mengundang beberapa praktisi sebagai coach yang memberikan materi sekaligus melakukan penilaian kepada tim yang mengikuti FPS.</p>
        <p>Tingginya minat dan rasa ingin tahu mahasiswa/i Fakultas Rekayasa Industri terhadap dunia startup membuat kami ingin melebarkan sayap untuk memperoleh peluang-peluang lain dengan mengembangkan sebuah komunitas FPS ini. Sehingga saat ini FPS dapat menjadi sebuah komunitas yang dibentuk dengan tujuan berkembang dan belajar bersama dalam menciptakan sebuah ide bisnis atau startup. Anggota dapat menjalin relasi sesama anggota maupun alumni dan berkembang bersama untuk menciptakan karya - karya unggulan di bawah naungan Fakultas Rekayasa Industri. FPS menjadi sarana untuk mahasiswa FRI (Fakultas Rekayasa Industri) dalam penciptaan sebuah inovasi,karya atau ide bisnis.</p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Row>
          <Col sm={6}>
            <h2>
              <span>|</span> Our Vision
            </h2>
            <p>
              "Menciptakan komunitas unggul dan berprestasi dalam menciptakan
              sebuah karya/produk, inovasi, dan kompetisi baik di dalam kampus
              maupun luar kampus serta menjadi wadah dalam meningkatkan
              kemampuan baik hardskill maupun softskill untuk menciptakan
              inovasi yang unggul dan membuat dampak kepada society di Era
              Revolusi Industri yang terus berkembang."
            </p>
          </Col>
          <Col sm={1}></Col>
          <Col sm={5}>
            <h2>
              <span>|</span> Our Mission
            </h2>
            <ul>
              <li>Meningkatkan kapasitas dan kapabilitas anggota FPS.</li>
              <li>
                Memudahkan anggota FPS untuk menjalin kerjasama dalam
                menciptakan sebuah Karya,Produk, atau Inovasi.
              </li>
              <li>
                Wadah bagi para mahasiswa FRI yang memiliki sebuah produk atau
                karya supaya dapat dikembangkan bersama FPS.
              </li>
              <li>
                Wadah bagi para anggota FPS dalam menjalin relasi di dalam
                komunitas maupun diluar komunitas.
              </li>
              <li>Melatih anggota supaya berpikir adaptif dan inovatif.</li>
            </ul>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h2>
          <span>|</span> Our Board of Director
        </h2>
        <div className={Styles.image}>
          <Row>
            <Col xs={1}></Col>
            <Col xs={12} sm={2}>
              <div className={Styles.activityItem}>
                <Image
                  src="/images/about/ceo.svg"
                  width={activityItem}
                  height={activityItem}
                />
                <h5>CEO</h5>
                <h6>Jhon Doe</h6>
              </div>
            </Col>
            <Col xs={12} sm={2}>
              <div className={Styles.activityItem}>
                <Image
                  src="/images/about/coo.svg"
                  width={activityItem}
                  height={activityItem}
                />
                <h5>COO</h5>
                <h6>Jhon Doe</h6>
              </div>
            </Col>
            <Col xs={12} sm={2}>
              <div className={Styles.activityItem}>
                <Image
                  src="/images/about/cto.svg"
                  width={activityItem}
                  height={activityItem}
                />
                <h5>CTO</h5>
                <h6>Jhon Doe</h6>
              </div>
            </Col>
            <Col xs={12} sm={2}>
              <div className={Styles.activityItem}>
                <Image
                  src="/images/about/cmo.svg"
                  width={activityItem}
                  height={activityItem}
                />
                <h5>CMO</h5>
                <h6>Jhon Doe</h6>
              </div>
            </Col>
            <Col xs={12} sm={2}>
              <div className={Styles.activityItem}>
                <Image
                  src="/images/about/cfo.svg"
                  width={activityItem}
                  height={activityItem}
                />
                <h5>CFO</h5>
                <h6>Jhon Doe</h6>
              </div>
            </Col>
            <Col xs={1}></Col>
          </Row>
        </div>
      </div>
    </Container>
    <Footer />
  </React.Fragment>
);
