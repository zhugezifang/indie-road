import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cx } from "class-variance-authority";

const link = cx("text-primary font-bold underline-offset-4 hover:underline");

const FAQ = () => {
  const faqs = [
    {
      question: "What tools and frameworks will be used?",
      answer: (
        <span>
          Please take a look at this{" "}
          <a
            className={link}
            href="https://github.com/weijunext/indie-hacker-tools"
          >
            list
          </a>{" "}
          of technology stack and tools.
        </span>
      ),
    },
    {
      question: "Is it charged?",
      answer: "Completely free of charge",
    },
    {
      question: "Which projects will be practiced?",
      answer: (
        <span>
          Please take a look at this practical{" "}
          <a
            className={link}
            href="https://wwglt1tbtro.feishu.cn/wiki/J76KwAJPhiQel8koowBcXqfPnzf"
          >
            plan
          </a>
        </span>
      ),
    },
    {
      question: "Who would be suitable to join?",
      answer: (
        <div>
          <span>Target audience</span>
          <ul>
            <li>
              Individuals who want to develop a product but currently lack clear
              goals.
            </li>
            <li>
              People interested in practicing product design and UI design (I
              won't teach, but I can provide some guidance).
            </li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <section id="faq" className="py-8 sm:py-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-16">
        <div className="mb-8">
          <h2 className="text-4xl text-center font-bold">FAQ</h2>
        </div>
        <Accordion type="single" collapsible>
          {faqs.map(({ question, answer }, i) => (
            <AccordionItem value={`item-${i}`}>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
