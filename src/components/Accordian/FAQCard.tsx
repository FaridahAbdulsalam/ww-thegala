import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material"
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import "./FAQCard.scss"

type AccordianProps = {
  question: string;
  answer: string;
  link?: string;
}

const FAQCard = ({question, answer, link}: AccordianProps) => {
  return (
    <Accordion className="faq-item" disableGutters elevation={0}>
      <AccordionSummary 
        expandIcon={<ArrowDropDown/>} 
        className="faq-question-summary"
      >
        <Typography variant="h4" className="faq-question">
          {question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails className="faq-answer-details">
        <Typography variant="body1" className="faq-answer-text">
          {answer}
        </Typography>
        {link && (
          <Typography 
            variant="body1" 
            component="a"
            href={link}
            target="_blank"
            rel="noreferrer"
            className="faq-answer-link"
          >
            Follow the link →
          </Typography>
        )}
      </AccordionDetails>
    </Accordion>
  )
}

export default FAQCard