
import emailjs from 'emailjs-com';

// These should be replaced with your actual EmailJS credentials
const SERVICE_ID = 'service_stmaria';
const TEMPLATE_ID = 'template_admission';
const USER_ID = 'YOUR_USER_ID';

export interface EmailParams {
  [key: string]: unknown;
  from_name: string;
  reply_to: string;
  phone: string;
  child_name: string;
  grade: string;
  message: string;
}

export const sendAdmissionInquiry = async (params: EmailParams): Promise<void> => {
  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, params as Record<string, unknown>, USER_ID);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
