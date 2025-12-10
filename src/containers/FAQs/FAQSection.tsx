import {Box, Container, Typography} from "@mui/material"
import { faqQuestions } from "../../data/faqData"
import "./FAQSection.scss"
import FAQCard from "../../components/Accordian/FAQCard"
const FAQSection = () => {
  return (
    <Box component="section" id="faq" className="faq-section">
      <Container maxWidth="md" className="faq-container">

        <Box className="faq-header">
          <Typography variant="h2" className="faq-title">Frequently Asked Questions</Typography>
          <Typography variant="h3" className="faq-subtitle">Everything you need to know before the night</Typography>
        </Box>

        <Box className="faq-list">
          {faqQuestions.map((item) => (
            <FAQCard key={item.id} question={item.question} answer={item.answer} link={item.link}/>
          ))}
        </Box>

      </Container>
    </Box>
  )
}

export default FAQSection
