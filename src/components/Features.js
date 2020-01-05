import React from 'react';
import './Features.css';
import Figure from 'react-bootstrap/Figure';
import Image from 'react-bootstrap/Image';
import FigureImage from 'react-bootstrap/FigureImage';
import FigureCaption from 'react-bootstrap/FigureCaption';
import emoji from '../img/emoji.png';
import iphoneemail from '../img/iphoneemail.png';
import feedback from '../img/feedback.png';
import thumbsup from '../img/thumbsup.png';
import chatlog from '../img/chatlog.png';

// import 'img/customer_feedback.png';

const Features = (props) => {
  // console.log(props.location)
  return (
    <div>
      <h4>Key Features</h4>
      <p>Powered by Natural Language Processing, ToneSense analyzes your word choice to identify your message's tone before you send off that email.</p>
      <Figure>
        <FigureImage 
          src={emoji}
        />
        <FigureCaption>
          Emoji Tone
        </FigureCaption>
      </Figure>

      <Figure>
        <FigureImage 
          src={iphoneemail}
        />
        <FigureCaption>
          Iphone email
        </FigureCaption>
      </Figure>

      <Figure>
        <FigureImage 
          src={feedback}
        />
        <FigureCaption>
          Sentiment Analysis Scoring returns your result on a scale of "likely positive", "likely neutral", or "likely negative"
        </FigureCaption>
      </Figure>

      <Figure>
        <FigureImage 
          src={thumbsup}
        />
        <FigureCaption>
          Thumbsup
        </FigureCaption>
      </Figure>

      <Figure>
        <FigureImage 
          src={chatlog}
        />
        <FigureCaption>
          Chatlog
        </FigureCaption>
      </Figure>
    </div>
  )
}


export default Features; 