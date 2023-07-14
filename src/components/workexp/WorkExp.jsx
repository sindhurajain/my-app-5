import React from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import "./workexp.css"
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
  } from '@mui/lab/TimelineOppositeContent';
  


const WorkExp = () => {
  return (
    <Timeline className="tl"       sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}>
    <TimelineItem>
      <TimelineOppositeContent color="black">
      <Typography variant="h6" fontFamily= '"Poppins", sans-serif' component="span">
      May 2023 - Jul 2023
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot variant="outlined"
               sx={{
                borderColor: "black"
                }}
        />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent color="black">
        <Typography component="span"
                              sx={{
                                fontSize: "large",
                                fontWeight:"bold",
                                fontFamily: '"Poppins", sans-serif'
                                }}>
        Machine Learning Research Intern (Full-Time)
          </Typography>
          <Typography component="span"
          sx={{
            fontSize: "medium",
            fontFamily: '"Poppins", sans-serif'
            }}>
            <br></br>
          Agency for Science, Technology and Research
          </Typography>
          <Typography component="span"
          sx={{
            fontSize: "small",
            fontFamily: '"Poppins", sans-serif'
            }}>
            <br></br>
            ● Used PyTorch to explore the use of generative models such as GANs and Variational Autoencoders for query synthesis-based active learning approaches for analog circuit design regression application
          </Typography>
          </TimelineContent>
    </TimelineItem>
    <TimelineItem>

      <TimelineOppositeContent color="black">
      <Typography variant="h6" component="span" fontFamily= '"Poppins", sans-serif'>
      Jan 2023 - Apr 2023
        </Typography>
    </TimelineOppositeContent>

    <TimelineSeparator>
      <TimelineDot variant="outlined"
               sx={{
                borderColor: "black"
                }}
        />
        <TimelineConnector/>      
        </TimelineSeparator>
    <TimelineContent color="black">
      <Typography component="span"
                              sx={{
                                fontSize: "large",
                                fontWeight:"bold",
                                fontFamily: '"Poppins", sans-serif'
                                }}>
        Research Assistant (Part-Time)
          </Typography>
          <Typography component="span"
          sx={{
            fontSize: "medium",
            fontFamily: '"Poppins", sans-serif'
            }}>
            <br></br>
            National University of Singapore
          </Typography>
          <Typography component="span"
          sx={{
            fontSize: "small",
            fontFamily: '"Poppins", sans-serif'
            }}>
            <br></br>
            ● Wrote Python scripts using Epitran library for grapheme-to-phoneme conversion of poetry written
in various languages for “Universals in Language Iconicity” linguistics research project
<br></br>
● Built web scraper in Python using BeautifulSoup to create corpus of Thai poetry
          </Typography>
      </TimelineContent>
    </TimelineItem>


    <TimelineItem>
      <TimelineOppositeContent color="black">
      <Typography variant="h6" component="span" fontFamily= '"Poppins", sans-serif'>
      Jan 2023 - Apr 2023
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
      <TimelineDot variant="outlined"
               sx={{
                borderColor: "black"
                }}
        />
        <TimelineConnector />      
        </TimelineSeparator>
      <TimelineContent color="black">
      <Typography component="span"
                              sx={{
                                fontSize: "large",
                                fontWeight:"bold",
                                fontFamily: '"Poppins", sans-serif'
                                }}>
        Teaching Assistant (Part-Time)
          </Typography>
          <Typography component="span"
          sx={{
            fontSize: "medium",
            fontFamily: '"Poppins", sans-serif'
            }}>
            <br></br>
            School of Computing, National University of Singapore
          </Typography>
          <Typography component="span"
          sx={{
            fontSize: "small",
            fontFamily: '"Poppins", sans-serif'
            }}>
            <br></br>
            ● Conducted 2 weekly tutorial sessions of 30 students each for Digital Ethics & Data Privacy computing class
            <br></br>
● Led discussions on case studies, reinforced content and graded assignments
          </Typography>
      </TimelineContent>
    </TimelineItem>
    <TimelineItem>
    <TimelineOppositeContent color="black">
      <Typography variant="h6" component="span" fontFamily= '"Poppins", sans-serif'>
      Sept 2022 - Jan 2023
        </Typography>
    </TimelineOppositeContent>

      <TimelineSeparator>
      <TimelineDot variant="outlined"
               sx={{
                borderColor: "black"
                }}
        />
        <TimelineConnector />

        </TimelineSeparator>
        <TimelineContent color="black">
      <Typography component="span"
                              sx={{
                                fontSize: "large",
                                fontWeight:"bold",
                                fontFamily: '"Poppins", sans-serif'
                                }}>
        Software Engineering Intern (Part-Time)
          </Typography>
          <Typography component="span"
          sx={{
            fontSize: "medium",
            fontFamily: '"Poppins", sans-serif'
            }}>
            <br></br>
            SpooQy Lab, Centre for Quantum Technologies

          </Typography>
          <Typography component="span"
          sx={{
            fontSize: "small",
            fontFamily: '"Poppins", sans-serif'
            }}>
            <br></br>
            ● Developed a machine learning model in Python using TensorFlow to classify images of clouds by cloud cover
<br></br>

            ● Improved model accuracy from 40% to 90% by balancing classes and using early stopping to
reduce overfitting
            <br></br>
            ● Integrated into a website with Flask backend and ReactJS frontend to predict the classes of user-uploaded images
          </Typography>
      </TimelineContent>
    </TimelineItem>
  </Timeline>

  );
};
  
export default WorkExp;
