
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-blue-900 mb-12">Privacy Policy</h1>
        
        <div className="prose prose-blue max-w-none text-gray-700 space-y-8 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Who are we?</h2>
            <p>
              We are Greater London Financial Services Ltd, an appointed representative of New Leaf Distribution Ltd. Greater London Financial Services Ltd provide financial planning solutions and advice through experienced and qualified advisers based in the UK.
            </p>
            <p>
              Currently Greater London Financial Services Ltd and New Leaf Distribution jointly determine the purposes and means of processing personal client data relating to giving advice. This means we are joint data controllers for these core advice giving activities and therefore responsible for managing this client data and ensuring compliance.
            </p>
            <p>
              However, Greater London Financial Services Ltd is solely responsible for some activities, for example any direct marketing that we undertake.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">What is this privacy statement about?</h2>
            <p>
              To supply our customers with our services we need to use information about you, and some of that may be personal or private. For example we may need to know your name and address, details of how you would like to be contacted (e.g. your mobile phone number), or how you would like to pay for the services we provide you.
            </p>
            <p>
              As we do this, we’d like you to take some time to read this privacy statement. It will explain what information we might collect about you, why we collect it, what we may use it for, and who we may give it to. We’ll also explain your rights towards your information and how we look after it while we have it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">What information do we collect about you?</h2>
            <p>Typical details include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your name and address so we know who you are and what services you need from us.</li>
              <li>Your contact details like phone number or email so that we can keep in touch with you about our services.</li>
              <li>Your bank account or other financial details so we can manage your payment for our services.</li>
              <li>Your employment information and assets/liabilities if you are receiving advice.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">How do we collect information?</h2>
            <p>We usually collect information when you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Complete our fact find and discussion document.</li>
              <li>Contact us for any reason.</li>
              <li>Complete an online form or interact through the client portal.</li>
              <li>Complete a survey or application form.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">What do we do with the information?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide you with the services you want.</li>
              <li>Prevent fraud, money laundering and financial crime.</li>
              <li>Keep our records accurate and up to date.</li>
              <li>Comply with any legal or regulatory obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Who do we share information with?</h2>
            <p>We may share information with employees, carefully selected organisations, credit reference agencies, and regulators when required by law.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Cookies</h2>
            <p>
                A cookie is a piece of information that is stored on your computer’s hard drive by your Web browser. On visiting the Web Site, your computer server will use the cookie to guarantee a secure connection. Greater London Financial Services Ltd does not use cookies to store any personal data or browsing habits.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Your Rights</h2>
            <p>Under GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
                <li>Access all personal information we hold about you.</li>
                <li>Object to processing that causes damage or distress.</li>
                <li>Have your information corrected.</li>
                <li>Stop us direct marketing to you.</li>
            </ul>
            <p className="mt-4">
                To exercise these rights, write to: Privacy Officer, New Leaf Distribution, 1st Floor Princess Caroline House, 1 High Street, Southend on Sea, Essex, SS1 1JE.
            </p>
          </section>

          <section className="bg-gray-100 p-8 rounded-2xl">
              <h2 className="text-xl font-bold text-blue-900 mb-4">Changes to this statement</h2>
              <p className="text-sm">
                  From time to time, we may amend this privacy statement to reflect changes in the law or guidance from the Information Commissioners Office (ICO). We suggest you check our online privacy statement from time to time.
              </p>
              <p className="text-sm mt-4 font-bold">
                  Last Updated: 2026
              </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
