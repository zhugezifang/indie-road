import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cx } from "class-variance-authority";

const link = cx("text-primary font-bold underline-offset-4 hover:underline");

const FAQ = ({ dictionary: dic }: { dictionary: any }) => {
  const faqs = [
    {
      question: dic.faq.q1,
      answer: (
        <span>
          {dic.faq.a11}
          <a
            className={link}
            href="https://github.com/weijunext/indie-hacker-tools"
          >
            {dic.faq.a12}
          </a>
          {dic.faq.a13}
        </span>
      ),
    },
    {
      question: dic.faq.q2,
      answer: dic.faq.a2,
    },
    {
      question: dic.faq.q3,
      answer: (
        <span>
          {dic.faq.a31}
          <a
            className={link}
            href="https://wwglt1tbtro.feishu.cn/wiki/J76KwAJPhiQel8koowBcXqfPnzf"
          >
            {dic.faq.a32}
          </a>
          {dic.faq.a33}
        </span>
      ),
    },
    {
      question: dic.faq.q4,
      answer: (
        <div>
          <ul>
            <li>{dic.faq.a41}</li>
            <li>{dic.faq.a42}</li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <section id="faq" className="py-8 sm:py-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-16">
        <div className="mb-8">
          <h2 className="text-4xl text-center font-bold">{dic.faq.title}</h2>
        </div>
        <Accordion type="single" collapsible>
          {faqs.map(({ question, answer }, i) => (
            <AccordionItem value={`item-${i}`} key={i}>
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
