import React from 'react';
import './Features.css';
import Figure from 'react-bootstrap/Figure';
import FigureImage from 'react-bootstrap/FigureImage';
import FigureCaption from 'react-bootstrap/FigureCaption';
import emoji from '../img/emoji.png';
import iphoneemail from '../img/iphoneemail.png';
import feedback from '../img/feedback.png';
import thumbsup from '../img/thumbsup.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import 'img/customer_feedback.png';

const Features = (props) => {
  // console.log(props.location)
  return (
    <div>
      <h4>Key Features</h4>
      <p>Powered by Natural Language Processing, ToneSense analyzes your word choice to identify your message's tone before you send off that email.</p>
      <Container>
        <Row>
          <Col>
            <Figure>
              <FigureImage 
                src={feedback}
              />
              <FigureCaption>
                <strong>Sentiment Analysis Scoring</strong><br></br>
                Returns your result on a scale of "likely positive", "likely neutral", or "likely negative"
              </FigureCaption>
            </Figure>
          </Col>
          <Col>
            <Figure>
              <FigureImage 
                src={iphoneemail}
              />
              <FigureCaption>
                <strong>Analyze Text in Real Time</strong><br></br>
                Evaluates your submission line by line to determine it's tone
              </FigureCaption>
            </Figure>
          </Col>
        </Row>

        <Row>
          <Col>
            <Figure>
              <FigureImage 
                src={emoji}
              />
              <FigureCaption>
                <strong>Emoji Tone</strong><br></br>
                Suggests an emoji that matches your tone to include along with your message
              </FigureCaption>
            </Figure>
          </Col>

          <Col>
            <Figure>
              <FigureImage 
                src={thumbsup}
              />
              <FigureCaption>
                <strong>Make the Right Impression</strong><br></br>
                ToneSense can help you make the right impression with your tone - the first time
              </FigureCaption>
            </Figure>
          </Col>
        </Row>
      </Container>
      



      
      



    </div>
  )
}


export default Features; 