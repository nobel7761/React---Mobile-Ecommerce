import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
import './QuestionAnswers.css'


export default function Example() {
    return (
        <div>
            <Accordion allowZeroExpanded>

                <AccordionItem >
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            How React Works
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>

                        <p>React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code. React use a lot of component to build the application. In short, Components are the building block of React. React does not commit state changes one after the other if there are multiple state changes. Instead, React goes through its virtual DOM ,creates a list of those changes that need to be made to the actual DOM and then does it all in one single process.</p>
                    </AccordionItemPanel>
                </AccordionItem>




                <AccordionItem >
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Difference Between State and Props
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>

                        <h5><u>State: </u></h5>
                        <p>1. The Data is passed within the component only.</p>
                        <p>2. It is Mutable ( can be modified).</p>
                        <p>3. State can be used only with the state components/class component (Before 16.0).</p>
                        <p>4. State is both read and write.</p>
                        <br />
                        <h5><u>Props: </u></h5>
                        <p>1. The Data is passed from one component to another.</p>
                        <p>2. It is Immutable (cannot be modified).</p>
                        <p>3. Props can be used with state and functional components.</p>
                        <p>4. Props are read-only.</p>
                    </AccordionItemPanel>
                </AccordionItem>




                <AccordionItem >
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            How useState Works
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>

                        <p>useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value. The useState hook allows us declare one or more state variables in function components. Under the hood, React keeps track of these state variables and ensures they stay up-to-date on subsequent re-renders of the component. If you want to set an initial value for the variable, pass the initial value as an argument to the useState function. When React first runs your component, useState will return the two-element array as usual but will assign the initial value to the first element of the array</p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
}