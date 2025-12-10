import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./FAQCard.scss"

type AccordianProps = {
  question: string;
  answer: string;
  link?: string;
}

const FAQCard = ({question, answer, link}: AccordianProps) => {
  return (
    <Accordion className="faq-item">
      <AccordionSummary expandIcon={<ArrowDropDownIcon/>} className="faq-question-summary">
      <Typography variant="h4" className="faq-question">{question}</Typography>
      </AccordionSummary>
      <AccordionDetails className="faq-answer">
        <Typography variant="body1" className="faq-answer-text">
          {answer}
        </Typography>
        <Typography variant="body1" className="faq-answer-link">
          {link} 
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}

export default FAQCard
