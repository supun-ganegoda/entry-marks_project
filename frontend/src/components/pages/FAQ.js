import "./FAQ.css";

const FAQ = () => {
  const faqData = [
    {
      question: "What are the eligibility criteria for each category?",
      answer:
        "The eligibility criteria for each category are mentioned in the admission circular. Please review the circular to determine which category your child falls under. Circular can be found on the home page of our website.",
    },
    {
      question: "Can I apply under multiple categories for grade 1 admission?",
      answer:
        "Yes, you can apply under multiple categories if your child meets the eligibility criteria for each category.  Marks for each category can be viewed in the summary section.",
    },
    {
      question: "How are the marks calculated for each category?",
      answer:
        "The marks for each category are calculated based on the information you provide in the application form and the mark calculation criterias in the circular.Please ensure that you accurately fill out all relevant details to receive accurate marks for each category.",
    },
    {
      question:
        "Is there a deadline for submitting the generated PDF form to the school?",
      answer:
        "Yes, the deadline for submitting the generated PDF form, along with the required documents, is mentioned in the admission circular. Please adhere to the deadline for a smooth admission process.",
    },
    {
      question:
        "Can I apply for grade 1 admission without applying under any category?",
      answer:
        "No, you must choose at least one category to apply for grade 1 admission.",
    },
    {
      question: "What should I do after generating the PDF form?",
      answer:
        "After generating the PDF form, you should save and print it. You will need to submit the printed copy along with the required documents during the school admission process.",
    },
    {
      question:
        "What documents do I need to submit along with the printed PDF form?",
      answer:
        "You will need to submit relevant documents such as your child's birth certificate, proof of residence, passport-sized photographs, and any other documents mentioned in the admission circular.",
    },
    {
      question: "How do I fill out the admission form correctly?",
      answer:
        "Filling out the admission form is easy and straightforward. To help you navigate the process, we've provided a video tutorial on our home page. Simply click on the video link.The video will guide you through each step.",
    },
    {
      question:
        "Can I save my progress while filling out the form and come back later?",
      answer:
        "Yes, you can save your progress by clicking the Save button within the form. This will allow you to return to the form later and continue where you left off.",
    },
    {
      question:
        "Are there any additional documents required for specific categories?",
      answer:
        "Additional documents may be required for certain categories. Please refer to the admission circular for details about the documents needed for each category.",
    },
  ];

  return (
    <div className="faq-container">
      <h1 className="topic">Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <div className="question">{item.question}</div>
            <div className="answer">{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
