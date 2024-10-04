import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQAccordion = () => {
  return (
    <div className="p-5">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-sm">
            What does JustWravel Mean?
          </AccordionTrigger>
          <AccordionContent className="text-xs">
            We often receive this interesting question from our clients!
            JustWravel takes its name from two words, "Wander" and "Travel." If
            you are someone looking for wandering and traveling together, then
            "Wraveling" is your word.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-sm">
            Who are the Travelers of Justwravel?
          </AccordionTrigger>
          <AccordionContent className="text-xs">
            JustWravel, as a social travel community, gives more importance to
            community building and bringing together like-minded people. The
            travelers you are traveling with will be people of your own age and
            those who carry the love for traveling and exploring places like
            you!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-sm">
            What are the Destinations that JustWravel covers?
          </AccordionTrigger>
          <AccordionContent className="text-xs">
            JustWravel covers a wide range of products. We offer group
            departures to North India and North East India, conduct bike and
            backpacking trips, weekend getaways, All Girls trips, International
            Escapes, Himalayan Treks, Corporate Tours, Customized International
            and Domestic Tours.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-sm">
            How experienced are Justwravel’s Trip Captains?
          </AccordionTrigger>
          <AccordionContent className="text-xs">
            All of our key trip leaders are certified with AMC or BMC
            qualifications and are trained in first-aid procedures to ensure the
            safety of the travelers. They will ensure that you are having a
            worry-free journey.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQAccordion;
