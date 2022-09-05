import React from "react";
import Link from "next/link";
import { Layout } from "../components/layout/Layout";
const privacyPolicy = () => {
  return (
    <Layout>
      <div className="dark:bg-salafi-black dark:text-white break-words px-[2rem] sm:px-[3rem] md:px-[4rem] lg:px-[10rem] xl:px-[16rem] 2xl:px-[30%]">
        <div className="">
          <h1 className="pt-20 md:pt-32 font-bold text-4xl">PRIVACY POLICY</h1>
          <br />
          <p>
            This Privacy Policy describes how your personal information is
            collected, used, and shared when you visit or make a purchase from{" "}
            <Link href="/">
              <a className="text-[#8D70FE]  hover:text-[#7721FF]">
                Talehost.com
              </a>
            </Link>
          </p>

          <h1 className="text-2xl font-bold mt-8 mb-2">
            PERSONAL INFORMATION WE COLLECT
          </h1>
          <div className="space-y-4">
            <p>
              When you visit the Site, we automatically collect certain
              information about your device, including information about your
              web browser, IP address, time zone, and some of the cookies that
              are installed on your device. Additionally, as you browse the
              Site, we collect information about the individual web pages or
              products that you view, what websites or search terms referred you
              to the Site, and information about how you interact with the Site.
              We refer to this automatically-collected information as “Device
              Information”.
            </p>
            <p>
              We collect Device Information using the following technologies: -
              “Cookies” are data files that are placed on your device or
              computer and often include an anonymous unique identifier. For
              more information about cookies, and how to disable cookies, <br />{" "}
              visit{" "}
              <a
                href="http://www.allaboutcookies.org"
                target="_blank"
                className="text-[#8D70FE]  hover:text-[#7721FF]"
              >
                http://www.allaboutcookies.org
              </a>
            </p>
            <p>
              - “Log files” track actions occurring on the Site, and collect
              data including your IP address, browser type, Internet service
              provider, referring/exit pages, and date/time stamps. - “Web
              beacons”, “tags”, and “pixels” are electronic files used to record
              information about how you browse the Site.
            </p>
            <p>
              Additionally when you make a purchase or attempt to make a
              purchase through the Site, we collect certain information from
              you, including your name, payment information (including credit
              card numbers), email address, and phone number. Additionally when
              you purchase or attempt to make a purchase through the Site using
              PayPal, we collect PayPal email address. We refer to this
              information as “Order Information”.
            </p>
            <p>
              When we talk about “Personal Information” in this Privacy Policy,
              we are talking both about Device Information and Order
              Information.
            </p>
          </div>
          <br />
          <br />
          <h1 className="font-bold text-2xl">
            HOW DO WE USE YOUR PERSONAL INFORMATION?
          </h1>
          <div className="space-y-4 mt-2">
            <p>
              We use the Order Information that we collect generally to fulfill
              any orders placed through the Site (including processing your
              payment information, arranging for shipping, and providing you
              with invoices and/or order confirmations). Additionally, we use
              this Order Information to: - Communicate with you; - Screen our
              orders for potential risk or fraud; - When in line with the
              preferences you have shared with us, provide you with information
              or advertising relating to our products or services. - Handle
              disputes We use the Device Information that we collect to help us
              screen for potential risk and fraud (in particular, your IP
              address), and more generally to improve and optimize our Site (for
              example, by generating analytics about how our customers browse
              and interact with the Site, and to assess the success of our
              marketing and advertising campaigns).
            </p>
            <p>
              Additionally, we use Device Information for behavioural
              advertising including retargeting with advertisements that may
              interest you using the advertising platforms offered by: Facebook,
              Google, Snapchat, Pinterest, Reddit, Microsoft among others. Text
              Marketing and notifications (if applicable): By entering your
              phone number in the checkout and initialising a purchase, you
              agree that we may send you text notifications (for your order,
              including abandoned cart reminders) and text marketing offers.
              Text marketing messages will not exceed 5 per month. You can
              unsubscribe from further text messages by replying STOP. Message
              and data rates may apply. (FOR US AND CANADA) SHARING YOUR
              PERSONAL INFORMATION .we may also share your Personal Information
              to comply with applicable laws and regulations, to respond to a
              subpoena, search warrant or other lawful request for information
              we receive, or to otherwise protect our rights.
            </p>
          </div>

          <h1 className="font-bold text-2xl mt-8">BEHAVIOURAL ADVERTISING</h1>

          <div className="space-y-4 mt-2">
            <p>
              As described above, we use your Personal Information to provide
              you with targeted advertisements or marketing communications we
              believe may be of interest to you. For more information about how
              targeted advertising works, you can visit the Network Advertising
              Initiative’s (“NAI”) educational page attempt{" "}
              <a
                href="http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work."
                target="_blank"
                className="text-[#8D70FE]  hover:text-[#7721FF]"
              >
                http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.
              </a>
            </p>
            <p>
              You can opt out of targeted advertising by using the links below:
              -
            </p>
            Facebook :{" "}
            <a
              href="https://www.facebook.com/settings/?tab=ads"
              target="_blank"
              className="text-[#8D70FE]  hover:text-[#7721FF]"
            >
              https://www.facebook.com/settings/?tab=ads
            </a>
            <br />
            Google :{" "}
            <a
              href="https://www.google.com/settings/ads/anonymous"
              target="_blank"
              className="text-[#8D70FE]  hover:text-[#7721FF]"
            >
              https://www.google.com/settings/ads/anonymous
            </a>
            <br />
            Bing :{" "}
            <a
              href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads"
              target="_blank"
              className="text-[#8D70FE]  hover:text-[#7721FF]"
            >
              https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads
            </a>
            <p>
              {" "}
              Additionally, you can opt out of some of these services by
              visiting the Digital Advertising Alliance&lsquo;s opt-out portal
              at : {""}
              <a
                href="https://optout.aboutads.info/."
                target="_blank"
                className="text-[#8D70FE]  hover:text-[#7721FF]"
              >
                https://optout.aboutads.info/.
              </a>
            </p>
          </div>

          <h1 className="font-bold text-2xl mt-10">DO NOT TRACK</h1>
          <p className="mt-2">
            Please note that we do not alter our Site&lsquo;s data collection
            and use practices when we see a Do Not Track signal from your
            browser.
          </p>
          <h1 className="font-bold text-2xl mt-10">YOUR RIGHTS</h1>
          <div className="mt-2 space-y-4">
            <p>
              If you are a European resident, you have the right to access
              personal information we hold about you and to ask that your
              personal information be corrected, updated, or deleted. If you
              would like to exercise this right, please contact us through the
              contact information below.
            </p>
            <p>
              {" "}
              Additionally, if you are a European resident we note that we are
              processing your information in order to fulfill contracts we might
              have with you (for example if you make an order through the Site),
              or otherwise to pursue our legitimate business interests listed
              above.
            </p>
          </div>

          <h1 className="font-bold text-2xl mt-10">DATA RETENTION</h1>
          <p className="mt-2">
            When you place an order through the Site, we will maintain your
            Order Information for our records unless and until you ask us to
            delete this information.
          </p>

          <h1 className="font-bold text-2xl mt-10">CHANGES</h1>
          <p className="mt-2">
            We may update this privacy policy from time to time in order to
            reflect, for example, changes to our practices or for other
            operational, legal or regulatory reasons.
          </p>
          <h1 className="font-bold text-2xl mt-10">MINORS</h1>
          <p className="mt-2">
            The Site is not intended for individuals under the age of 13.
          </p>
          <h1 className="font-bold text-2xl mt-10 ">CONTACT US</h1>
          <p className="mt-2 pb-20">
            For more information about our privacy practices, if you have
            questions, or if you would like to make a complaint, please contact
            us by{" "}
            <a
              href="https://billing.talehost.com/contact.php"
              className="text-[#8D70FE] hover:text-[#7721FF]"
              target="_blank"
            >
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default privacyPolicy;
