import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
    title: "QUESTION ASKED COMMONLY",
    rowContentTextSize: "10px",
    rows: [
        {
            title: "HOW LONG WILL IT TAKE FOR MY ORDER TO ARRIVE?",
            content: `When checking out, you can choose between UPS and USPS. 

            USPS: Priority (delivery in 2-4 business days, according on location) Priority Express (one to three business days, based on the area).
            
            UPS: Ground (based on location, 4 to 8 business days) Choose 3-Day (3 business days) 2-Day Air (two working days) Air Saver for Next Day (one working day) Air Canada Next Day (1 business day) Air Early AM Next Day (one business day) 
            
            Please be conscious that weekends, holidays, and times when sales are at their highest are excluded from this. Orders placed during these times may have a 48-hour delay.  
        
            Due to the high demand on postal services, delivery times may differ on public holidays. Regarding projected delivery times and delivery companies' customer care response, please allow extra time. I appreciate your thoughtfulness.`,
        },


        {
            title: "HOW MUCH IS POSTAGE?",
            content:
                "At checkout, postage is computed according to your destination address and desired delivery mode. Free shipping is available on all orders over $80.",
        },

        {
            title: "CAN YOU DELIVER MY ORDER THROUGH EXPRESS?",
            content: `Yes, at check-out, we do provide a Priority Express option via USPS. Note that next-day delivery is not guaranteed if you choose this Express Post option. `,
        },


        {
            title: "IS WORldWIDE SHIPPING AVAILABLE ?",
            content: `Currently, we only ship online orders to the United States. Due to additional customs taxes and duties, we do not currently ship outside of the United States. There are additional K-Beauty websites that offer shipping to Australia, New Zealand, Asia, Europe, the United Kingdom, and Canada.`,
        },

        {
            title: "WHAT HAPPENS IF MY PACKAGE GOES MISSING? ",
            content: `Unfortunately, we can not change any order information once your order has been processed. Please ensure the correct post codes are entered and if you are in an office building, please add your company name to avoid your package being sent back to us.  `,
        },

        {
            title: "WHAT HAPPENS IF I ENTERED THE WRONG DELIVERY INFORMATION?",
            content: `If your package has been 'stuck in transit' for longer than expected please let us know so we can lodge a 'missing package investigation' with postal service. `,
        },

    
    ],
};

const styles = {
    // bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "black",
    position:"relative",
    // rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
     animate: true,
    // arrowIcon: "V",
    // tabFocus: true

    expandIcon: "+",
    collapseIcon: "-",
    transitionDuration: "1s",
};

export default function CartPageFaq(){

    return (
        <div className="faqParent fof text-4xl relative">
            <Faq
                data={data}
                styles={styles}
                config={config}
                className="relative"
            />
        </div>
    );
}