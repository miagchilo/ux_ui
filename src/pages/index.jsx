import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleSeeMoreClick = () => {
    // Navigate to the "/project" route
    navigate('/project');
  };
    return (
        <div className="portf2-container">
    
          <div className="portf2-portf2">
            <div className="portf2-header">
              <span className="portf2-text">
                <span>miagchilo</span>
              </span>
            </div>
            <div className="portf2-hero"> 
              <span className="portf2-text06">
                <span>STAS MIAGCHILO</span>
              </span>  <div className="portf2-frame5">
                <span className="portf2-text05">
                  <div className="job-title">UX/UI DESIGNER</div>
                    <span>I drive the vision of leading companies to shape impactful
                    brands and concepts .</span>
               
                  </span>
                
              </div>  <div className="portf2-picture"></div>
           
              <div className="portf2-frame50"></div>
            
            </div>
              
               <img
                src="/external/image2023083119254221019-a668-1000h.png"
                alt="ill"
                className="portf2-image202308311925422"
              />
               <span className="project_desc">
            GETTING LOCALS AND EXPATS TOGETHER IN BARCELONA THROUGH GARDENING.
          </span>
                <button className="portf2-frame52"  onClick={handleSeeMoreClick}>
              <span className="portf2-text19">SEE MORE</span>
            </button>
       
            {/* <span className="portf2-text08">
              <span>
                Based in Europe
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                Available worldwide
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span> */}
            <div className="portf2-frame44">
              <span className="portf2-text12"> STAS</span>
              <div className="portf2-frame45"></div>
            </div>
            <div className="portf2-frame47">
              <span className="portf2-text13">
                <span>Get in touch</span>
              </span>
              <div className="portf2-frame471">
                <span className="portf2-text15">
                  <span>
                    WRITE ME A LINE
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <div className="portf2-email-input">
                  <img
                    src="/external/line51031-ocy.svg"
                    alt="Line51031"
                    className="portf2-line5"
                  />
                  <span className="portf2-text17">
                    <span>Email</span>
                  </span>
                  <div className="portf2-frame48">
                    <div className="portf2-group2">
                      <img
                        src="/external/line61031-mmyl.svg"
                        alt="Line61031"
                        className="portf2-line6"
                      />
                      <img
                        src="/external/line71031-quk.svg"
                        alt="Line71031"
                        className="portf2-line7"
                      />
                      <img
                        src="/external/line81031-582v.svg"
                        alt="Line81031"
                        className="portf2-line8"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
          </div>
         
        </div>
      )
    }
    
    
  