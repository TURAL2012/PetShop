import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./style.scss";
import Banner from "../../components/Banner";
const Faq = () => {
  return (
    <>
    <Banner title='Faq' bg='https://pawfriends.qodeinteractive.com/wp-content/uploads/2019/08/p3-title-img.jpg' />
      <section className="faq">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Question number 1</Accordion.Header>
            <Accordion.Body>
            Lorem ipsum dolor sit amet, ei amet dolorum impedit vim. Odio atqui populo cum ei, ad volumus moderatius eos. Veniam iracundia te vix. Cum ut iudico intellegam comprehens, case vero quo at. Vim ex tation nonumes ei.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Question number 2</Accordion.Header>
            <Accordion.Body>
            Nam suas equidem corpora no, mea id ancillae pertinax. Brute illud instructior sed ut. Cu sit dicat tamquam nostrum. Quem scripserit eam et, ignota inermis principes in mel. Cetero moderatius eam ex.


            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Question number 3</Accordion.Header>
            <Accordion.Body>
            Lorem ipsum dolor sit amet, ei amet dolorum impedit vim. Odio atqui populo cum ei, ad volumus moderatius eos. Veniam iracundia te vix. Cum ut iudico intellegam comprehensam, case vero quo at. Vim ex tation nonumes salutandi, mea fuisset fierent deterruisset ei.


            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Question number 4</Accordion.Header>
            <Accordion.Body>
            Nam suas equidem corpora no, mea id ancillae pertinax. Brute illud instructior sed ut. Cu sit dicat tamquam nostrum. Quem scripserit eam et, ignota inermis principes in mel. Cetero moderatius eam ex.


            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
    </>
  );
};

export default Faq;
