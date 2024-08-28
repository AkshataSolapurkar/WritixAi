import { useState } from 'react';
import { motion } from 'framer-motion';

interface FaqItem {
  context: string;
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
    {
      context: 'Return Policy',
      question: 'What is your return policy?',
      answer: 'Our return policy allows for returns within 30 days of purchase. You can return items by contacting our support team or by visiting our store.',
    },
    {
      context: 'Order Tracking',
      question: 'How do I track my order?',
      answer: 'You can track your order using the tracking link provided in the confirmation email. Alternatively, you can log into your account and view your order history.',
    },
    {
      context: 'Shipping Address',
      question: 'Can I change my shipping address?',
      answer: 'Yes, you can change your shipping address before the order is shipped. Please contact our support team to update your details.',
    },
    {
      context: 'Payment Methods',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers. You can choose your preferred method during checkout.',
    },
    {
      context: 'Support Contact',
      question: 'How can I contact support?',
      answer: 'You can contact our support team via email, phone, or live chat. Our team is available 24/7 to assist you with any inquiries.',
    },
  ];

const FaqCard: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
     <div className="max-w-lg mx-auto space-y-4">
      {faqItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ borderRadius: '8px' }} // Start with a slight rounding
          animate={{
            borderRadius: openIndex === index ? '8px' : '8px', // Square shape when open
          }}
          layout // Enable smooth layout transition
          className="overflow-hidden shadow-md transition-all duration-500"
        >
          <motion.button
            className={`w-full text-center p-4 flex items-center justify-between bg-gray-200 hover:bg-green-300 focus:outline-none transition-colors duration-300 ${
              openIndex === index ? 'bg-green-200 shadow-lg' : ''
            }`}
            onClick={() => toggleOpen(index)}
            layout // Enable smooth layout transition
          >
            <span className="font-semibold text-gray-800">
              {openIndex === index ? item.question : item.context}
            </span>
          </motion.button>

          {openIndex === index && (
            <motion.div
              initial={{ opacity: 0, height: 0 }} // Start closed
              animate={{ opacity: 1, height: 'auto' }} // Animate open
              transition={{ duration: 0.5, ease: 'easeInOut' }} // Smooth easing
              className="p-6 bg-white border-t border-gray-200"
            >
              <p className="text-gray-700">{item.answer}</p>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>

    </div>
    
  );
};

export default FaqCard;
