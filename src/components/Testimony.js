import React, { useState, useEffect } from 'react'
import { testimony } from "../data";
import styled from "styled-components";
import ArrowLeft from '../images/bi_arrow-left.png'
import ArrowRight from '../images/bi_arrow-right.png'
import profileImage from '../images/Ellipse.png';

const Testimony = () => {
    const [value, setValue] = useState(0);

  const updateIndex = () => {
    if (value === 3) {
      setValue(0);
    } else {
      setValue(value + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(value + 1);
    }, 3000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });
    return (
        <TContainer
      key={testimony[value].id}
      className="testimonial"
    >
        <div className='title'>Testimonial</div>
      <div className="testimonial-info">
        <div className="container">
          <div className="testimonial-info-big">
            <p>{testimony[value].description}</p>
            <div className='profile'>
                <div className='profile-image'>
                    <img src={profileImage} alt='profile-pics' />
                </div>
                <div className='profile-details'>
                    <h4>Dominic Solanke</h4>
                    <h5>CEO Uber Eats</h5>
                </div>
            </div>
          </div>
          <div className="controls">
            <a
              className="controls-theme prev"
              href="#prev"
              onClick={() => (value === 0 ? setValue(3) : setValue(value - 1))}
            >
              <span>
                <img src={ArrowLeft} alt='left-arrow' />
              </span>
            </a>
            <a
              className="controls-theme next"
              href="#next"
              onClick={() => (value === 3 ? setValue(0) : setValue(value + 1))}
            >
              <span>
              <img src={ArrowRight} alt='right-arrow' />
              </span>
            </a>
          </div>
        </div>
      </div>
    </TContainer>
    )
}

export default Testimony

const TContainer = styled.div`
    background: #000000;
    background-size: cover;
    position: relative;
    z-index: 0;
    display: grid;
    align-items: center;
    padding: 3em 0;
    transition: 0.3s;
    text-align: center;
    .title {
        font-family: "Playfair Display";
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 48px;
        color: #FFCA47;
    }
    
  .container {
    width: 100%;
    padding-right: 60px;
    padding-left: 60px;
    margin-right: auto;
    margin-left: auto;
    @media (max-width: 568px) { 
        padding-right: 0;
        padding-left: 0;
    }
  }
  
  .testimonial-info-big {
    max-width: 900px;
    margin: 0 auto;
    margin-top: 70px;
    margin-bottom: 100px;
    align-items: center;
    text-align: center;
    padding: 0 60px;
  }
  
  .testimonial-info-big p {
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
    line-height: 33.52px;
    color: #FFFFFF;
    margin-bottom: 50px;
  }
  
  .testimonial-info-big .profile {
   display: flex;
   justify-content: center;
   align-items: center;
   color: #FFF;
   
   .profile-image {
       margin-right: 5px;
     img {
        @media (max-width: 568px) { 
            width: 64px;
            height: 64px;
        }
     }  
   }
   .profile-details {
       text-align: left;
       h4 {
        font-family: Playfair Display;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 32px;
        @media (max-width: 568px) { 
            font-size: 18px;
            line-height: 24px;
        }
       }
       h5 {
        font-family: Rubik;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        @media (max-width: 568px) { 
            font-size: 16px;
            line-height: 19px;
}
       }
   }
  }
  
  .controls-theme {
    position: absolute;
    bottom: 50%;
    color: #fff;
    font-size: 20px;
    margin: 0px;
    display: inline-block;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    line-height: 15px;
    @media (max-width: 568px) { 
        display: none;
    }
  }
  
  .prev {
    left: 50px;
  }
  
  .next {
    right: 50px;
  }
  
  .indicators {
      display: flex;
      justify-content: center;
  }
  
  .indicators > button {
      margin: 5px;
  }
  
  @media (min-width: 992px) {
    .testimonial {
      min-height: 600px;
    }
  
    .container {
      max-width: 960px;
      margin-right: auto;
      margin-left: auto;
    }
  }
  
  @media (max-width: 568px) {
    .testimonial {
      min-height: 500px;
    }
  
    .testimonial-info-big {
      margin-top: 70px;
    }
  
    .testimonial-info-big h5 {
      font-size: 30px;
    }
  }
  
  @media (max-width: 480px) {
    .testimonial-info-big h5 {
      font-size: 38px;
      line-height: 48px;
    }
  
    .testimonial-info-big {
      margin-top: 50px;
    }
  }
  
  @media (max-width: 415px) {
    .testimonial-info-big {
      margin-top: 30px;
    }
  
    .testimonial-info-big h5 {
      font-size: 32px;
      line-height: 42px;
    }
  }
  
  @media (max-width: 384px) {
    .testimonial {
      min-height: 480px;
    }
  
    .testimonial-info-big {
      margin-top: 60px;
    }
  
    .testimonial-info-big h5 {
      font-size: 30px;
      line-height: 38px;
    }
  }
  
`