import React from 'react';
import './finance.css'

import Erotic_main_image from "../../../assets/images/finance/Hero-Original-JPEG-LR.jpg"
import Questionnaire from "../../../assets/images/finance/questionnaire.png"
import IdeaIllustration from "../../../assets/images/finance/idea-iilustration.png"
import Ia1 from "../../../assets/images/finance/ia1.png"
import WireFrame from "../../../assets/images/finance/wireframe-ultimatefinal.jpg"
import Onboarding from "../../../assets/images/finance/Onboarding-2.png"
import FinanceImage from "../../../assets/images/finance/finance_image.png"
import ViewImage1 from "../../../assets/images/finance/transaction-animation-final.gif"
import ViewImage2 from "../../../assets/images/finance/Expenses-Merchant.png"
import CategoriesImage from "../../../assets/images/finance/Category.png"


function Erotic() {
  return (
    <div className="back_page">
      <div className='project_topic' style={{color:'white'}}>
        <h1 style={{fontFamily:'Times New Roman'}}>Personal Finance Management</h1>
        <br></br>
        <p style={{fontFamily:'Times New Roman'}}>Portfolio Project no.3</p>
      </div>
      
      <div style={{paddingLeft:'20%', paddingRight:'20%'}}>
        <img src={Erotic_main_image} style={{width:'100%'}} />
        <p style={{fontFamily:'Times New Roman'}}>An Android app that parses through SMSes sent by banks and visualizes your financial information in an easy to understand manner</p>
        <br></br>
        <br></br>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>
        <br></br>
        <div style={{display:'flex', justifyContent:'space-between'}}>
          <div style={{width:'30%'}}>
            <h3 style={{fontFamily:'Times New Roman'}}>The HYPOTHESIS</h3>
            <br></br>
            <p style={{fontFamily:'Times New Roman'}}>This was before the proliferation of smartphone based wallets. The thinking was that most people in India with smartphones did not access their banking / financial information from their mobile device because of a perceived lack of information security.</p>
          </div>
          <div style={{width:'30%'}}>
            <h3 style={{fontFamily:'Times New Roman'}}>THE OPPORTUNITY</h3>
            <br></br>
            <p style={{fontFamily:'Times New Roman'}}>SAP Labs India ran a program called the "Billion User Initiative" which aimed at disrupting emerging markets like India with new and relevant products. All major Indian banks send transaction confirmations through SMS. The idea was - What if we could enable consumers to see their financial information on a smartphone app without having to connect with internet banking credentials.</p>
          </div>
          <div style={{width:'30%'}}>
            <h3 style={{fontFamily:'Times New Roman'}}>My Role</h3>
            <br></br>
            <p style={{fontFamily:'Times New Roman'}}>I joined SAP India as a full time Senior UX designer, and my role in this project was to validate this hypothesis and lead the end to end interaction & visual design for the product. </p>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <h2 style={{fontFamily:'Times New Roman', textTransform:'uppercase'}}>understanding personal finance management</h2>
          <br></br>
          <div style={{display:'flex', gap:'30px'}}>
            <div style={{width:'50%'}}>
              <p style={{fontFamily:'Times New Roman'}}>The project did not really have a significant research budget and was in a 'proof of concept' mode. However, I decided that it was necessary to get brief insights into how people managed their finances before any other activity. I conducted a survey to achieve this. 
              The results of the survey proved that the hypothesis behind the idea was sound and the opportunity existed. It was clear it had to be an Android based app, as most participants used Android phones.</p>
              <br></br>
              <br></br>
              <p style={{fontFamily:'Times New Roman'}}>1.Debit card was the most often used mode of spending, which meant people received SMS notifications for those transactions.</p>
              <br></br>
              <p style={{fontFamily:'Times New Roman'}}>2.People were reluctant to add transactions manually and automated parsing of SMSs was perceived to be clever.</p>
              <br></br>
              <p style={{fontFamily:'Times New Roman'}}>3.Auto-categorisation of expenses, budgeting, bill reminders and analytics were some of the features participants felt were integral to such a product</p>
            </div>
            <div style={{width:'50%'}}>
              <img src={Questionnaire} style={{width:'100%'}} />
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <h4 style={{fontFamily:'Times New Roman', textTransform:'uppercase'}}>SPENDWELL</h4>
          <br></br>
          <div style={{display:'flex', gap:'30px',flexDirection:'column'}}>
            <div style={{width:'100%'}}>
              <h1 style={{fontFamily:'Times New Roman'}}>A simple, secure app that provides a consolidated financial overview and enables users to track expenses and identify patterns</h1>
              <br></br>
              <br></br>
            </div>
            <div style={{width:'100%'}}>
              <img src={IdeaIllustration} style={{width:'100%'}} />
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <h4 style={{fontFamily:'Times New Roman', textTransform:'uppercase'}}>INFORMATION ARCHITECTURE</h4>
          <br></br>
          <div style={{display:'flex', gap:'30px',flexDirection:'column'}}>
            <div style={{width:'100%'}}>
              <p style={{fontFamily:'Times New Roman'}}>With the idea more or less crystallised, the next activity was to develop an information architecture and think about making a user's journey through the app,  seamless. The information architecture is divided into data acquisition and visualisation. </p>
              <br></br>
              <br></br>
            </div>
            <div style={{width:'100%'}}>
              <img src={Ia1} style={{width:'100%'}} />
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <h4 style={{fontFamily:'Times New Roman', textTransform:'uppercase'}}>Wireframes</h4>
          <br></br>
          <div style={{display:'flex', gap:'30px',flexDirection:'column'}}>
            <div style={{width:'100%'}}>
              <p style={{fontFamily:'Times New Roman'}}>Once the information architecture was finalized, the next step was to quickly draw out all the wireframes and workflows as paper prototypes</p>
              <br></br>
              <br></br>
            </div>
            <div style={{width:'100%'}}>
              <img src={WireFrame} style={{width:'100%'}} />
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <h4 style={{fontFamily:'Times New Roman', textTransform:'uppercase'}}>Mockups</h4>
          <br></br>
          <div style={{display:'flex', gap:'30px',flexDirection:'column'}}>
            <div style={{width:'100%'}}>
              <h3 style={{fontFamily:'Times New Roman'}}>Onboarding</h3>
              <p style={{fontFamily:'Times New Roman'}}>The user onboarding process involved creation of an account, after which the app scans user's SMSes and identifies relevant data. </p>
              <br></br>
              <br></br>
            </div>
            <div style={{width:'100%'}}>
              <img src={Onboarding} style={{width:'100%'}} />
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div style={{display:'flex', gap:'30px',flexDirection:'column'}}>
            <div style={{width:'100%'}}>
              <h3 style={{fontFamily:'Times New Roman'}}>Financial Summary</h3>
              <p style={{fontFamily:'Times New Roman'}}>The home screen provides a quick financial summary for the current month, pattern of expenditure and also a comparison of the expenses to the previous month.</p>
            </div>
            <div style={{width:'100%'}}>
              <img src={FinanceImage} style={{width:'100%'}} />
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div style={{display:'flex', gap:'30px',flexDirection:'column'}}>
            <div style={{width:'100%'}}>
              <h3 style={{fontFamily:'Times New Roman'}}>Viewing expenses from different perspectives</h3>
              <br></br>
              <p style={{fontFamily:'Times New Roman'}}>One of the most important features of the app was its ability to auto-categorise expenses. Users could also view the expenses grouped by merchant. Additionally users could also add an expense (or income) manually.</p>
            </div>
            <div style={{width:'100%',gap:'40px'}}>
              <img src={ViewImage1} style={{width:'50%'}} />
              <img src={ViewImage2} style={{width:'50%'}} />
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div style={{display:'flex', gap:'30px',flexDirection:'column'}}>
            <div style={{width:'100%'}}>
              <h3 style={{fontFamily:'Times New Roman'}}>Categories</h3>
              <br></br>
              <p style={{fontFamily:'Times New Roman'}}>Obviously, there would be some transactions which the system would not be able to categorise automatically.  In such a case, users also had the ability to categorise transactions manually and also create new categories. Once done, future transactions from the same merchant would automatically be assigned appropriate categories.</p>
            </div>
            <div style={{width:'100%',gap:'40px'}}>
              <img src={CategoriesImage} style={{width:'100%'}} />
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <h4 style={{fontFamily:'Times New Roman', textTransform:'uppercase'}}>Reflections</h4>
          <br></br>
          <div style={{display:'flex', gap:'30px',flexDirection:'column'}}>
            <div style={{width:'100%'}}>
              <p style={{fontFamily:'Times New Roman'}}>A very interesting domain to work in, but unfortunately the project was discontinued for various reasons. However, this project provided me with an opportunity to expand a simple hypothesis into a potential product idea rapidly. A lot of the features that were planned then, are now seen in almost every finance management app. </p>
              <br></br>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Erotic;